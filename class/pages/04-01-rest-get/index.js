import axios from 'axios'

export default function RestGetPage() {

    async function zzz() {
        const result = await axios.get('https://koreanjson.com/posts/1')  //기능이 실행되면 자동으로  HTTP 길이생김  > 백엔드에 요청이되고 > 응답이되어 다시 돌아온다.
        console.log(result)  //result 에 뭐가 담겨있는지확인 (위에 주소)
    }

    return (
        <button onClick={zzz}>REST-API 요청하기!!</button>

    )

}