import React, { useState, createContext, useContext  } from 'react';
import { array } from 'prop-types';


export const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
    let [escolha, SetEscolha] = useState(
        1
         )

    const hendleMenu = Escolha => {
        // escolha=JSON.parse(JSON.stringify(escolha))
        SetEscolha(Escolha)
    }

    return(
        <SideBarContext.Provider value={{escolha,hendleMenu}}>
        { children }
    </SideBarContext.Provider>
    )
    
}
export default SideBarProvider