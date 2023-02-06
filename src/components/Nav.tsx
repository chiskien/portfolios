import React, {useState} from "react";
import "./Nav.css"
import {Link} from "react-router-dom"

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
                                <Link to={"/"}>Home</Link>
                                <div className="nav-item-wrapper"></div>
                            </li>
                            <li className="nav-item">
                                <Link to={"/projects"}>Projects</Link>
                                <div className="nav-item-wrapper"></div>
                            </li>
                            <li className="nav-item">
                                <Link to={"/about"}>About</Link>
                                <div className="nav-item-wrapper"></div>
                            </li>
                            <li className="nav-item"><
                                Link to={"/contact"}>Contact</Link>
                                <div className="nav-item-wrapper"></div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}