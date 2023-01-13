import useRequest from "../utils/useRequest"
import "../assets/css/SearchHero.css"

const SearchHero= ()=>{
    const {error, searchHero, reset}= useRequest()

    const handleChange= (e)=>{
        reset();
        searchHero(e.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        reset()
    }

    return(
        <div className="SearchHero-div"> 
            <form className="SearchHero-form" onSubmit={handleSubmit}>
                <button type="submit" > 
                <i class="fa-brands fa-searchengin fa-xl"></i> 
                </button>
                <input className="SearchHero-input" type="text" placeholder="Search a hero" onChange={
                    e => handleChange(e.target) }>
                </input>
            </form>
            {error && <p className="SearchHero-error">An error has ocurred</p>}
        </div>
    )
}


export default SearchHero