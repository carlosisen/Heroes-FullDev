import { useState} from "react";
import { useAppContext } from "../context/context";
import FormHero from "./FormHero";
import Warning from "../utils/Warning";
import useRequest from "../utils/useRequest";
import"../assets/css/ShowHero.css"

const ShowHero = ({ id, close }) => {
    const { allHeroes } = useAppContext()
    const index = allHeroes.findIndex(hero => hero.id === id)
    const [indexHero, setIndexHero] = useState(index)
    const [advise, setAdvise]= useState(false)
    const { loading, error, patchHero } = useRequest()
    const hero = allHeroes[indexHero]
    const deleteHero= useRequest()




    return(
        <>
        <div className="ShowHero-div--background" onClick={()=> close(false)}></div>   
            <div className="ShowHero-div">
                <div className="ShowHero-div--form">
                    <FormHero hero={hero} type="Change" opt={{loading, error}} req={patchHero} />
                    <button className="ShowHero-button" onClick={()=> setAdvise(true)}> Delete</button>
                    {advise ? <Warning 
                            setToggle={setAdvise}
                            title="Eliminate"
                            text="Are you sure that you want erased this Heroe?"
                            req={deleteHero.delHero}
                            content={id}
                    /> : null}
                    
                </div>
            </div>
        
        </>
    )

}

export default ShowHero