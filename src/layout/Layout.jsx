import React from 'react'
import MenuBar from '../components/navigations/MenuBar'
import Footer from '../components/navigations/Footer'

import './Layout.css'

const Layout = (props) => {
    return(
        <React.Fragment>
            <div className="menu-bar">
          <MenuBar />
</div>
            <main className="main-content">
                {props.children}
            </main>

            <Footer/>
        </React.Fragment>
    );
}

export default Layout;