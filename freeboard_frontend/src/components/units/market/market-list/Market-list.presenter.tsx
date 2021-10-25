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
  Loader,
} from "./Market-list.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketListUI(props) {
  return (
    <Wrapper>
      <Wrapper2>
        <BestProduct>베스트 상품</BestProduct>
        <BestDiv>
          {props.bestdata?.fetchUseditemsOfTheBest.map((el) => (
            <Best key={el._id} onClick={props.onClickBest} id={el._id}>
              {el.images[0] ? (
                <BestImg
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                ></BestImg>
              ) : (
                <BestImg src={"/images/noimg.gif"}></BestImg>
              )}

              <BestFont>
                <BestTitle>{el.name}</BestTitle>
                <BestBottom>
                  <BestBottomLeft>
                    <BestMiniTitle>{el.remarks}</BestMiniTitle>
                    <BestPrice>{el.price}</BestPrice>
                  </BestBottomLeft>
                  <BestBottomRight>
                    <BestLike src="/images/photo04.png" />
                    <BestLikeSu>{el.pickedCount}</BestLikeSu>
                  </BestBottomRight>
                </BestBottom>
              </BestFont>
            </Best>
          ))}
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
        <Loader>
          <InfiniteScroll
            style={{ height: "960px" }}
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={false || true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el) => (
              <ProductList key={el._id}>
                <ListLeft>
                  {el.images[0] ? (
                    <ListPhoto
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  ) : (
                    <ListPhoto src={"/images/noimg.gif"} />
                  )}
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
                        <ListBottomFont>{el.pickedCount}</ListBottomFont>
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
          </InfiniteScroll>
        </Loader>

        {/* {props.data?.fetchUseditems.map((el) => (
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
                    <ListBottomFont>{el.pickedCount}</ListBottomFont>
                  </FontBottomRight>
                </FontBottom>
              </ListFont>
            </ListLeft>
            <ListRight>
              <MoneyImg src="/images/photo21.png" />
              <Money>{el.price} 원</Money>
            </ListRight>
          </ProductList>
        ))} */}
        <ProductButton onClick={props.onClickNew}>상품등록하기</ProductButton>
      </Wrapper2>
    </Wrapper>
  );
}
