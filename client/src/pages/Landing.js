//Landing Page

import { Logo } from '../components/UI/index'
import img from '../assets/images/main.svg'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage' //importing CSS for the following page
const Landing = () => {
  return <Wrapper>
    {/* main navbar with logo */}
    <nav>
      <Logo />
    </nav>
    <div className='container page'>
      <div className='info'>
        <h1>secured <span>Transaction</span> app</h1>

        <p>
          Do you still face issues that someone has made transaction from your bank account without letting you know?
          Here is the solution.
          Use SafePay, it uses face recognition as a level of security for all the transactions. Nobody can make transaction without your face as identity.So now your money and happines both are safe.

          What r u waiting for... Register now.
        </p>
        <Link to="/register" className='btn btn-hero'>Login/Register</Link>

      </div>
      <img src={img} alt="Safe Pay" className='img main-img' />

    </div>
  </Wrapper>
}


export default Landing