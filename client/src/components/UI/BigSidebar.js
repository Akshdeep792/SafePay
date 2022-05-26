import Wrapper from "../../assets/wrappers/BigSidebar";
import {useAppContext} from '../../context/appContext'
import {NavLinks} from '../index'
import Logo from "./Logo";
//component for diffrent position of sidebar for responsiveness
const BigSidebar = () => {
    const {showSidebar} = useAppContext(); // this is toggle function to show sidebar in appcontext.js

    return <Wrapper>
        <div className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
            <div className='content'>
                <header>
                    {/* Logo of the app coming from same folder */}
                    <Logo />
                </header>
                {/* navlinks */}
                <NavLinks />
            </div>
        </div>
    </Wrapper>
}

export default BigSidebar