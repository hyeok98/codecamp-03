import {
  Wrapper,
  Wrapper2,
  TopDiv,
  Img,
  TopSpan,
  InputDiv,
  MainInput,
  Bottom,
  MainNumber,
  MainButton,
} from "./Market-comment-write-styles";

export default function CommentWriteUI(props: any) {
  return (
    <Wrapper>
      <Wrapper2>
        {!props.isEdit && (
          <TopDiv>
            <Img src="/images/photo15.png" />
            <TopSpan>문의하기</TopSpan>
          </TopDiv>
        )}
        <InputDiv>
          <div>
            <MainInput
              type="text"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.onChangeContents}
            />
          </div>
          <Bottom>
            <MainNumber>0/100</MainNumber>
            {props.isEdit && <button onClick={props.back}>돌아가기</button>}
            <MainButton
              id={props.el?._id}
              onClick={
                props.isEdit
                  ? props.onClickQuestionUpdate
                  : props.onClickQuestion
              }
            >
              {props.isEdit ? "수정하기" : "문의하기"}
            </MainButton>
          </Bottom>
        </InputDiv>
      </Wrapper2>
    </Wrapper>
  );
}
