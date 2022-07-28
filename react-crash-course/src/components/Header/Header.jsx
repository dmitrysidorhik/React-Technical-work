import React from 'react'
import LogoImage from '../../assets/img/logo.svg'
import { menu } from './menu'

import styles from './Header.module.scss'

const Header = () => {
    return (
        <>
            <div className="logo">
                <img src={LogoImage} alt='' />
            </div>
            <div className="menu-wrapper">
                <ul>
                    {menu.map((item, idx) => (
                        <li key={`menu item ${idx}`}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="auth-buttons">
                    <button className="login">Login</button>
                    <button className="sign-up">Sign up</button>
                </div>
            </div>
        </>
    )
}

export default Header;