import {Link} from "react-router-dom"
import { useEffect, useState} from 'react';
import useRequest from "../utils/useRequest";
import "../assets/css/HeaderNav.css"

const HeaderNav= ()=> {
    const { data, loading, error, getAll } = useRequest()
    useEffect(() => {
        if(!data){
        getAll();
        }
    },
        []
    )
    const [logo, setLogo] = useState("./images/heroes.png")

    return(
        <>
        <div className="header">
                <Link to="/" className="header__link" onClick={() => { setLogo("./images/heroes.png"); getAll() }}>
                    <h1>Heroes</h1>
                </Link>
        <div className="header__main">
                <Link to="/marvel" className="header__link" onClick={() => setLogo("./images/marvel-white-log.png")}>
                    <h4>Marvel</h4>
                </Link>
                <Link to="/dc" className="header__link" onClick={() => setLogo("./images/Dc-Comics-logo.png")}>
                    <h4> DC</h4>
                </Link>
                <Link to="/create" className="header__link" onClick={() => setLogo("./images/super-hero-logo.png")}>
                    <h4>Create Character</h4>
                </Link>
                <img src={logo} alt="Logo" className="header__logo"/>

        </div>
                {loading && <h1>loading ppal data...</h1>}
                {error && <h1>{error}</h1>}
                
        </div>
        </>
    )
}

export default HeaderNav