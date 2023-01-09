import {Link} from "react-router-dom"
import { useAppContext } from "../context/context";
import { useEffect, useState } from 'react';
import useRequest from "../utils/useRequest";
import "../assets/css/HeaderNav.css"

const HeaderNav= ()=> {
    const { allHeroes } = useAppContext()
    const { data, loading, error, getAll } = useRequest()
    // const [cosa, setCosa]=useState(allHeroes)

    useEffect(() => {
        if(!allHeroes){
        getAll();
        }
    },
        []
    )

    return(
        <>
        <div className="header">
            <Link to="/" className="header__link">
                    <h1>Heroes</h1>
                </Link>
        <div className="header__main">
            <Link to="/marvel" className="header__link">
                    <h4>Marvel</h4>
                </Link>
            <Link to="/dc" className="header__link">
                    <h4> DC</h4>
                </Link>
            <Link to="/create" className="header__link">
                    <h4>Dashboard</h4>
                </Link>
                    <img src="../assets/images/marvel.jpg" alt="marvelLogo" className="header__logo"/>

        </div>
                {loading && <h1>loading...</h1>}
                {data&& allHeroes?.map( h => <h1 key={h.id}>{h.alter_ego}</h1> )}
                {error && <h1>{error}</h1>}
                
        </div>
        </>
    )
}

export default HeaderNav