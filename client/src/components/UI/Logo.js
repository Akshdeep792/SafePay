import logo from '../../assets/images/logo.png'


// Logo of the Web App.
const Logo = () => {
    return (
        <div className='logo logo-main'>
            <img src={logo} alt="SafePay" className='img' />
            <span className='logoname'>SafePay</span>
        </div>
    )
}

export default Logo