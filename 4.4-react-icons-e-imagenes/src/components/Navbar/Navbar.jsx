import React from 'react'
import { IconsContainerStyled, LogoStyled, NavbarContainerStyled } from './NabvarStyles'

import logoNucba from '../../img/logoNucba.avif'

import { BsFillCartFill } from "react-icons/bs";
import {FaUserAlt} from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";

const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <LogoStyled>
            <img src={logoNucba} alt="Logo de Nucba" />
        </LogoStyled>
        <IconsContainerStyled>
            <AiFillHome />
            <FaUserAlt />
            <BsFillCartFill />
        </IconsContainerStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar