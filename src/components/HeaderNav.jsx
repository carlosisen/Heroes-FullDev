import {Link} from "react-router-dom"
import { useEffect, useState} from 'react';
import useRequest from "../utils/useRequest";
import "../assets/css/HeaderNav.css"

const HeaderNav= ()=> {
    const { data, loading, error, getAll, reset } = useRequest()
    const [logo, setLogo] = useState("./images/heroes.png")
    useEffect(() => {
        if(!data){
        getAll();
        }
    },
        []
    )

    return(
        <>
        <div className="Header">
            <Link to="/" className=" Header-link Header-link-mainlogo" onClick={() => { setLogo("./images/heroes.png"); getAll(); reset()}}>
                    <h1 className="Header-h1">Heroes</h1>
            </Link>
            <div className="Header-main">
                <Link to="/marvel" className="Header-link" onClick={() => setLogo("./images/marvel.png")}>
                    <h4 className="Header-h4">Marvel</h4>
                </Link>
                <Link to="/dc" className="Header-link" onClick={() => setLogo("./images/DC-Comics.png")}>
                    <h4 className="Header-h4"> DC</h4>
                </Link>
                <Link to="/create" className="Header-link" onClick={() => setLogo("./images/super-hero-logo.png")}>
                    <h4 className="Header-h4">Create Character</h4>
                </Link>
                <img src={logo} alt="Logo" className="Header-img"/>
            </div>
            {loading && <h1 className="Header-h1">loading ppal data...</h1>}
            {error && <h1 className="Header-h1">{error}</h1>}
            
        </div>
        </>
    )
}

export default HeaderNav