import { createContext ,useContext, useState } from "react";

const AppContext= createContext()
export const  AppWrapper= ({children})=> {
    const [allHeroes, setAllHeroes]= useState(null)
    const [filterHeroes, setFilterHeroes]= useState([])
    
    
    return(
        <AppContext.Provider value={({
                allHeroes, 
                setAllHeroes,
                filterHeroes,
                setFilterHeroes})}>
            {children}
        </AppContext.Provider>
    )
    
}
export function useAppContext() { 
        return useContext(AppContext)
}