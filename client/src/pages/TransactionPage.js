
import Wrapper from '../assets/wrappers/TransactionPage'
import { Logo, Alert, Input } from '../components/UI'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom';

const TransactionPage = () => {
    const { showAlert, isLoading, handleChange, payto, accountNo, upiId, displayAlert, amount, transaction_type } = useAppContext();
    const navigate = useNavigate();

    // this will help us to navigating to verification page with credentials saved
    const onSubmitHandler = (e) => {
        e.preventDefault();

        //checking errors

        if (!payto || !accountNo || !upiId || !amount) {
            displayAlert('Please Provide All values ')
            return
        }
        if (transaction_type === 'bank') {
            if (accountNo.toString().length !== 16) {
                displayAlert("AccountNo Must be of 16 digits")
                return;
            }
        }
        else if (transaction_type === 'mobile') {
            if (accountNo.toString().length !== 10) {
                displayAlert("PhoneNo Must be of 10 digits")
                return;
            }
        }
        if (!upiId.includes("@upi")) {
            displayAlert("Must Include @upi in upiId")
            return;
        }
        navigate('/verification')
    }
    // for saving values in global state
    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        handleChange({ name, value })
    }

    return (<Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmitHandler}>
            <Logo />
            <h3>Enter Details</h3>
            {/* showing alert messages */}
            {showAlert && <Alert />}

            {/* Enter credentials */}
            <Input type='text' value={payto} name='payto' onChange={onChangeHandler} />
            {transaction_type === 'bank' ? <Input type='number' value={accountNo} name='accountNo' labelText='accountNo(16 digits)' onChange={onChangeHandler} /> : <Input type='number' value={accountNo} name='accountNo' labelText='PhoneNo(10 digits)' onChange={onChangeHandler} />}
            <Input type='text' value={upiId} name='upiId' labelText="Enter your upiId" onChange={onChangeHandler} />
            <Input type='number' value={amount} name='amount' labelText="Amount(Rs.)" onChange={onChangeHandler} />



            <button type='submit' className='btn btn-block' disabled={isLoading}>
                Done
            </button>
        </form>
    </Wrapper>)

}
export default TransactionPage