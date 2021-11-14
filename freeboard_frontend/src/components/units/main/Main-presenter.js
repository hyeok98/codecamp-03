import {
  Wrapper,
  Heard,
  Main,
  MainImg,
  MainTitle,
  MainLeft,
  MainRight,
  MainDiv,
  LeftMainTileDiv,
  LeftTitle,
  LeftSmallTileDiv,
  LeftSmallTile,
  ButtonDiv,
  Button,
} from "./Main-styles";

export default function LandingMainUI(props) {
  return (
    <>
      <Wrapper>
        <Heard>
          <MainTitle src="/images/maintitle.svg" />
        </Heard>
        <Main>
          <MainDiv>
            <MainLeft>
              <div>
                <LeftMainTileDiv>
                  <LeftTitle>당신근처의 당근마켓</LeftTitle>
                </LeftMainTileDiv>
                <LeftSmallTileDiv>
                  <LeftSmallTile>
                    중고 거래부터 동네 정보까지, 이웃과 함께해요. 가깝고 따뜻한
                    당신의 근처를 만들어요.
                  </LeftSmallTile>
                </LeftSmallTileDiv>
              </div>
              <ButtonDiv>
                <Button onClick={props.onClickHome}>홈페이지</Button>
                {!props.data?.fetchUserLoggedIn.name && (
                  <Button onClick={props.onClickLogin}>로그인</Button>
                )}
                {props.data?.fetchUserLoggedIn.name && (
                  <Button onClick={props.onClickLogout}>로그아웃</Button>
                )}
              </ButtonDiv>
            </MainLeft>
            <MainRight>
              <MainImg src="/images/main01.png" />
            </MainRight>
          </MainDiv>
        </Main>
      </Wrapper>
    </>
  );
}
