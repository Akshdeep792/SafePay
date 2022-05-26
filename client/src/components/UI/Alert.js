//This component Give alert if some error done by user happens in web APP
import { useAppContext } from "../../context/appContext"

const Alert = () => {
  const { alertType, alertText } = useAppContext()
  return <div className={`alert alert-${alertType}`}>{alertText}</div>
}
export default Alert