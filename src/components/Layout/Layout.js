import React, { Fragment } from 'react'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'
import './Layout.css'

const Layout = (props) => {
    return(
        <Fragment>
            <div>
                Toolbar, SideDrawer, Backdrop
            </div>
            <main className='container'>
                <BurgerBuilder />
            </main>
        </Fragment>
    )
}

export default Layout;