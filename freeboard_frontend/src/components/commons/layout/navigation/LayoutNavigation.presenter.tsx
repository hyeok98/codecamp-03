import {
  Wrapper,
  Font,
  Font1,
  Font2,
  MainImg,
  RightDiv,
  Main,
  Login,
  Signup,
  MyIcon,
  MyName,
} from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props: any) {
  return (
    <Wrapper>
      <Main>
        <MainImg src="/images/maintitle.svg" />
        <Font1 onClick={props.onClickMap}>지도</Font1>
        <Font2>|</Font2>
        <Font onClick={props.onClickBoard}>자유게시판</Font>
        <Font2>|</Font2>
        <Font onClick={props.onClickMarket}>중고마켓</Font>
        <Font2>|</Font2>
        <Font onClick={props.onClickMyPage}>마이페이지</Font>
      </Main>
      <RightDiv>
        {!props.data?.fetchUserLoggedIn.name && (
          <Login onClick={props.onClickLoginPage}>로그인</Login>
        )}
        {!props.data?.fetchUserLoggedIn.name && (
          <Signup onClick={props.onClickSignupPage}>회원가입</Signup>
        )}
        {props.data?.fetchUserLoggedIn.name && (
          <MyIcon src="/images/photo10.png" />
        )}
        {props.data?.fetchUserLoggedIn.name && (
          <MyName>{props.data?.fetchUserLoggedIn.name}</MyName>
        )}
      </RightDiv>
    </Wrapper>
  );
}
