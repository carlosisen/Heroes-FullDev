import FormHero from "./FormHero";
import useRequest from "../utils/useRequest";
import "../assets/css/CreateHero.css"
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
            <div className="CreateHero-div--background"  onClick={()=> {
                setToggle(false);
                reset()}}></div>
            <div className="CreateHero-div">
                <div className="CreateHero-div--form">
                    <FormHero hero={""} type="Create" opt={{ loading, error }} req={postHero} />
                    {data && <p className="CreateHero-p"> Heroe Creado</p>}
                </div>
            </div>  

        </>
    )

}

export default CreateHero