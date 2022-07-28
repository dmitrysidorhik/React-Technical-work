import React from "react";
import LogoImage from '../../assets/img/logo.svg' 
const Header = () => {
    return (
        <>
            <div className="logo">
                <img src={LogoImage} alt='' />

            </div>
        </>
    )
}

export default Header;