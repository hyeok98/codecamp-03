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
  ButtonDiv,
  Button01,
  Button02,
} from "./Market-read.styles";

export default function MarketReadUI(props) {
  return (
    <Wrapper>
      <Wrapper2>
        <HeaderDiv>
          <HeaderLeft>
            <HeaderImg src="/images/photo1.png" />
            <SellerDiv>
              <Seller>{props.data?.fetchUseditem.seller.name}</Seller>
              <Date>
                {props.data?.fetchUseditem.createdAt.substring(0, 10)}
              </Date>
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
            <MiniTitle>{props.data?.fetchUseditem.remarks}</MiniTitle>
            <Title>{props.data?.fetchUseditem.name}</Title>
            <Price>{props.data?.fetchUseditem.price}</Price>
          </TitleLeft>
          <LikeDiv>
            <Like src="/images/photo04.png" />
            <LikeSu>20</LikeSu>
          </LikeDiv>
        </TitleDiv>
        <Photo></Photo>
        <Contents>{props.data?.fetchUseditem.contents}</Contents>
        <HashtagDiv>
          <Hashtag>{props.data?.fetchUseditem.tags}</Hashtag>
        </HashtagDiv>
        <Hr2 />
        <Map></Map>
        <Hr2 />
        <ButtonDiv>
          <Button01 onClick={props.onClickList}>목록으로</Button01>
          <Button02>수정하기</Button02>
        </ButtonDiv>
      </Wrapper2>
    </Wrapper>
  );
}
