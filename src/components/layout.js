import { Link } from 'gatsby';
import * as React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <header>HELLO</header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">1</Link>
                    </li>
                    <li>
                        <Link to="/">2</Link>
                    </li>
                    <li>
                        <Link to="/">3</Link>
                    </li>
                    <li>
                        <Link to="/">4</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1>HI THERE</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;