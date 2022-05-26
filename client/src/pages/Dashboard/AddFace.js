import { useState } from "react"
import { AddFaceContainer , UserContainer} from "../../components/AddFaceComponents"
import Wrapper from "../../assets/wrappers/AddFaceMain"
import { useAppContext } from "../../context/appContext"
import { Message } from "../../components/UI"
const AddFace = () => {
    const [toggleBtn, setToggleBtn] = useState(false)
    const {imageId} = useAppContext(); // coming from backend if image exist than its value will not empty string
    
    // handle weather you want to see picture or not
    const clickHandler = () => {
        setToggleBtn(!toggleBtn)
    }
    const status = imageId === ' ' ? true : false // for showing add user form 
    return (
       <Wrapper>
           {/* message for showing instruction of photo to be uploaded */}
        {status && <Message>Please Upload Passport Size Photo.</Message>} 

        {/* if user already had uploaded the photo */}
        {status && <AddFaceContainer />}

    
        <button onClick={clickHandler} className='btn'>Show Face</button>
        {toggleBtn && <UserContainer />} 
       </Wrapper>
    )
}
export default AddFace