import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.png';    

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("EVENTS");
    const [navbarOffset, setNavbarOffset] = useState(0);

    // Handle active menu link
    const handleMenuClick = (linkName) => {
        setActiveLink(linkName);
    };

    // Smooth scroll to sections
    const smoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    };

    // Handle navbar hide on scroll
    useEffect(() => {
        let lastScrollTop = 0;
        const onScroll = () => {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            let scrollDiff = scrollTop - lastScrollTop;

            setNavbarOffset((prev) => {
                if (scrollDiff > 0) {
                    return Math.min(prev + scrollDiff, 100); // Scrolling Down
                } else {
                    return Math.max(prev + scrollDiff, 0); // Scrolling Up
                }
            });

            lastScrollTop = scrollTop;
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className="navbar" style={{ transform: `translateY(-${navbarOffset}px)` }}>
            <div className="max-width">
                <img src={logo} alt="Logo" />
                <div className="menu">
                    <ul className="menu-list">
                        <li>
                            <a
                                href="#home"
                                className={`menu-btn ${activeLink === "HOME" ? "active" : ""}`}
                                onClick={() => handleMenuClick("HOME")}
                            >
                                HOME
                            </a>
                        </li>
                        <li>
                            <a
                                href="#events"
                                className={`menu-btn ${activeLink === "EVENTS" ? "active" : ""}`}
                                onClick={(e) => smoothScroll(e, 'events')}
                            >
                                EVENTS
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className={`menu-btn ${activeLink === "ABOUT" ? "active" : ""}`}
                                onClick={(e) => smoothScroll(e, 'about')}
                            >
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a
                                href="#team"
                                className={`menu-btn ${activeLink === "TEAM" ? "active" : ""}`}
                                onClick={(e) => smoothScroll(e, 'team')}
                            >
                                TEAM
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={`menu-btn ${activeLink === "CONTACT" ? "active" : ""}`}
                                onClick={(e) => smoothScroll(e, 'contact')}
                            >
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="auth-btns">
                    {/* Here you can conditionally render the Log In/Out buttons based on user state */}

                    <button className="logbtn">Log In</button>

                </div>
                <div className="hamburger">
                    <span></span><span></span><span></span>
                </div>
            </div>

        </nav>
        
    );
};

export default Navbar;
