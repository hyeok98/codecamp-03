import {Wrapper1,Wrapper2,Wrapper3,HeaderHeader,Header,Main,MainId,Id,IdInput,Footer
,MainPw,HeaderTitle, Pw, PwInput, LoginButton,TalkButton
,FooterMain,FooterFont,TalkLogin,Error} from '../../../styles/02-login'

import {useState} from 'react'

export default function BoardsNewPage(){

    const [ email, setEmail ] = useState()
    const [ pass, setPass ] = useState()

    const [ emailError, setEmailError ] = useState()
    const [ passError, setPassError ] = useState()


    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePass(event) {
        setPass(event.target.value)
    }

    function onClickSignup() {
        if(email === "" || !email.includes("@")) {
            setEmailError("이메일을 확인해 주세요")
        }

        if(pass === "" || pass.length < 8) {
            setPassError("8~16자의 영문,숫자,특수문자만 사용가능합니다.")
        }
    }

    


    return (
        <Wrapper1>
            <Wrapper2 >
            <HeaderHeader></HeaderHeader>
                <Wrapper3>                  
                    <Header>
                        <img src="/images/photo10.png"/>
                        <HeaderTitle>잇츠로드</HeaderTitle>
                    </Header>
                    <Main>
                        <MainId>
                            <Id>
                                <IdInput type = "text" placeholder="이메일을 입력해 주세요" onChange={onChangeEmail}/>
                                <img src="/images/photo11.png"/>
                            </Id>
                            <hr />
                            <div>
                                <Error>{emailError}</Error>
                            </div>
                        </MainId>
                        <MainPw>
                            <Pw>
                                <PwInput type = "password" placeholder="비밀번호를 입력해 주세요" onChange={onChangePass}/>
                                <img src="/images/photo11.png"/>
                            </Pw>
                            <hr/>
                            <div>
                                <Error>{passError}</Error>
                            </div>
                        </MainPw>
                    </Main>
                    <Footer>
                        <LoginButton onClick={onClickSignup}>로그인</LoginButton>
                        <FooterMain>
                            <FooterFont>이메일 찾기</FooterFont>
                            <FooterFont>|</FooterFont>
                            <FooterFont>비밀번호 찾기</FooterFont>
                            <FooterFont>|</FooterFont>
                            <FooterFont>회원가입</FooterFont>
                        </FooterMain>
                        <TalkButton> 
                        <img src="/images/photo12.png"/>                       
                          <TalkLogin>카카오톡으로 로그인</TalkLogin>
                        </TalkButton>
                            
                        
                    </Footer>
                </Wrapper3>
            </Wrapper2>
        </Wrapper1>

    )

}