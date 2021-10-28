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
  ButtonDiv2,
  Button01,
  Button02,
  Button03,
  Button04,
  PictureImg,
} from "./Market-read.styles";
import Dompurify from "dompurify";

export default function MarketReadUI(props: any) {
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
            <Price>{props.data?.fetchUseditem.price}원</Price>
          </TitleLeft>
          <LikeDiv>
            <Like onClick={props.onClickPick} src="/images/photo04.png" />
            <LikeSu>{props.data?.fetchUseditem.pickedCount}</LikeSu>
          </LikeDiv>
        </TitleDiv>
        <Photo>
          {props.data?.fetchUseditem.images
            ?.filter((el: any) => el)
            .map((el: any) => (
              <PictureImg
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
        </Photo>
        {process.browser && (
          <Contents>
            <div
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></div>
          </Contents>
        )}
        <HashtagDiv>
          <Hashtag>{props.data?.fetchUseditem.tags}</Hashtag>
        </HashtagDiv>

        <Map id="map"></Map>
        <Hr2 />

        {props.data?.fetchUseditem.seller.email ===
        props.data1?.fetchUserLoggedIn.email ? (
          <ButtonDiv>
            <Button01 onClick={props.onClickList}>목록으로</Button01>
            <Button02 onClick={props.onClickMoveEdit}>수정하기</Button02>
            <Button03 onClick={props.onClickDelete}>삭제하기</Button03>
          </ButtonDiv>
        ) : (
          <ButtonDiv2>
            <Button01 onClick={props.onClickList}>목록으로</Button01>
            <Button04 onClick={props.onClickFlex}>구매하기</Button04>
          </ButtonDiv2>
        )}

        {/* <Hr3 /> */}
      </Wrapper2>
    </Wrapper>
  );
}
