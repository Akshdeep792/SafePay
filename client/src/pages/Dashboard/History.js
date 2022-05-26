import { useAppContext } from "../../context/appContext"
import { useEffect } from "react"
import Loading from '../../components/UI/Loading'
import { TransactionContainer } from "../../components/Transaction"
import Wrapper from '../../assets/wrappers/History'
const History = () => {
    const { isLoading, getTransaction, transactions, totalTransaction } = useAppContext();
    useEffect(() => {
        getTransaction(); //getting transaction by calling this function in app context file
    }, [])

    //if getting data takes time
    if (isLoading) {
        return <Loading center />
    }
    // if no transaction has been done
    if (totalTransaction === 0) {
        return (
            <Wrapper>
                <h2>No Transaction Done Till Now</h2>
            </Wrapper>
        )
    }
    return (
        <Wrapper>      
             <div className='transaction'>
                 {/* showing transactions done so far */}
            {transactions.map((trans) => {
                return <TransactionContainer key={trans._id} {...trans} /> // constainer that contains transaction details
            })}
        </div>
        </Wrapper>

    )
}
export default History