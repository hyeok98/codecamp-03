import {
  Wrapper,
  HeaderImgDiv,
  HeaderImg,
  MainDiv,
  SignupText,
  InputDiv,
  InputText,
  Input,
  Error,
  Button,
  CenterDiv,
  SignImg,
} from "./Signup.styles";

export default function SignupUI(props) {
  return (
    <>
      <Wrapper>
        <HeaderImgDiv>
          <HeaderImg src="/images/maintitle.svg" />
        </HeaderImgDiv>
        <MainDiv>
          <div>
            <SignImg src="/images/sign1.jpeg" />
          </div>
          <CenterDiv>
            <SignupText>회원가입</SignupText>
            <InputDiv>
              <InputText>이메일</InputText>
              <Input type="text" placeholder="이메일을 입력해 주세요." />
              <Error>이메일은 필수 입력입니다.</Error>
            </InputDiv>
            <InputDiv>
              <InputText>이름</InputText>
              <Input type="text" placeholder="이름을 입력해 주세요." />
              <Error>이름은 필수 입력입니다.</Error>
            </InputDiv>
            <InputDiv>
              <InputText>비밀번호</InputText>
              <Input type="password" placeholder="비밀번호를 입력해 주세요." />
              <Error>비밀번호는 필수 입력입니다.</Error>
            </InputDiv>
            <InputDiv>
              <InputText>비밀번호 확인</InputText>
              <Input
                type="password"
                placeholder="비밀번호 확인을 입력해주세요.."
              />
              <Error>비밀번호는 필수 입력입니다.</Error>
            </InputDiv>
            <Button>회원가입하기</Button>
            <Button onClick={props.onClickBack}>돌아가기</Button>
          </CenterDiv>
          <div>
            <SignImg src="/images/sign2.jpeg" />
          </div>
        </MainDiv>
      </Wrapper>
    </>
  );
}
