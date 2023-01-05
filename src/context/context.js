import { createContext ,useContext, useState } from "react";

const AppContext= createContext()// crea el contexto con ese nombre App context
export const useAppContext= ()=> { // funcion para poder usar el contexto AppContext en los componentes
        useContext(AppContext)
}
export const  AppWrapper= ({children})=> {
    const [allHeroes, setAllHeroes]= useState("")
    const url= "http://localhost:3000/"
    

    return(
        <AppContext.Provider value={{ // poder usar estos valores en lo que envuelva este bloque(nuestro caso app.js)
                            allHeroes, 
                            setAllHeroes,
                            url}}>
            {children}
        </AppContext.Provider>
    )

}