import React, { useState } from 'react';
import {StyledBurger}  from "./styles";
import RightNav from '../RightNav/RightNav';



const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
    <RightNav open={open}/>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      
    </>
  )
}
export default Burger