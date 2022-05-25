import { useAppContext } from "../context/appContext"
import { Failure, Success } from "../components"
const Status = () => {
    const {paymentStatus} = useAppContext()

    return (
        <>
        {paymentStatus ? <Success /> : <Failure />}
        </>
    )
}

export default Status