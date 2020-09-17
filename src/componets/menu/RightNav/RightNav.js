import React from 'react';
import { Ul }  from "./styles";



const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="/">HOME</a></li>
      <li ><a href="/">PORTFÓLIO</a></li>
      <li ><a href="/">CONTACT</a></li>
      <li><a href="/">OUR NETWORK</a></li>
    </Ul>
  )
}

export default RightNav