import { useState } from "react"
import { useAppContext } from "../context/context"
import reqAPI from "../services/reqAPI"

const useRequest= () => {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
const {setAllHeroes, allHeroes, filterHeroes, setFilterHeroes} = useAppContext()

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

const postHero = async (data) => {
    setLoading(true)
    try {
        const resp = await reqAPI.postHero(data)
        setAllHeroes([...allHeroes, resp.data.data])
        setData(resp.data)
    } catch (error) {
        setError(error)
    }
    finally {setLoading(false)}

}

 const patchHero = async (data) => {
    setLoading(true)
    try {
        const resp = await reqAPI.patchHero(data.id, data)
        const newHeroes = allHeroes.map(hero => hero.id === data.id ? ({...hero, ...resp.data.data}) : hero)
        setAllHeroes(newHeroes) // Pendiente hacer funcion para modificar solo los elementos cambiados y no todo el heroe
        setData(resp.data)
    } catch (error) {
        setError(error.message)
    }
    finally { setLoading(false) }
}

 const delHero = async (id) => {
    setLoading(true)
    try {
        const resp = await reqAPI.delHero(id)
        setAllHeroes(allHeroes.filter(prevHeros=> prevHeros.id!== id))
        setFilterHeroes(filterHeroes.filter(prevHeros => prevHeros.id !== id))
    } catch (error) {
        setError(error)
    }
    finally { setLoading(false) }
}

const searchHero = async (data) =>{
    setLoading(true)
    if(data === ""){
        return setFilterHeroes([])
    }
    try {
        const resp = await reqAPI.searchHero(data)
        setFilterHeroes(resp.data)
    } catch (error) {
        setFilterHeroes(error.message)
        setError(error)
    }
    finally { setLoading(false) }
}

 const reset= ()=> {
    setData();
    setLoading();
    setError()
 }

    return {
        data,
        loading, 
        error,
        getAll, 
        postHero,
        patchHero,
        delHero,
        searchHero,
        reset
}
}

export default useRequest