import React from 'react';
import { Link } from 'react-router-dom';

import { NavBarContent } from './style'
import LogoAfya from '../../assets/img/logo.png'

const NavBar: React.FC = () => {
    return (
        <NavBarContent>
            <Link to="/">
                <img src={LogoAfya} alt="Logo Afya" />
            </Link>
            <div className="links-content">

                <Link to="/"> Home </Link>

                <Link to="/signup"> Inscreva-se </Link>

                <Link to="/login"> Faça o Login</Link>
            </div>

        </NavBarContent>
    )
}

export default NavBar;