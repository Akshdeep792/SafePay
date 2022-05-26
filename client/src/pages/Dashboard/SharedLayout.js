//common layout design for dashboard pages

import { Outlet } from "react-router-dom"
import Wrapper from "../../assets/wrappers/SharedLayout"
import { Navbar} from "../../components"
import {SmallSidebar, BigSidebar} from '../../components/UI/index'
const SharedLayout = () => {
    return <Wrapper>
        <main className='dashboard'>
            {/* sidebar components for responsivness */}
            <SmallSidebar />
            <BigSidebar />
            <div>
                <Navbar />
                <div className='dashboard-page'>
                    <Outlet />
                </div>
            </div>

        </main>

    </Wrapper>
}

export default SharedLayout