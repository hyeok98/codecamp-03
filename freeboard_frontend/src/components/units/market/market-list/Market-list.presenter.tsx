import {
  Wrapper,
  Wrapper2,
  BestProduct,
  BestDiv,
  Best,
  BestImg,
  BestFont,
  BestTitle,
  BestBottom,
  BestBottomLeft,
  BestMiniTitle,
  BestPrice,
  BestBottomRight,
  BestLike,
  BestLikeSu,
  SearchDiv,
  SearchLeft,
  Sale,
  SoldOut,
  SearchRight,
  SearchInput,
  SearchDate,
  SearchButton,
  Hr,
  ProductList,
  ListLeft,
  ListPhoto,
  ListFont,
  FontTop,
  ListTitle,
  ListMiniTitle,
  ListTag,
  FontBottom,
  FontBottomLeft,
  ListImg,
  ListBottomFont,
  FontBottomRight,
  ListRight,
  MoneyImg,
  Money,
  ProductButton,
} from "./Market-list.styles";

export default function MarketListUI(props) {
  return (
    <Wrapper>
      <Wrapper2>
        <BestProduct>베스트 상품</BestProduct>
        <BestDiv>
          <Best>
            <BestImg></BestImg>
            <BestFont>
              <BestTitle>삼성전자 갤럭시탭A 10.1</BestTitle>
              <BestBottom>
                <BestBottomLeft>
                  <BestMiniTitle>2019 LTE 32GB</BestMiniTitle>
                  <BestPrice>240,120원</BestPrice>
                </BestBottomLeft>
                <BestBottomRight>
                  <BestLike src="/images/photo04.png" />
                  <BestLikeSu>20</BestLikeSu>
                </BestBottomRight>
              </BestBottom>
            </BestFont>
          </Best>
        </BestDiv>
        <SearchDiv>
          <SearchLeft>
            <Sale>판매중상품</Sale>
            <SoldOut>판매된상품</SoldOut>
          </SearchLeft>
          <SearchRight>
            <SearchInput type="text" placeholder="제품을 검색해주세요" />
            <SearchDate>2020.10.2~2020.12.02</SearchDate>
            <SearchButton>검색</SearchButton>
          </SearchRight>
        </SearchDiv>
        <Hr />
        {props.data?.fetchUseditems.map((el, index) => (
          <ProductList key={el._id}>
            <ListLeft>
              <ListPhoto src="/images/photo20.png" />
              <ListFont>
                <FontTop>
                  <ListTitle id={el._id} onClick={props.onClickMoveDetail}>
                    {el.name}
                  </ListTitle>
                  <ListMiniTitle>{el.remarks}</ListMiniTitle>
                  <ListTag>{el.tags}</ListTag>
                </FontTop>
                <FontBottom>
                  <FontBottomLeft>
                    <ListImg src="/images/photo18.png" />
                    <ListBottomFont>{el.seller.name}</ListBottomFont>
                  </FontBottomLeft>
                  <FontBottomRight>
                    <ListImg src="/images/photo04.png" />
                    <ListBottomFont>20</ListBottomFont>
                  </FontBottomRight>
                </FontBottom>
              </ListFont>
            </ListLeft>
            <ListRight>
              <MoneyImg src="/images/photo21.png" />
              <Money>{el.price} 원</Money>
            </ListRight>
          </ProductList>
        ))}
        <ProductButton onClick={props.onClickNew}>상품등록하기</ProductButton>
      </Wrapper2>
    </Wrapper>
  );
}
