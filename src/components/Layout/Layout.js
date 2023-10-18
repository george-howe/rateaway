//import { Link } from 'gatsby';
import * as React from 'react';
//import Nav from '../Nav/Nav';
import './style/layout.scss';

const Layout = ({ children }) => {
    return (
        <div>
            {/* Deal with later */}
            {/* <Nav /> */}
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;