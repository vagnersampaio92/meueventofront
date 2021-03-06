import React, { useState, createContext, useContext } from 'react';
import { array } from 'prop-types';


export const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
    let [escolha, SetEscolha] = useState(
        1
    )
    let [escolhaadm, SetEscolhaadm] = useState(
        1
    )
    let [subescolha, SetsubEscolha] = useState(
        1
    )
    let [adm, Setadm] = useState(
        false
    )

    const hendleMenu = Escolha => {
        // escolha=JSON.parse(JSON.stringify(escolha))
        SetEscolha(Escolha)
    }

    return (
        <SideBarContext.Provider value={{ escolha, hendleMenu, subescolha, SetsubEscolha, escolhaadm, SetEscolhaadm, adm, Setadm }}>
            {children}
        </SideBarContext.Provider>
    )

}
export default SideBarProvider