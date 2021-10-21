import {
  Wrapper,
  MyPage,
  Img1,
  MyName,
  Img2,
  Font,
  PointDiv,
  BottomDiv,
} from "./LayoutProfile.styles";

export default function LayoutProfileUIPage(props) {
  return (
    <>
      <Wrapper>
        <MyPage>MYPAGE</MyPage>
        <Img1 src="/images/photo10.png" />
        <MyName>노원두</MyName>
        <PointDiv>
          <Img2 src="/images/pig.png" />
          <Font>100,000</Font>
        </PointDiv>
        <BottomDiv>
          <Img2 src="/images/cart.png" />
          <Font onClick={props.onClickMarkets}>내장터</Font>
        </BottomDiv>
        <BottomDiv>
          <Img2 src="/images/pig2.png" />
          <Font onClick={props.onClickPoints}>내 포인트</Font>
        </BottomDiv>
        <BottomDiv>
          <Img2 src="/images/photo10.png" />
          <Font onClick={props.onClickProfile}>내 프로필</Font>
        </BottomDiv>
      </Wrapper>
    </>
  );
}
