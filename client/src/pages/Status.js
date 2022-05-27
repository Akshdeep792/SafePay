import { useAppContext } from "../context/appContext"
import { Failure, Success } from "../components"
import { useEffect } from "react"
// import SendmailTransport from "nodemailer/lib/sendmail-transport"
const Status = () => {
    const {paymentStatus, sendErrorMail} = useAppContext()

    useEffect(() => {
        if(paymentStatus === false){
            sendErrorMail() // sending mail if person is not verified
        }
    }, [paymentStatus])
    
    return (
        <>
        {/* payment status tell us weather face is verified or not */}
        {paymentStatus ? <Success /> : <Failure />}
        </>
    )
}

export default Status