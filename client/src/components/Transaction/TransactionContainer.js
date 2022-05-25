import moment from 'moment'
import { useAppContext } from '../../context/appContext'
import { FaCalendarAlt } from 'react-icons/fa'
import Wrapper from '../../assets/wrappers/TransactionContainer'
import {TransactionInfo}  from  './index'
const TransactionContainer = (props) => {
    let date = moment(props.createdAt)
    date = date.format('MMM Do, YYYY')
    return (
        <Wrapper>
            <header>
                <div className='main-icon'><img src={props.paymentFace} height="200" alt='U' /></div>
                <div className='info'>
                    {/* <h5>Use</h5> */}
                    <h2>Rs.{props.amount}</h2>
                </div>
            </header>
            <div className='content'>
                <div className='content-center'>
                    <TransactionInfo icon='To:' text={props.payto} />
                    <TransactionInfo icon={<FaCalendarAlt />} text={date} />
                    <TransactionInfo icon='Acc No.' text={props.accountNo} />
                    <div className={`status ${props.paymentStatus}`}>{props.paymentStatus ? 'Success' : 'Cancelled'}</div>
                </div>
            </div>
        </Wrapper>
    )
}
 export default TransactionContainer