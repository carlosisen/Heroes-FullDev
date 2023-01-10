import FormHero from "./FormHero";
import useRequest from "../utils/useRequest";
import "../assets/css/ShowHero.css"

const CreateHero = ({}) => {
    const { loading, error, postHero } = useRequest()




    return (
        <>
            <div className="ShowHero-div--background"></div>
            <div className="ShowHero-div">
                <div className="ShowHero-div--form">
                    <FormHero hero={""} type="Create" opt={{ loading, error }} req={postHero} />
                </div>
                <img className="img" src="..\assets\images\space2.jpg" alt="Crea tu heroe" />
            </div>  

        </>
    )

}

export default CreateHero