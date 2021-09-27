import {
  Wrapper,
  MainFont,
  Font,
  Font1,
  Font2,
} from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props) {
  return (
    <Wrapper>
      <MainFont>MAMMOTH COFFEE</MainFont>
      <Font1 onClick={props.onClickMap}>지도</Font1>
      <Font2>|</Font2>
      <Font onClick={props.onClickBoard}>Free Board</Font>
      <Font2>|</Font2>
      <Font onClick={props.onClickMarket}>market</Font>
      <Font2>|</Font2>
      <Font onClick={props.onClickMyPage}>my page</Font>
    </Wrapper>
  );
}
