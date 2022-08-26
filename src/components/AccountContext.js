import {createContext, useState } from "react";

export const AccountContext = createContext();

export const AccountRouter = (props) => {
    const [account, setAccount] = useState();
    return(
        <AccountContext.Provider value = {[account,setAccount]}>
            {props.children}
        </AccountContext.Provider>
    )
}

