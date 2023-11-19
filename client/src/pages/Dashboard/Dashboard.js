import Wrapper from "../../assets/wrappers/Dashboard"
import { useAppContext } from "../../context/appContext"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { Balance, Message } from "../../components/UI";
import { AiFillBank } from "react-icons/ai";
import { RiContactsBookFill } from "react-icons/ri"
import { MdAccountBalanceWallet } from "react-icons/md"
import { useState } from "react";

const Dashboard = () => {
    const navigate = useNavigate();
    const [balance, setBalance] = useState(false);
    const { getUser, users, setStatus, imageId, setType } = useAppContext();

    useEffect(() => {
        getUser(); // for getting user photo from cloudinary for checking weather photo is uploaded or not
    }, [])

    const showBalance = () => {
        setBalance(!balance)
    }
    const onClickHandler = (type) => {
        setStatus();
        setType(type)
        navigate('/transaction')
    }
    const status = imageId === '' ? false : true; // checking photo is present or not


    return (
        <Wrapper >
            {/* This is for balance check. This is not dynamic for now */}


            {/* If user did not uploaded his/her photo */}
            {!status && <Message>Please add Photo For Transaction</Message>}
            {/* <button className='btn btn-block' onClick={onClickHandler} disabled={!status}>
                Make Transaction
            </button> */}
            <h5 className="sub-sec">Money Transfer</h5>
            {status && <div className="cards">
                <div className="sub-cards" onClick={() => onClickHandler("mobile")}>
                    <h2 className="icons"><AiFillBank /></h2>
                    <p className="info">To Mobile Contact</p>
                </div>
                <div className="sub-cards" onClick={() => onClickHandler("bank")}>
                    <h2 className="icons"><RiContactsBookFill /></h2>
                    <p className="info">To Bank A/C</p>
                </div>
                <div className="sub-cards" onClick={showBalance}>
                    <h2 className="icons"><MdAccountBalanceWallet /></h2>
                    {!balance && <p className="info">Balance</p>}
                    {balance && <p className="info">Rs 4892843</p>}

                </div>
            </div>}
        </ Wrapper >
    )
}
export default Dashboard