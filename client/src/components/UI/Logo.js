import logo from '../../assets/images/logo.png'

const Logo = () => {
    return (
        <div className='logo logo-main'>
            <img src={logo} alt="SafePay" className='img' />
            <span>SafePay</span>
        </div>
    )
}

export default Logo