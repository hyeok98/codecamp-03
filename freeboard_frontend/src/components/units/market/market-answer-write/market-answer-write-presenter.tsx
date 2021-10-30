import {
  Wrapper,
  Image,
  InputBox,
  Input,
  BottomDiv,
  Font,
  Button1,
} from "./market-answer-write-styles";

export default function MarketAnswerWriteUIPage(props: any) {
  return (
    <Wrapper>
      <Image src="/images/photo23.png" />
      <InputBox>
        <Input
          type="text"
          placeholder="답글을 등록해주세요"
          onChange={props.onChangeAnswerWrite}
        />
        <BottomDiv>
          <Font>0/100</Font>
          {props.isAnswerEdit && <button onClick={props.back}>돌아가기</button>}
          <Button1
            id={props.answerel?._id}
            onClick={
              props.isAnswerEdit
                ? props.onClickAnswerUpdate
                : props.onClickAnswerSubmit
            }
          >
            {props.isAnswerEdit ? "답글수정" : "답글등록"}
          </Button1>
        </BottomDiv>
      </InputBox>
    </Wrapper>
  );
}
