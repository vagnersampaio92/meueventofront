import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: #666666;
  li {
    color: #666666;
    padding: 8px 10px;
    font-size:1.2rem;
    a {
      text-decoration:none !important;
    }
  }
  @media (max-width: 904px) {
    color: #666666;
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index:10;
    padding-top: 8rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #666666;
      text-decoration:none !important;
    }
  }
`;