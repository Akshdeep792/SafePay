import { useAppContext } from "../context/appContext"
import { useNavigate } from "react-router-dom";
import WebcamCapture from "../components/Webcam/Webcam";
import Wrapper from "../assets/wrappers/Verification";
import Logo from "../components/UI/Logo"
import img from "../assets/images/scan.png"
import { useEffect } from "react";
import { Alert } from "../components/UI";
const Verification = () => {
  const { makeTransaction, face, showAlert } = useAppContext();
  const navigate = useNavigate()
  useEffect(() => {
    if (face === 'User' || face === 'Unknown') {

      makeTransaction();
      navigate('/status')
    }
  }, [face])



  return (<Wrapper>
    <nav>
      <Logo />
    </nav>
    {showAlert && <Alert />}

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