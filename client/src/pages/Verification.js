import { useAppContext } from "../context/appContext"
import { useNavigate } from "react-router-dom";
import WebcamCapture from "../components/Webcam/Webcam";
import Wrapper from "../assets/wrappers/Verification";
import Logo from "../components/UI/Logo"
import img from "../assets/images/scan.png"
import { useEffect } from "react";
import { Alert } from "../components/UI";
const Verification = () => {
    const { makeTransaction, face, payTo, accoutNo, upiId, amount, alert} = useAppContext();
    const navigate = useNavigate()
    // useEffect(()=>{
    //     if(payTo === '' || accoutNo === 0 || amount === 0 || upiId === ''){
    //         navigate('/')
    //     }
    // })
   
    if (face === 'User') {
        setTimeout(() => {
            navigate('/status')
            makeTransaction();
        }, 1000);
    }
    else if(face === 'Unknown'){
        setTimeout(() => {
            navigate('/status')
            makeTransaction();
        }, 1000);
    }


    return (<Wrapper>
        <nav>
          <Logo />
        </nav>
        {alert && <Alert />}

        <div className="container page">
            <div className="info">
            <h1>
                <span>Verify YourSelf</span>
            </h1>
            <img src={img} alt="Safe Pay" className='img main-img' />
            
            </div>
            <div className="camera">

              <WebcamCapture />
            </div>
            </div>
    </Wrapper>)
}

export default Verification