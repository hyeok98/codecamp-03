import {
  Wrapper,
  Wrapper2,
  HeaderDiv,
  HeaderLeft,
  SellerDiv,
  Seller,
  Date,
  HeaderRight,
  HeaderImg,
  Hr,
  TitleDiv,
  TitleLeft,
  MiniTitle,
  Title,
  Price,
  LikeDiv,
  Like,
  LikeSu,
  Photo,
  Contents,
  Hashtag,
  HashtagDiv,
  Hr2,
  Map,
} from "./Market-read.styles";

export default function MarketReadUI() {
  return (
    <Wrapper>
      <Wrapper2>
        <HeaderDiv>
          <HeaderLeft>
            <HeaderImg src="/images/photo1.png" />
            <SellerDiv>
              <Seller>판매자</Seller>
              <Date>Date: 2021.02.18</Date>
            </SellerDiv>
          </HeaderLeft>
          <HeaderRight>
            <img src="/images/photo2.png" />
            <img src="/images/photo3.png" />
          </HeaderRight>
        </HeaderDiv>
        <Hr />
        <TitleDiv>
          <TitleLeft>
            <MiniTitle>2019 LTE 32GB</MiniTitle>
            <Title>삼성전자 갤럭시탭A 10.1</Title>
            <Price>240,120원</Price>
          </TitleLeft>
          <LikeDiv>
            <Like src="/images/photo04.png" />
            <LikeSu>20</LikeSu>
          </LikeDiv>
        </TitleDiv>
        <Photo></Photo>
        <Contents></Contents>
        <HashtagDiv>
          <Hashtag>#삼정전자</Hashtag>
          <Hashtag>#삼정전자</Hashtag>
        </HashtagDiv>
        <Hr2 />
        <Map></Map>
        <Hr2 />
      </Wrapper2>
    </Wrapper>
  );
}
