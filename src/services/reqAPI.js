import axios from "axios";

class reqAPI{
    
    static async getAll() {
        const resp= await axios.get(process.env.REACT_APP_BASE_URL);
        return resp.data
    }

    static async postHero(data) {
        const body= data
        return await axios.post(process.env.REACT_APP_BASE_URL, body)

    }

    static async patchHero(id, data){
        const body= data
        return await axios.patch(`${process.env.REACT_APP_BASE_URL}${id}`, body)
    }

    static async delHero(id){
        return await axios.delete(`${process.env.REACT_APP_BASE_URL}${id}`)
        }
}

export default reqAPI