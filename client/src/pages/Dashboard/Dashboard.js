import Wrapper from "../../assets/wrappers/Dashboard"
import { useAppContext } from "../../context/appContext"
import {useNavigate } from 'react-router-dom'
import { useEffect } from "react";


const Dashboard =() => {
    const navigate = useNavigate();
    const {getUser, users, setStatus} = useAppContext();
    
    useEffect(()=>{
        getUser();
    }, [])

     const onClickHandler = () => {
         setStatus();
         navigate('/transaction')
     }
     const check = users.length === 0 ? false : true;
  
    return (
        <Wrapper >
        <h1>Dashboard</h1>
        <button className='btn btn-block' onClick={onClickHandler} disabled={!check}>
                    Make Transaction
        </button>
     </ Wrapper >
    )
}
export default Dashboard