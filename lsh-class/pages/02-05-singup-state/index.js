import {useState} from 'react'

export default function SingupStatePage() {

    const [email, setEmail] = useState()
    const [pass1, setPass1] = useState()
    const [pass2, setPass2] = useState()

    const [emailError, setEmailError] = useState()
    const [passError, setPassError] = useState()

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePass1(event) {
        setPass1(event.target.value)
    }

    function onChangePass2(event) {
        setPass2(event.target.value)
    }

    function sing() {
        if(!email.includes("@")) {
            setEmailError("@가없습니다.")
        }

        if(pass1 !== pass2) {
            setPassError("비밀번호가 맞지않습니다.")
        }
    }

    return(
        <>
            이메일: <input type="text" onChange={onChangeEmail}/><br/>
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePass1}/><br/>
            비밀번호확인: <input type="password" onChange={onChangePass2}/><br/>
            <div>{passError}</div>
            <button onClick={sing}>가입하기</button>
        </>

    )
}