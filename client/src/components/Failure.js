import Wrapper from "../assets/wrappers/Failure"
import { useAppContext } from "../context/appContext"
import failure from '../assets/images/decline.jpg'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

// if face is not recognized than this component will render 
const Failure = () => {
    const navigate = useNavigate();
    const { clearValues, logoutUser } = useAppContext();


    useEffect(() => {
        setTimeout(() => {
            clearValues();
            logoutUser();
            navigate('/landing')
        }, 4000);
    })

    return (
        <Wrapper className='full-page'>
            <div className="form">
                <img src={failure} alt='Fail' />
                <div className="info">
                    <h3>Transaction Unsuccessful</h3>
                    <p>Unknown FaceId Detected.</p>
                </div>

            </div>

        </Wrapper>

    )
}

export default Failure