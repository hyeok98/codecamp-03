import {
  Wrapper,
  Main,
  MainDiv,
  MainLeft,
  MainRight,
  MainImg,
  LeftMainTitleDiv,
  LeftTitle,
  LeftSmallTitle,
  LeftBottomDiv,
  LeftBottom,
  BottomImage,
  BottomMainText,
  BottomText,
  AA,
} from "./LayoutHrader.styles";

export default function LayoutHraderUI() {
  return (
    <Wrapper>
      <Main>
        <MainDiv>
          <MainLeft>
            <div>
              <LeftMainTitleDiv>
                <LeftTitle>이웃과 함께 하는 동네생활</LeftTitle>
              </LeftMainTitleDiv>
              <AA>
                <LeftSmallTitle>
                  우리 동네의 다양한 이야기를 이웃과 함께 나누어요
                </LeftSmallTitle>
              </AA>
              <LeftBottomDiv>
                <LeftBottom>
                  <BottomImage src="/images/headerimage1.svg" />
                  <BottomMainText>우리동네질문</BottomMainText>
                  <div>
                    <BottomText>궁금한 게 있을 땐 이웃에게</BottomText>
                    <BottomText>물어보세요</BottomText>
                  </div>
                </LeftBottom>
                <LeftBottom>
                  <BottomImage src="/images/headerimage2.svg" />
                  <BottomMainText>동네분실센터</BottomMainText>
                  <div>
                    <BottomText>궁금한 게 있을 땐 이웃에게</BottomText>
                    <BottomText>물어보세요</BottomText>
                  </div>
                </LeftBottom>
                <LeftBottom>
                  <BottomImage src="/images/headerimage3.svg" />
                  <BottomMainText>동네모임</BottomMainText>
                  <div>
                    <BottomText>궁금한 게 있을 땐 이웃에게</BottomText>
                    <BottomText>물어보세요</BottomText>
                  </div>
                </LeftBottom>
              </LeftBottomDiv>
            </div>
          </MainLeft>
          <MainRight>
            <MainImg src="/images/main01.png" />
          </MainRight>
        </MainDiv>
      </Main>
    </Wrapper>
  );
}
