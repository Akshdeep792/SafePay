
import Wrapper from '../assets/wrappers/TransactionPage'
import {Logo, Alert, Input} from '../components/UI'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom';

const TransactionPage = () => {
    const {showAlert, isLoading, handleChange, payto, accountNo, upiId, displayAlert, amount} = useAppContext();
    const navigate = useNavigate();
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        if (!payto || !accountNo || !upiId || !amount) {
            displayAlert()
            return
        }
        navigate('/verification')
    }
    const onChangeHandler =(e) => {
        const name = e.target.name;
        const value = e.target.value;
        handleChange({name, value})
    }

    return ( <Wrapper className='full-page'>
    <form className='form' onSubmit={onSubmitHandler}>
        <Logo />
        <h3>Enter Details</h3>
        {showAlert && <Alert />}
        {/* name field */}
       
        <Input type='text' value={payto} name='payto' onChange={onChangeHandler} />
        <Input type='number' value={accountNo} name='accountNo' labelText='accountNo(16 digits)' onChange={onChangeHandler} />
        <Input type='text' value={upiId} name='upiId' labelText="Enter your upiId" onChange={onChangeHandler} />
        <Input type='number' value={amount} name='amount' labelText="Amount(Rs.)" onChange={onChangeHandler} />



        <button type='submit' className='btn btn-block' disabled={isLoading}>
            Done
        </button>
    </form>
</Wrapper>)

}
export default TransactionPage