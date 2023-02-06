import React from "react";

export function Nav() {
    return (
        <div className={"nav"}>
            <h1>Navigation</h1>
            <div className="nav-container">
                <div className="logo">ChisKien</div>
                <div className="menu-toggle">
                      <div className="hambuger-box">
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