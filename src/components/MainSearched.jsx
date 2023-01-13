import { useAppContext } from "../context/context";
import IndividualHero from "./IndividualHero";
import "../assets/css/MainHeroes.css"

const MainSearched = () => {
    const { filterHeroes } = useAppContext()

    if (!Array.isArray(filterHeroes)) {
        return (
            <p className="MainHeroes--error">
                {filterHeroes}
            </p>
        )
    }

    if (Array.isArray(filterHeroes)) {
        return (
            <div className="MainHeroes">
                {filterHeroes?.map(hero =>
                    <IndividualHero id={hero.id} key={hero.id} />)}
            </div>
        )
    }
}

export default MainSearched