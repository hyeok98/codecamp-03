import { Wrapper, Font, Font2 } from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props) {
  return (
    <Wrapper>
      <Font onClick={props.onClickMap}>지도</Font>
      <Font2>|</Font2>
      <Font onClick={props.onClickBoard}>자유게시판</Font>
      <Font2>|</Font2>
      <Font onClick={props.onClickMarket}>중고마켓</Font>
      <Font2>|</Font2>
      <Font onClick={props.onClickMyPage}>마이페이지</Font>
    </Wrapper>
  );
}
