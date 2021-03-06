import {
  Wrapper1,
  Wrapper2,
  Top,
  Search,
  TitleBoard,
  TopBest,
  BestBoard,
  MainSearch,
  Year,
  SearchButton,
  SearchInput,
  BestImages,
  BestContents,
  BestPhoto,
  BestTitle,
  BestBottom,
  BestBox,
  BestLeft,
  BestRight,
  LeftTop,
  LeftBottom,
  LeftTopImages,
  LeftName,
  BestGood,
  BestSu,
  List,
  Row,
  ColumnHeaderBasic,
  Footer,
  Button,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  Page,
  PageWrapper,
  MyWord,
} from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props) {
  return (
    <Wrapper1>
      <Wrapper2>
        <Top>
          <TitleBoard>베스트 게시글</TitleBoard>
          <TopBest>
            {props.bestdata?.fetchBoardsOfTheBest.map((el) => (
              <BestBoard key={el._id} onClick={props.onClickBest} id={el._id}>
                <BestImages>
                  {el.images[0] ? (
                    <BestPhoto
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  ) : (
                    <BestPhoto src={"/images/noimg.gif"} />
                  )}
                </BestImages>
                <BestContents>
                  <BestBox>
                    <BestTitle>{el.title}</BestTitle>
                    <BestBottom>
                      <BestLeft>
                        <LeftTop>
                          <LeftTopImages>
                            <img src="/images/photo10.png" />
                          </LeftTopImages>
                          <LeftName>{el.writer}</LeftName>
                        </LeftTop>
                        <LeftBottom>{el.createdAt.substring(0, 10)}</LeftBottom>
                      </BestLeft>
                      <BestRight>
                        <BestGood>
                          <img src="/images/photo11.png" />
                        </BestGood>
                        <BestSu>{el.likeCount}</BestSu>
                      </BestRight>
                    </BestBottom>
                  </BestBox>
                </BestContents>
              </BestBoard>
            ))}
          </TopBest>
        </Top>
        <Search>
          <MainSearch>
            <SearchInput
              type="text"
              placeholder="제목을 검색해주세요."
              onChange={props.onChangeSearch}
            />
          </MainSearch>
          <Year>
            <div>YYYY.MM.DD ~ YYYY.MM.DD</div>
          </Year>
          <SearchButton onClick={props.onClickSearch}>검색하기</SearchButton>
        </Search>

        <List>
          <Row>
            <ColumnHeaderBasic>번호</ColumnHeaderBasic>
            <ColumnHeaderTitle>제목</ColumnHeaderTitle>
            <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
            <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
          </Row>
          {props.data?.fetchBoards.map((el, index) => (
            <Row key={el._id}>
              <ColumnBasic>{10 - index}</ColumnBasic>
              <ColumnTitle id={el._id} onClick={props.onClickMoveDetail}>
                {el.title
                  .replaceAll(props.myKeyWord, `#$%${props.myKeyword}#$%`)
                  .split("#$%")
                  .map((el) => (
                    <MyWord key={uuidv4} isMatched={props.myKeyword === el}>
                      {el}
                    </MyWord>
                  ))}
              </ColumnTitle>
              <ColumnBasic>{el.writer}</ColumnBasic>
              <ColumnBasic>{el.createdAt.substring(0, 10)}</ColumnBasic>
            </Row>
          ))}
        </List>
        {/* <br /> */}
        <PageWrapper>
          <span onClick={props.onClickPrevPage}>이전</span>
          {new Array(10).fill(1).map(
            (_, index) =>
              props.startPage + index <= props.lastPage && (
                <Page
                  key={props.startPage + index}
                  onClick={props.onClickPage}
                  id={String(props.startPage + index)}
                  currentPage={props.startPage + index === props.currentPage}
                >
                  {props.startPage + index}
                </Page>
              )
          )}
          <span onClick={props.onClickNextPage}>다음</span>
        </PageWrapper>

        <Footer>
          <Button onClick={props.onClickMove}>게시물 등록하기</Button>
        </Footer>
      </Wrapper2>
    </Wrapper1>
  );
}
