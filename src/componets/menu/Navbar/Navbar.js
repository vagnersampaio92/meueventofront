import React from 'react';
import { Nav, Img } from "./styles";
import Burger from '../Burger/index';
import { ReactComponent as ReactLogo } from '../../../assets/logo.png'
import logo from '../../../assets/logo.png'

const Navbar = () => {
  return (
    <Nav>
      {/* <ReactLogo /> */}
      <Burger />
      <Img src={logo} />
     
    </Nav>
  )
}

export default Navbar