import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components';
import GlobalStyle from './styles/global'
// import Main from './pages/Main/index'
import Routes from './routes/index'
// import Routesentrega from'./routes/entrega'
import SideProvider from './store/index'
const Title = styled.h1` 
 color: red;
 font-size: 32px;

`;

const App = () => (


  <>
    <GlobalStyle />
    <SideProvider>
      <BrowserRouter>
        <Routes />


      </BrowserRouter>
    </SideProvider>
  </>


)


//   <Fragment>
// <GlobalStyle /> <div className= "APP" />
// </Fragment>


export default App;
