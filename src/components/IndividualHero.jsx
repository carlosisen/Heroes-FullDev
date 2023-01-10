import { useState } from "react";
import { useAppContext } from "../context/context";
import ShowHero from "./ShowHero";

const IndividualHero = ({ id }) => {
    const { allHeroes } = useAppContext()
    const  index = allHeroes.findIndex(hero => hero.id === id)
    const hero= allHeroes[index]
    const [toggle, setToggle]= useState(false)

    return (
        <>
            <div onClick={() => setToggle(true)} className="IndividualHero">
                <img className="img" src={hero.image} alt={hero.characters} style={{ width: "200px" }}></img>
                <p className="p">{hero.name}</p>
            
                      
            </div>
            {toggle&& <ShowHero id={id} close={setToggle}/>} 
                
        </>
    )
}

export default IndividualHero