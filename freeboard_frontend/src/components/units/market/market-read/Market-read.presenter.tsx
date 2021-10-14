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
  Button03,
  Hr3,
} from "./Market-read.styles";
import Dompurify from "dompurify";

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
            <Like onClick={props.onClickPick} src="/images/photo04.png" />
            <LikeSu>{props.data?.fetchUseditem.pickedCount}</LikeSu>
          </LikeDiv>
        </TitleDiv>
        <Photo></Photo>
        <Contents>
          <div
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          ></div>
        </Contents>
        <HashtagDiv>
          <Hashtag>{props.data?.fetchUseditem.tags}</Hashtag>
        </HashtagDiv>
        <Hr2 />
        <Map></Map>
        <Hr2 />
        <ButtonDiv>
          <Button01 onClick={props.onClickList}>목록으로</Button01>
          <Button02 onClick={props.onClickMoveEdit}>수정하기</Button02>
          <Button03 onClick={props.onClickDelete}>삭제하기</Button03>
        </ButtonDiv>
        <Hr3 />
      </Wrapper2>
    </Wrapper>
  );
}
