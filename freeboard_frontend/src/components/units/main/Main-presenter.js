import {
  Wrapper,
  Poto1,
  Landing2,
  Landing3,
  Poto2,
  MainDiv,
  ButtonDiv,
  Button,
} from "./Main-styles";

export default function CoffeeMainUI(props) {
  return (
    <>
      <Wrapper>
        <MainDiv>
          <Poto1>
            <Landing2 src="/images/landing2.png" />
            <Landing3 src="/images/main2.png" />
            <ButtonDiv>
              <Button onClick={props.onClickHome}>홈페이지</Button>
              <Button>로그인</Button>
            </ButtonDiv>
          </Poto1>
          <Poto2>
            <img src="/images/landing3.png" />
          </Poto2>
        </MainDiv>
      </Wrapper>
    </>
  );
}
