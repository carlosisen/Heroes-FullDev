import { useAppContext } from "../context/context";
import IndividualHero from "./IndividualHero";
import "../assets/css/MainHeroes.css"

const MainHeroes= ({group})=> {
    const {allHeroes}= useAppContext()
    const filteredHeroes= allHeroes.filter(hero => hero.publisher === group)
    console.log(allHeroes)
    console.log(filteredHeroes)

if (!allHeroes){
    return (
        <>
        <h1>Loaading...</h1>
        </>
    )
}
    return(
        <div className="MainHeroes">
        {filteredHeroes.map( hero => 
            <IndividualHero id={hero.id} key={hero.id}/>)}
        </div>
    )
}

export default MainHeroes