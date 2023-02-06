import React from "react";
import "./Nav.css"

export function Nav() {
    return (
        <div className="nav">
            <h1>Navigation</h1>
            <div className="nav-bar">
                <div className="logo">ChisKien</div>
                <div className="menu-toggle">
                    <div className="ham-box">
                        <span className="line-top"></span>
                        <span className="line-bottom"></span>
                    </div>
                </div>
                <div className="nav-overlay">

                </div>
            </div>
        </div>
    )
}