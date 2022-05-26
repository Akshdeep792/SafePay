import { useAppContext } from "../context/appContext"
import { Failure, Success } from "../components"
const Status = () => {
    const {paymentStatus} = useAppContext()

    return (
        <>
        {/* payment status tell us weather face is verified or not */}
        {paymentStatus ? <Success /> : <Failure />}
        </>
    )
}

export default Status