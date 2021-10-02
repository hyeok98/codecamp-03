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
          <EamilInput type="text" placeholder="이메일을 입력해주세요." />
          <Error>이메일은 필수입력입니다.</Error>
        </EmailDiv>
        <PasslDiv>
          <PassInput type="password" placeholder="이메일을 입력해주세요." />
          <Error>비밀번호는 필수입력입니다.</Error>
        </PasslDiv>
        <CheckDiv>
          <CheckBox type="checkbox" />
          <CheckFont>로그인 상태유지</CheckFont>
        </CheckDiv>
        <ButtonDiv>
          <Button>로그인하기</Button>
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
