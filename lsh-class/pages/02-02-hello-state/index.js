import{useState} from 'react'

export default function HelloStatePage() {
    
    // const [ state이름, state저장도구 ] = useState("초기값")
    const [ hello, setHello] = useState("안녕하세요")

    function zzz() {
        setHello("반갑습니다.")
    }

    return(
        <button onClick={zzz}>{hello}</button>

    )

}