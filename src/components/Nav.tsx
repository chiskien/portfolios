import React, {useState} from "react";
import "./Nav.css"

export function Nav() {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="nav">
            <h1>Navigation</h1>
            <div className="nav-container">
                <div className="nav-bar">
                    <div className="logo">ChisKien</div>
                    <div className="menu-toggle" onClick={() => {
                        setNavOpen(!navOpen)
                    }}>
                        <div className={navOpen ? "ham-box ham-box-open" : "ham-box"}>
                            <span className={navOpen ? "line-top spin" : "line-top"}></span>
                            <span className={navOpen ? "line-bottom spin" : "line-bottom"}></span>
                        </div>
                    </div>
                    <div className="nav-overlay" style={{
                        top: navOpen ? "0" : "-100%",
                        transitionDelay: navOpen ? "0s" : "0s"
                    }}>
                        <ul className="nav-links">
                            <li className="nav-item">
                                <a href="/home"
                                   onClick={() => setNavOpen(!navOpen)}
                                   style={{
                                       top: navOpen ? "0" : "120px",
                                       transitionDelay: navOpen ? "0.8s" : "0s"
                                   }}
                                >Home</a>
                                <div className="nav-item-wrapper"></div>
                            </li>
                            <li className="nav-item">
                                <a href="/projects"
                                   onClick={() => setNavOpen(!navOpen)}
                                   style={{
                                       top: navOpen ? "0" : "120px",
                                       transitionDelay: navOpen ? "0.8s" : "0s"
                                   }}
                                >Projects</a>
                                <div className="nav-item-wrapper"></div>
                            </li>
                            <li className="nav-item">
                                <a href="/about"
                                   onClick={() => setNavOpen(!navOpen)}
                                   style={{
                                       top: navOpen ? "0" : "120px",
                                       transitionDelay: navOpen ? "0.8s" : "0s"
                                   }}
                                >About</a>
                                <div className="nav-item-wrapper"></div>
                            </li>
                            <li className="nav-item">
                                <a href="/contact"
                                   onClick={() => setNavOpen(!navOpen)}
                                   style={{
                                       top: navOpen ? "0" : "120px",
                                       transitionDelay: navOpen ? "0.8s" : "0s"
                                   }}
                                >Contact</a>
                                <div className="nav-item-wrapper"></div>
                            </li>
                        </ul>
                        <div className="nav-footer">
                            <div className="nav-footer-location" style={{
                                bottom: navOpen ? "0" : "-20px"
                            }}>
                                <span>Hanoi, Viet Nam</span>
                            </div>
                            <div className="nav-footer-social-media">
                                <ul>
                                    <li><a href="">Github</a></li>
                                    <li><a href="">Linkedin</a></li>
                                    <li><a href="">Facebook</a></li>
                                    <li><a href="">Instagrams</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}