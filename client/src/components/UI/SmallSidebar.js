
import Wrapper from '../../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../../context/appContext'

import Logo from './Logo'
import NavLinks from '../Navlinks'

export const SmallSidebar = () => {
    const { showSidebar, toggleSidebar } = useAppContext(); // toggle functions coming from appContext.js
    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
                <div className='content'>
                {/* X button for closing sidebar */}
                    <button className='close-btn' onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                {/* Logo of the app */}
                    <header>
                        <Logo />
                    </header>
                {/* Navlinks component that will bring working of navlinks. toggleSideBar is called because when we click on navlink, sidebar should hide */}
                    <NavLinks toggleSidebar={toggleSidebar}/>
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSidebar