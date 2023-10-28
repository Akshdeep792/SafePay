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
// this component will click the picture and verifies with the saved image

export const WebcamCapture = () => {


    const { verifyImage, users } = useAppContext();

    const [image, setImage] = useState('');
    const webcamRef = React.useRef(null);


    // clicks and picture 
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();// this method convert clicked picture into base64
            setImage(imageSrc) // used for react-webcam library. This will show the clicked image

        }, [webcamRef]);

    // this will call the function present in appContext.js and verification happens
    const onClickHandler = () => {
        const known = `${users.url}` // url of saved image of user coming from cloudinary and getUser function in appContext.js

        verifyImage(image, known); // calling function for verification with (picture_to_be_verified , saved_image)
    }

    return (
        <Wrapper>
            <div className="webcam-container">
                <div className="webcam-img">

                    {/* react webcam package*/}
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
                    {/* button for retaking image. It will check if image value is not empty than it will show retake image else t will show capture*/}
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
                    {/*this function calls onClickHandler  */}
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