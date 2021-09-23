import {
  Wrapper,
  Top,
  Wrapper2,
  Photo1,
  TopFont,
  TopInput,
  Input1,
  MainInput,
  InputContents,
  MainBottom,
  MainNumber,
  MainButton,
  Star,
} from "./Comment-write.styles";

export default function BoardCommentUI(props) {
  return (
    <>
      <Wrapper>
        <Wrapper2>
          <Top>
            <Photo1 src="/images/photo15.png" />
            <TopFont>댓글</TopFont>
          </Top>
          <TopInput>
            <Input1
              type="text"
              placeholder="작성자"
              onChange={props.onChangeWriter}
            />
            <Input1
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangePassword}
            />
            <Star onChange={props.onChangeStar} />
          </TopInput>
          <MainInput>
            <InputContents
              type="text"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.onChangeContents}
            />
            <MainBottom>
              <MainNumber>0/100</MainNumber>
              <MainButton onClick={props.onClickComment}>등록하기</MainButton>
            </MainBottom>
          </MainInput>
        </Wrapper2>
      </Wrapper>
    </>
  );
}
