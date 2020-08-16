import React from 'react';
import {BrowserRouter} from'react-router-dom'
import styled from 'styled-components';
import GlobalStyle from './styles/global'
// import Main from './pages/Main/index'
import Routes from'./routes/index'
import Routesempresa from'./routes/empresa'
// import Routesentrega from'./routes/entrega'
const Title = styled.h1` 
 color: red;
 font-size: 32px;

`;

const App = () => (
   

  <>
 <GlobalStyle /> 
  <BrowserRouter>
     <Routes />
     <Routesempresa />

     </BrowserRouter>

</>


)


//   <Fragment>
// <GlobalStyle /> <div className= "APP" />
// </Fragment>


export default App;
