import { useAppContext } from "../context/context";
import IndividualHero from "./IndividualHero";
import "../assets/css/MainHeroes.css"

const MainHeroes= ({group})=> {
    const {allHeroes}= useAppContext()
    const filteredHeroes= allHeroes?.filter(hero => hero.publisher === group)

if (!allHeroes){
    return (
        <div className="MainHeroes--load">
            <h1 className="MainHeroes-h1">Loading...</h1>
        </div>
    )
}
    if (allHeroes) {
        return(
            <div className="MainHeroes">
            {filteredHeroes.map( hero => 
                <IndividualHero id={hero.id} key={hero.id}/>)}
            </div>
        )
    }
}

export default MainHeroes