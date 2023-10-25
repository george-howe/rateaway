import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Context } from '../../context';
import Nav from '../Nav/Nav';
import './style/layout.scss';

const Layout = ({ children }) => {
    const [takeawayType, setTakeawayType] = useState('Takeaway');
    const value = { takeawayType, setTakeawayType };
    return (
        <div>
            {/* REALLY CAN'T DECIDE IF I WANT THIS OR NOT */}
            <Nav />
            <main>
                <Context.Provider value={value} >
                    {children}
                </Context.Provider>
            </main>
        </div>
    )
}

export default Layout;