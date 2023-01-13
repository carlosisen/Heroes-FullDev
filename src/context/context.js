import { createContext ,useContext, useState } from "react";

const AppContext= createContext()// crea el contexto con ese nombre App context
export const  AppWrapper= ({children})=> {
    const [allHeroes, setAllHeroes]= useState(null)
    const [filterHeroes, setFilterHeroes]= useState([])
    
    
    return(
        <AppContext.Provider value={({ // poder usar estos valores en lo que envuelva este bloque(nuestro caso app.js)
                allHeroes, 
                setAllHeroes,
                filterHeroes,
                setFilterHeroes})}>
            {children}
        </AppContext.Provider>
    )
    
}
export function useAppContext() { // funcion para poder usar el contexto AppContext en los componentes
        return useContext(AppContext)
}