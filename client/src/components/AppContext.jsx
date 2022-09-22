
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext()

export const AppContextProvider =({children})=>{
    const[isAuth,SetIsAuth] = useState(null)

    return(
        <AppContext.Provider value={{isAuth,SetIsAuth}}>
        {children}
        </AppContext.Provider>
    )
    
}

