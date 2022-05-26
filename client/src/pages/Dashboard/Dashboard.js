import Wrapper from "../../assets/wrappers/Dashboard"
import { useAppContext } from "../../context/appContext"
import {useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { Balance, Message } from "../../components/UI";


const Dashboard =() => {
    const navigate = useNavigate();
    const {getUser, users, setStatus, imageId} = useAppContext();
    
    useEffect(()=>{
        getUser(); // for getting user photo from cloudinary for checking weather photo is uploaded or not
    }, [])

     const onClickHandler = () => {
         setStatus();
         navigate('/transaction')
     }
     const status = imageId === '' ? false : true; // checking photo is present or not
     
  
    return (
        <Wrapper >
            {/* This is for balance check. This is not dynamic for now */}
            <div className="balance">
              <Balance />
            </div>

            {/* If user did not uploaded his/her photo */}
           { !status && <Message>Please add Photo For Transaction</Message>}
        <button className='btn btn-block' onClick={onClickHandler} disabled={!status}>
                    Make Transaction
        </button>
     </ Wrapper >
    )
}
export default Dashboard