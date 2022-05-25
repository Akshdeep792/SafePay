//Landing Page

import { Logo } from '../components/UI/index'
import img from '../assets/images/main.svg'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage' //importing CSS for the following page
const Landing = () =>{
    return <Wrapper>
        <nav> 
          <Logo />
        </nav>
        <div className='container page'>
             <div className='info'>
                    <h1>secured <span>Transaction</span> app</h1>
             
             <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et pharetra. Habitant morbi tristique senectus et netus et. Purus sit amet luctus venenatis lectus. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. In eu mi bibendum neque egestas congue quisque egestas. Tortor dignissim convallis aenean et tortor at risus.
             </p>
             <Link to="/register" className='btn btn-hero'>Login/Register</Link>
             
        </div>
          <img src={img} alt="Safe Pay" className='img main-img' />

        </div>
    </Wrapper>
}


export default Landing