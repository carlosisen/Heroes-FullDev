import FormHero from "./FormHero";
import useRequest from "../utils/useRequest";
import "../assets/css/ShowHero.css"
import { useState } from "react";

const CreateHero = ({}) => {
    const {data, loading, error, reset, postHero } = useRequest()
    const [toggle, setToggle]= useState(false)


    if(!toggle){
        return (
            <div className="Create-div" onClick={()=> setToggle(true)}>
                <h1 className="Create-h1"> CREATE YOUR HERO</h1>
            </div>
        )
    }

    return (
        <>
            <div className="ShowHero-div--background"  onClick={()=> {
                setToggle(false);
                reset()}}></div>
            <div className="ShowHero-div">
                <div className="ShowHero-div--form">
                    <FormHero hero={""} type="Create" opt={{ loading, error }} req={postHero} />
                    {data && <p className="ShowHero-p"> Heroe Creado</p>}
                </div>

                <img className="img" src=".\images\space2.jpg" alt="Crea tu heroe" />
            </div>  

        </>
    )

}

export default CreateHero