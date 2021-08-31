import { useState } from "react"

export default function SignupStatePage() {

    const[ aaa, setAaa ] = useState("000000")

    function number () {
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        setAaa(token)
    }

    return(
        <div>
            <div>{aaa}</div>
            <button onClick={number}>인증번호전송</button>
        </div>
    )

}