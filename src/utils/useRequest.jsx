import { useState } from "react"
import { useAppContext } from "../context/context"
import axios from "axios"
import reqAPI from "../services/reqAPI"

const useRequest= () => {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
const {setAllHeroes, allHeroes } = useAppContext()

const getAll = async () => {
    setLoading(true)
    try {
        const resp = await reqAPI.getAll()
        setAllHeroes(resp.data)
        setData(resp.data)
    }catch(error){
        setError(error.message)
    }
    finally {
        setLoading(false)
    }
}

// const putHero = async (id) => {
//     setLoading(true)
//     try {
//         const resp = await reqAPI.postHero(id)
//         setAllHeroes([...allHeroes, resp.data])
//         setData(resp.data)
//     } catch (error) {
//         setError(error)
//     }
//     finally {setLoading(false)}

// }

//  const patchHero = async ({id, ...data}) => {
//     setLoading(true)
//     try {
//         const resp = await reqAPI.patchHero(id, data)
//         setAllHeroes(allHeroes.map(hero => hero.id=== id ? resp.data : hero)) // revisar si es mejor llamar a allHeroes aparte y filtrar y sustituir
//         setData(resp.data)
//     } catch (error) {
//         setError(error)
//     }
//     finally { setLoading(false) }
// }

//  const delHero = async (id) => {
//     setLoading(true)
//     try {
//         const resp = await reqAPI.postHero(id)
//         setAllHeroes(allHeroes.filter(prevHeros=> prevHeros.id!== id))
//     } catch (error) {
//         setError(error)
//     }
//     finally { setLoading(false) }
// }

    return {
        data,
        loading, 
        error,
        getAll, 
        // putHero,
        // patchHero,
        // delHero
}
}

export default useRequest