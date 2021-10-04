import {
  Wrapper,
  MainImg,
  EmailDiv,
  EamilInput,
  Error,
  PasslDiv,
  PassInput,
  CheckDiv,
  CheckBox,
  CheckFont,
  ButtonDiv,
  Button,
  Button2,
  Hr,
  FontDiv,
  Font1,
  Font2,
} from "./Login.styles";

export default function LoginUI(props) {
  return (
    <>
      <Wrapper>
        <MainImg src="/images/maintitle.svg" />
        <EmailDiv>
          <EamilInput
            type="text"
            placeholder="이메일을 입력해주세요."
            onChange={props.onChangeMyEmail}
          />
          <Error>{props.MyEmailError}</Error>
        </EmailDiv>
        <PasslDiv>
          <PassInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangeMyPass}
          />
          <Error>{props.MyPassError}</Error>
        </PasslDiv>
        <CheckDiv>
          <CheckBox type="checkbox" />
          <CheckFont>로그인 상태유지</CheckFont>
        </CheckDiv>
        <ButtonDiv>
          <Button onClick={props.onClickLogin}>로그인하기</Button>
        </ButtonDiv>
        <ButtonDiv>
          <Button2 onClick={props.onClickBack}>돌아가기</Button2>
        </ButtonDiv>
        <Hr />
        <FontDiv>
          <Font1>이메일 찾기</Font1>
          <Font2>|</Font2>
          <Font1>비밀번호 찾기</Font1>
          <Font2>|</Font2>
          <Font1 onClick={props.onClickSignup}>회원가입</Font1>
        </FontDiv>
      </Wrapper>
    </>
  );
}
