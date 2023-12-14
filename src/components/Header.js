import React from "react";
import "../css/header.css"

const Header =( ) => {
    return(
        <div className="Header_div"> 
           <header>
            <h1> Welcome to Keep </h1>
           </header>
           <div className="username">
           <h5> User </h5>
           <h5 className="login"> Log Out </h5>
           </div>
        </div>
    )
}

export default Header;