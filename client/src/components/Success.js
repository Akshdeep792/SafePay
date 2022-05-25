import Wrapper from "../assets/wrappers/Success"
import { useAppContext } from "../context/appContext"
import success from '../assets/images/success.png'
import { useNavigate } from "react-router-dom"
const Success = () => {
     const navigate = useNavigate();
    const {payto, accountNo, upiId, amount, setStatus, clearValues, logoutUser} = useAppContext();
    
    const logOutHandler = () => {
        logoutUser();
        navigate('/landing')
    }
 
    const onClickHandler = () => {
            navigate('/');
            clearValues();
    }
    return (
        <Wrapper className='full-page'>
            <div className="form">
                <img src={success} alt='Done' />
                <div className="info">
                    <h3>Transaction Successfull</h3>
                    <p>{amount} has been transfered from your bank account to {payto} having account number {accountNo}</p>
                </div>
                <button className="btn btn-block" onClick={logOutHandler}>LogOut</button>
                <button className="btn member-btn" onClick={onClickHandler}>Back To HomePage</button>
            </div>

        </Wrapper>

    )
}

export default Success