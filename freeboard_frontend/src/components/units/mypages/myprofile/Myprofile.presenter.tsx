import {
  Wrapper,
  Title,
  InputDiv,
  InputSpan,
  InputBox,
} from "./Myprofile.styles";

export default function MyProfileUI() {
  return (
    <Wrapper>
      <Title>비밀번호 변경</Title>
      <InputDiv>
        <InputSpan>현재 비밀번호</InputSpan>
        <InputBox
          type="password"
          placeholder="현재 비밀번호를 입력해 주세요."
        />
      </InputDiv>
      <InputDiv>
        <InputSpan>새 비밀번호</InputSpan>
        <InputBox type="password" placeholder="새 비밀번호를 입력해 주세요." />
      </InputDiv>
      <InputDiv>
        <InputSpan>새 비밀번호 확인</InputSpan>
        <InputBox type="password" placeholder="새 비밀번호를 확인해 주세요." />
      </InputDiv>
    </Wrapper>
  );
}
