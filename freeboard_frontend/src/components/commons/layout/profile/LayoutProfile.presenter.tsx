import {
  Wrapper,
  MyPage,
  Img1,
  MyName,
  Img2,
  Font,
  PointDiv,
  ChargeDiv,
  BottomDiv,
} from "./LayoutProfile.styles";
import PaymentPage from "../../payment/Payment.container";

export default function LayoutProfileUIPage(props: any) {
  return (
    <>
      {props.isOpen && (
        <PaymentPage isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
      )}
      <Wrapper>
        <MyPage>MYPAGE</MyPage>
        {props.data?.fetchUserLoggedIn.picture ? (
          <Img1
            src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`}
          />
        ) : (
          <Img1 src="/images/photo10.png" />
        )}
        <MyName> {props.data?.fetchUserLoggedIn.name}</MyName>
        <PointDiv>
          <Img2 src="/images/pig.png" />
          <Font>{props.data?.fetchUserLoggedIn.userPoint.amount} 당근</Font>
        </PointDiv>
        <ChargeDiv onClick={props.onClickCharge}>충전하기</ChargeDiv>
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
