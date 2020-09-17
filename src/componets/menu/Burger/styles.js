import styled from 'styled-components';

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;

  left: 30px ;
  z-index: 20;
  display:flex;
  align-items:center;
  display: none;
  @media (max-width: 904px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {

    width: 2rem ;

    height: 0.25rem;
    background-color: ${({ open }) => open ? '#FF522C' : '#FF522C'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;