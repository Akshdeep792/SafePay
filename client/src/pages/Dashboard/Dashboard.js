import Wrapper from "../../assets/wrappers/Dashboard"
import { useAppContext } from "../../context/appContext"
import {useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { Balance, Message } from "../../components/UI";


const Dashboard =() => {
    const navigate = useNavigate();
    const {getUser, users, setStatus, imageId} = useAppContext();
    
    useEffect(()=>{
        getUser();
    }, [])

     const onClickHandler = () => {
         setStatus();
         navigate('/transaction')
     }
     const status = imageId === '' ? false : true;
     
  
    return (
        <Wrapper >
            <div className="balance">
              <Balance />
            </div>
           { !status && <Message>Please add Photo For Transaction</Message>}
        <button className='btn btn-block' onClick={onClickHandler} disabled={!status}>
                    Make Transaction
        </button>
     </ Wrapper >
    )
}
export default Dashboard