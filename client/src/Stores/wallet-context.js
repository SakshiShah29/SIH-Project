// import React from "react";
// let walletaddress;
// const WalletContext=React.createContext({
//     walletaddress:{walletaddress}
// });

// export default WalletContext;

import React from "react";
import Adminlogin from "../components/loginPage/Adminlogin";
import Showevent from "../components/loginPage/Showevents";
import { createContext,useContext,useState } from "react";

const WalletContext = React.createContext();

export function useWalletaddress() {
    return useContext(WalletContext);
  }

export function Walletaddresscontext()
{
    let {walletaddressfinal,setwalletaddressfinal}=useState('');
    return(
    <WalletContext.Provider value={{walletaddressfinal,setwalletaddressfinal}}>
    <Adminlogin/>
    <Showevent/>
    </WalletContext.Provider>
    )
}