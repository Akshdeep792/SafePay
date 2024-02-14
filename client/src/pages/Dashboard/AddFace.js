import { useEffect, useState } from "react"
import { AddFaceContainer, UserContainer } from "../../components/AddFaceComponents"
import Wrapper from "../../assets/wrappers/AddFaceMain"
import { useAppContext } from "../../context/appContext"
import { Message } from "../../components/UI"
const AddFace = () => {
    const [toggleBtn, setToggleBtn] = useState(false)
    const { imageId } = useAppContext(); // coming from backend if image exist than its value will not empty string
    const [status, setStatus] = useState(false) //it is for showing option of add image if not added


    useEffect(() => {
        if (imageId !== '') {
            setStatus(true)
        }
    }, [imageId])
    // handle weather you want to see picture or not
    const clickHandler = () => {
        setToggleBtn(!toggleBtn)
    }




    return (
        <Wrapper>
            {/* message for showing instruction of photo to be uploaded */}
            {!status && <Message>Please Upload Passport Size Photo.</Message>}

            {/* if user already had uploaded the photo */}
            {!status && <AddFaceContainer />}

            <button onClick={clickHandler} className='btn'>Show Face</button>
            {toggleBtn && <UserContainer />}
        </Wrapper>
    )
}
export default AddFace