import { MyDiv, Title, IdInput, PwInput, LoginButton, Wrapper} from '../../styles/Example'

export default function EmotionPage() {

    // return 위쪽은 javascript 쓰는곳 

    // return 아래는 HTML 쓰는곳   리액트는 리턴안에 하나의태그밖에 쓸수없다 그래서 하나의태그로 감싸줘야함
    return(
        <Wrapper>
            <Title>로그인화면</Title>
            아이디: <IdInput type="text" /><br />
            비밀번호: <PwInput type="password" /><br />
            <LoginButton>로그인</LoginButton>
            <img src="/images/lotto.png" />
            {/* <MyDiv>안녕하세요~</MyDiv> */} 
        </Wrapper>
    )

}