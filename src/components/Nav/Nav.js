import { Link } from 'gatsby';
import * as React from 'react';

const Nav = ({  }) => {
    return (
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
    )
}

export default Nav;