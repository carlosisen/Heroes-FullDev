import { useState } from "react"
import { useAppContext } from "../context/context"


    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { setAllHeroes, allHeroes } = useAppContext()
    const respond = { data, loading, error }

