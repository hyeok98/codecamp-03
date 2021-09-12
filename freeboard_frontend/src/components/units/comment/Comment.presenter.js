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
  Footer,
  FooterLeft,
  FooterRight,
  Photo2,
  LeftText,
  Photo3,
  QueryTop,
  QueryName,
  QueryContents,
  QueryDate,
  ContentsSpan,
  DateSpan,
} from "./Comment.styles";

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
          <Footer>
            <FooterLeft>
              <Photo3 src="/images/photo18.png" />
              <LeftText>
                <QueryTop>
                  <QueryName>노원두</QueryName>
                  <div>
                    <img src="/images/photo19.png" />
                    <img src="/images/photo19.png" />
                    <img src="/images/photo19.png" />
                    <img src="/images/photo19.png" />
                    <img src="/images/photo19.png" />
                  </div>
                </QueryTop>
                <QueryContents>
                  <ContentsSpan>
                    진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은
                    정보 부탁드립니다~!
                  </ContentsSpan>
                </QueryContents>
                <QueryDate>
                  <DateSpan>2021.02.22</DateSpan>
                </QueryDate>
              </LeftText>
            </FooterLeft>
            <FooterRight>
              <Photo2 src="/images/photo16.png" />
              <Photo2 src="/images/photo17.png" />
            </FooterRight>
          </Footer>
        </Wrapper2>
      </Wrapper>
    </>
  );
}
