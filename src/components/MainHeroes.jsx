import { useAppContext } from "../context/context";
import IndividualHero from "./IndividualHero";

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
        <>
        {filteredHeroes.map( hero => 
            <IndividualHero id={hero.id} key={hero.id}/>)}
        </>
    )
}

export default MainHeroes