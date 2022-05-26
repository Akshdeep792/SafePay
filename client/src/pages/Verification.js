//importing components and other useful things
import { useAppContext } from "../context/appContext"
import { useNavigate } from "react-router-dom";
import WebcamCapture from "../components/Webcam/Webcam";
import Wrapper from "../assets/wrappers/Verification";
import Logo from "../components/UI/Logo"
import img from "../assets/images/scan.png"
import { useEffect } from "react";
import { Alert } from "../components/UI";

//verification page
const Verification = () => {
  const { makeTransaction, face, showAlert } = useAppContext(); // importing helpers from ../context/appContext
  const navigate = useNavigate()

  useEffect(() => {
    // face value after verification. Status page will automatically setups according to face value with the help of global app context
    if (face === 'User' || face === 'Unknown') {

      makeTransaction(); // saving transaction in database. 
      navigate('/status')
    }
  }, [face])



  return (<Wrapper>
    {/* main navbar */}
    <nav>
      <Logo />
    </nav>
    {/* alert for showing diffrent messages */}
    {showAlert && <Alert />}

    <div className="container page">
      <div className="info">
        <h1>
          <span>Verify YourSelf</span>
        </h1>
        <img src={img} alt="Safe Pay" className='img main-img' />

      </div>
      <div className="camera">
      {/*This will capture our picture  */}
        <WebcamCapture />
      </div>
    </div>
  </Wrapper>)
}

export default Verification