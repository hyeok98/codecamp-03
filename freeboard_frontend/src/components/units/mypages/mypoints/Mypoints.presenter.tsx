import {
  Wrapper,
  TopDiv,
  History1,
  History2,
  History3,
  History4,
  Font1,
  SearchInput,
  SearchButton,
} from "./Mypoints.styles";
import Table03 from "../../../commons/table/03";
import Table04 from "../../../commons/table/04";
import Table05 from "../../../commons/table/05";
import Table06 from "../../../commons/table/06";

export default function MyPointsUI(props) {
  return (
    <>
      <Wrapper>
        <TopDiv>
          <div>
            <History1 onClick={props.onClickAllHistory}>전체내역</History1>
            <Font1>|</Font1>
            <History2 onClick={props.onClickChargeHistory}>충전내역</History2>
            <Font1>|</Font1>
            <History3 onClick={props.onClickBuyHistory}>구매내역</History3>
            <Font1>|</Font1>
            <History4 onClick={props.onClickSellHistory}>판매내역</History4>
          </div>
          <div>
            <SearchInput
              type="text"
              placeholder="필요한 내용을 검색해주세요."
            />
            <SearchButton>검색</SearchButton>
          </div>
        </TopDiv>
        {props.isChange && !props.isChanged && (
          <Table03 data3={props.data3}></Table03>
        )}
        {!props.isChange && !props.isChanged && (
          <Table04 data4={props.data4}></Table04>
        )}
        {!props.isChange && props.isChanged && (
          <Table05 data5={props.data5}></Table05>
        )}
        {props.isChange && props.isChanged && (
          <Table06 data6={props.data6}></Table06>
        )}
      </Wrapper>
    </>
  );
}
