export default function SignupStatePage() {

    function number () {
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("aa").innerText = token
    }

    return(
        <div>
            <div id="aa">000000</div>
            <button onClick={number}>인증번호전송</button>
        </div>
    )

}