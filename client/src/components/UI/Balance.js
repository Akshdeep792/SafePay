import { useState } from "react"
import Wrapper from "../../assets/wrappers/Balance"

// show balance in user's account. It is not dynamic for now
const Balance = () => {
    const [toggleBtn, setToggleBtn] = useState(false)
    const clickHandler = () => {
        setToggleBtn(!toggleBtn)
    }
    return (<Wrapper>
        <div className="container">
            <div className="btn" onClick={clickHandler}>
                Check Balance
            </div>
           {toggleBtn && <div className="hide-btn">
                Rs.7821546
            </div>}
        </div>
    </Wrapper>)
}
export default Balance