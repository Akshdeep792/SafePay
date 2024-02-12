import { useState } from 'react'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import { Logo } from './UI'
import Wrapper from '../assets/wrappers/Navbar'
const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const { user, toggleSidebar, logoutUser } = useAppContext();
    return (
        <Wrapper>
            <div className='nav-center'>
                <button
                    className='toggle-btn'
                    onClick={toggleSidebar}
                >
                    <FaAlignLeft />
                </button>

                <div className='logodiv'>
                    <Logo />
                    <h3 className='logo-text'>dashboard</h3>
                </div>
                {/*container that show logout button and name of user in top right   */}
                <div className='btn-container'>
                    <button className='btn' onClick={() => setShowLogout(!showLogout)}>  {/* setShowLogout will clear all the values in local storage and logout the user */}
                        <FaUserCircle />
                        {/* getting user name for current logged in user */}
                        {user?.name}
                        <FaCaretDown />
                    </button>
                    <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                        <button onClick={logoutUser} className='dropdown-btn'>
                            logout
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar