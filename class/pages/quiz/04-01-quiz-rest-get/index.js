import axios from "axios"

export default function RestGetPage() {
    
    async function ccc() {
       const result = await axios.get('https://koreanjson.com/users ')
       console.log(result)
    }


    return(
        <button onClick={ccc}>REST-API요청하기</button>
    )
}