import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div id="bodyContainer">{children}</div> {/* Main content area */}
            <Footer />
        </div>
    );
};

export default Layout;
