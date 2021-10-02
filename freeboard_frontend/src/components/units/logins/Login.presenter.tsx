import {
  Wrapper,
  MainImg,
  EmailDiv,
  EamilInput,
  EmailError,
  PasslDiv,
  PassInput,
  PassError,
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

export default function LoginUI() {
  return (
    <>
      <Wrapper>
        <MainImg src="/images/maintitle.svg" />
        <EmailDiv>
          <EamilInput type="text" placeholder="이메일을 입력해주세요." />
          <EmailError>이메일은 필수입력입니다.</EmailError>
        </EmailDiv>
        <PasslDiv>
          <PassInput type="password" placeholder="이메일을 입력해주세요." />
          <PassError>비밀번호는 필수입력입니다.</PassError>
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
          <Font1>회원가입</Font1>
        </FontDiv>
      </Wrapper>
    </>
  );
}
