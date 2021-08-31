import {useState} from 'react'

export default function SignupStatePage() {
    const [ email, setEmail ] = useState("")
    const [ emailError, setEmailError ] = useState("")
    const [ passError, setPassError ] = useState()

    const [ password1, setPassword1 ] = useState("")
    const [ password2, setPassword2 ] = useState("")


    function onChangEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword1(event) {
        setPassword1(event.target.value)
    }

    function onChangePassword2(event) {
        setPassword2(event.target.value)
    } 

    function onClickSigunp() {
        // console.log('email : ', email)
        // console.log('password1 : ', password1)
        // console.log('password2 : ', password2)

        if(!email.includes("@")) {
            setEmailError("@가 없습니다.")

            // alert("@가 없습니다.")  
        }

        if(password1 !== password2) {
            setPassError("비밀번호가 같지 않습니다.")

            // alert("비밀번호가 서로 다릅니다.")
        }
    }


    return(
        <div>
            이메일: <input type="text" onChange={onChangEmail}/><br />
            <div>{emailError}</div>  {/* emotion으로 색과 사이즈 변경하기 */}
            비밀번호: <input type="password" onChange={onChangePassword1}/><br />
            비밀번호확인: <input type="password" onChange={onChangePassword2}/><br />
            <div>{passError}</div>
            <button onClick={onClickSigunp}>회원가입하기</button>
        </div>

    )


}