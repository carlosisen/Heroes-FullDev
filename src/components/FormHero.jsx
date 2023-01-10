import useRequest from "../utils/useRequest";
import { useState } from "react";

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
    // const {loading, error, patchHero}= useRequest()

    const handleChange= ({eventName, eventValue})=>{
        const newCh= {};
        newCh[eventName]= eventValue
        const newData= {...data , ...newCh}
        setData(newData)
    }

    const handleSubmit=( event )=>{
        event.preventDefault()
        req(data)
    }

    if(loading){
        return (
            <>
                <h1>IS LOADING...</h1>
            </>
        )
    }
    if (error) {
        return (
            <>
                <h1>{error}</h1>
            </>
        )
        }
    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend> INFORMATION</legend>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={data.name} required onChange={
                            (e)=> handleChange({
                                eventName: e.target.name,
                                eventValue: e.target.value,
                            })}></input>
                </div>
                <div>
                    <label htmlFor="publisher">publisher</label>
                    <input type="text" name="publisher" value={data.publisher} onChange={
                            (e)=> handleChange({
                                eventName: e.target.name,
                                eventValue: e.target.value,
                            })}></input>
                </div>
                <div>
                    <label htmlFor="alter_ego">alter ego</label>
                    <input type="text" name="alter_ego" value={data.alter_ego} onChange={
                            (e)=> handleChange({
                                eventName: e.target.name,
                                eventValue: e.target.value,
                            })}></input>
                </div>
                <div>
                    <label htmlFor="first_appearance">first appearance</label>
                    <input type="text" name="first_appearance" value={data.first_appearance} onChange={
                            (e)=> handleChange({
                                eventName: e.target.name,
                                eventValue: e.target.value,
                            })}></input>
                </div>
                <div>
                    <label htmlFor="image">image</label>
                    <input type="text" name="image" value={data.image} onChange={
                            (e)=> handleChange({
                                eventName: e.target.name,
                                eventValue: e.target.value,
                            })}></input>
                </div>
                <div>
                    <label htmlFor="characters">characters</label>
                    <input type="text" name="characters" value={data.characters} onChange={
                            (e)=> handleChange({
                                eventName: e.target.name,
                                eventValue: e.target.value,
                            })}></input>
                </div>
            </fieldset>
            <div>
                <button type="submit">{type}</button>
            </div>


        </form>
    )

}

export default FormHero