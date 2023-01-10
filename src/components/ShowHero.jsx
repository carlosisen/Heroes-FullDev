import { useState} from "react";
import { useAppContext } from "../context/context";
import FormHero from "./FormHero";
import"../assets/css/ShowHero.css"
import useRequest from "../utils/useRequest";

const ShowHero = ({ id, close }) => {
    const { allHeroes } = useAppContext()
    const index = allHeroes.findIndex(hero => hero.id === id)
    const [indexHero, setIndexHero] = useState(index)
    const hero = allHeroes[indexHero]
    const { loading, error, patchHero } = useRequest()
    const deleteHero= useRequest()




    return(
        <>
        <div className="ShowHero-div--background" onClick={()=> close(false)}></div>   
            <div className="ShowHero-div">
                <div className="ShowHero-div--form">
                    <FormHero hero={hero} type="Change" opt={{loading, error}} req={patchHero} />
                    <button onClick={()=> deleteHero.delHero(id)}> Delete
                    {deleteHero.loading&& loading}
                    </button>
                </div>
                <img className="img" src={hero.image} alt={hero.name}/>
            </div>
        
        </>
    )

}

export default ShowHero