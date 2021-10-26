import {
  Wrapper,
  Image,
  InputBox,
  Input,
  BottomDiv,
  Font,
  Button1,
} from "./market-answer-write-styles";

export default function MarketAnswerWriteUIPage() {
  return (
    <Wrapper>
      <Image src="/images/photo23.png" />
      <InputBox>
        <Input type="text" placeholder="답글을 등록해주세요" />
        <BottomDiv>
          <Font>0/100</Font>
          <Button1>답글등록</Button1>
        </BottomDiv>
      </InputBox>
    </Wrapper>
  );
}
