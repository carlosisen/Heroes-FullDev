import axios from "axios";
import { useAppContext } from "../context/context"


const { url } = useAppContext()
class reqAPI{
    
    static async getAll() {
        return await axios.get(url);
    }

    static async postHero(data) {
        const body= JSON.stringify(data)
        return await axios.post(url, body)

    }

    static async patchHero({id, ...data}){
        const body= JSON.stringify(data)
        return await axios.patch(`${url}${id}`, body)
    }

    static async delHero({id}){
        return await axios.delete(`${url}${id}`)
        }
    }

export default reqAPI