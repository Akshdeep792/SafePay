import { useAppContext } from "../../context/appContext"
import { useEffect } from "react"
import Loading from '../../components/UI/Loading'
import { TransactionContainer } from "../../components/Transaction"
import Wrapper from '../../assets/wrappers/History'
const History = () => {
    const { isLoading, getTransaction, transactions, totalTransaction } = useAppContext();
    useEffect(() => {
        getTransaction();
    }, [])
    if (isLoading) {
        return <Loading center />
    }
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
            {transactions.map((trans) => {
                return <TransactionContainer key={trans._id} {...trans} />
            })}
        </div>
        </Wrapper>

    )
}
export default History