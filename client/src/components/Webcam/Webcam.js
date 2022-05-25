import React, { useState } from 'react';
import Webcam from "react-webcam";
import Wrapper from '../../assets/wrappers/Webcam'
import { useAppContext } from '../../context/appContext';


const WebcamComponent = () => <Webcam />;


const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

export const WebcamCapture = () => {

    const {verifyImage, paymentStatus} = useAppContext();
    const [image, setImage] = useState('');
    const webcamRef = React.useRef(null);


    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(imageSrc)
            setImage(imageSrc)

        }, [webcamRef]);
    const onClickHandler = () => {
    
        verifyImage(image);
    }

    return (
    <Wrapper>
        <div className="webcam-container">
            <div className="webcam-img">

                {image === '' ? <Webcam
                    audio={false}
                    height={400}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={420}
                    videoConstraints={videoConstraints}
                    className='webimg'
                /> : <img src={image} alt="" />}
            </div>
            <div className='btns'>
                {image !== '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="btn btn-block btn-photo">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="btn btn-block btn-photo">Capture</button>
                }
                {image !== '' &&
                    <button onClick={onClickHandler}

                        className="btn btn-block btn-photo">
                        Verify YourSelf</button>

                }
            </div>
        </div>
    </Wrapper>
    );
};
export default WebcamCapture