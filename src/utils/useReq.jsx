import axios from "axios"
import { useState } from "react"
import { useAppContext } from "../context/context"
import reqAPI from "../services/reqAPI"

const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
const { setAllHeroes } = useAppContext()

const getAll = async () => {
    setLoading(true)
    try {
        const resp= await reqAPI.getAll()
        setAllHeroes(resp.data)
    }catch(error){
        setError(error)
    }
    setLoading(false)
}

const putHero = async (data) => {
    setLoading(true)
    try {
        const resp = await reqAPI.postHero(data)
        setAllHeroes((prev)=> [...prev, resp.data])
        setData(resp.data)
    } catch (error) {
        setError(error)
    }
    setLoading(false)
}

const patchHero = async ({id, ...data}) => {
    setLoading(true)
    try {
        const resp = await reqAPI.patchHero(id, data)
        setAllHeroes(heroes.map(hero => hero.id=== id ? resp.data : hero)) // revisar si es mejor llamar a allHeroes aparte y filtrar y sustituir
        setData(resp.data)
    } catch (error) {
        setError(error)
    }
    setLoading(false)
}

const delHero = async (id) => {
    setLoading(true)
    try {
        const resp = await reqAPI.postHero(id)
        setAllHeroes(prev.filter(prevHeros=> prevHeros.id!== id))
    } catch (error) {
        setError(error)
    }
    setLoading(false)
}



return ({ data, loading, error })

export default {
    getAll,
    putHero,
    patchHero,
    delHero
}