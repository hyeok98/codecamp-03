import { Wrapper } from "./Market-list.styles";

export default function MarketListUI(props) {
  return (
    <Wrapper>
      <div>리스트페이지입니다.</div>
      <div onClick={props.aa}>글등록하기</div>
    </Wrapper>
  );
}
