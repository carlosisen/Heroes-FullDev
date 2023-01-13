import { useState } from "react";
import "../assets/css/FormHero.css"

const FormHero = ({
     hero: { 
        id = "", name = "", publisher = "", alter_ego = "", first_appearance = "", image = "", characters = "" }
     ,type
    , opt: { loading, error}
    , req})=>{

    const[data, setData]=useState({
        id: id,
        name: name,
        publisher: publisher,
        alter_ego: alter_ego,
        first_appearance: first_appearance,
        image: image,
        characters: characters
    }
    )

    const handleChange= (event)=>{
        const {name, value}= event
        setData({...data, [name]:value})
    }

    const handleSubmit=( event )=>{
        event.preventDefault()
        req(data)
    }

    if (error) {
        return (
            <>
                <h1 className="FormHero-error">{error}</h1>
            </>
        )
        }
    return(
        <form onSubmit={handleSubmit} className="FormHero">
            <fieldset className="FormHero-fieldset">
                <legend className="FormHero-legend"> DATAHERO</legend>
                <div className="FormHero-div">
                    <label htmlFor="name" className="FormHero-label">Name</label>
                    <input type="text" name="name" className="FormHero-text" value={data.name} required onChange={
                            (e)=> handleChange(e.target)}>

                    </input>
                </div>
                <div className="FormHero-div">
                    <label htmlFor="publisher" className="FormHero-label" >Publisher</label>
                    <select name="publisher" value={data.publisher} className="FormHero-select" onChange={
                            (e)=> handleChange(e.target)}>
                        <option value="" className="FormHero-option"></option>
                        <option value="Others" className="FormHero-option">Others</option>
                        <option value="DC Comics" className="FormHero-option">DC</option>
                        <option value="Marvel Comics" className="FormHero-option">Marvel</option>
                    </select>
                </div>
                <div className="FormHero-div">
                    <label htmlFor="alter_ego" className="FormHero-label">Alter ego</label>
                    <input type="text" name="alter_ego" className="FormHero-text"value={data.alter_ego} onChange={
                            (e)=> handleChange(e.target)}>

                    </input>
                </div>
                <div className="FormHero-div">
                    <label htmlFor="first_appearance" className="FormHero-label">First appearance</label>
                    <input type="text" name="first_appearance" className="FormHero-text" value={data.first_appearance} onChange={
                            (e)=> handleChange(e.target)}>

                    </input>
                </div>
                <div className="FormHero-div">
                    <label htmlFor="image" className="FormHero-label">Image</label>
                    <input type="text" name="image" className="FormHero-text" value={data.image} onChange={
                            (e)=> handleChange(e.target)}>

                    </input>
                </div>
                <div className="FormHero-div">
                    <label htmlFor="characters" className="FormHero-label">Characters</label>
                    <input type="text" name="characters" className="FormHero-text" value={data.characters} onChange={
                            (e)=> handleChange(e.target)}>

                    </input>
                </div>
            </fieldset>
            <div>
                <button type="submit" className="FormHero-button">{type}</button>
            </div>


        </form>
    )

}

export default FormHero