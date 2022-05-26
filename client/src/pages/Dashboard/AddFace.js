import { useState } from "react"
import { AddFaceContainer , UserContainer} from "../../components/AddFaceComponents"
import Wrapper from "../../assets/wrappers/AddFaceMain"
import { useAppContext } from "../../context/appContext"
import { Message } from "../../components/UI"
const AddFace = () => {
    const [toggleBtn, setToggleBtn] = useState(false)
    const {imageId} = useAppContext();
    
    const clickHandler = () => {
        setToggleBtn(!toggleBtn)
    }
    const status = imageId === ' ' ? true : false
    return (
       <Wrapper>
        {status && <Message>Please Upload Passport Size Photo.</Message>}
        {status && <AddFaceContainer />}
        <button onClick={clickHandler} className='btn'>Show Face</button>
        {toggleBtn && <UserContainer />} 
       </Wrapper>
    )
}
export default AddFace