import {Link} from "react-router-dom"
import "../assets/css/HeaderNav.css"

const HeaderNav= ()=> {

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
        </div>
        </>
    )
}

export default HeaderNav