import {
  Wrapper,
  TopDiv,
  MyProduct,
  Font1,
  SearchInput,
  SearchButton,
  MyPick,
} from "./Mymarkets.styles";
// import Table01 from "../../../commons/table/01";
import Table02 from "../../../commons/table/02";

export default function MyMarketUI(props) {
  return (
    <>
      <Wrapper>
        <TopDiv>
          <div>
            <MyProduct>나의상품</MyProduct>
            <Font1>|</Font1>
            <MyPick>마이찜</MyPick>
          </div>
          <div>
            <SearchInput
              type="text"
              placeholder="필요한 내용을 검색해주세요."
            />
            <SearchButton>검색</SearchButton>
          </div>
        </TopDiv>
        {/* <Table01 data={props.data}> </Table01> */}
        <Table02 data2={props.data2}></Table02>
      </Wrapper>
    </>
  );
}
