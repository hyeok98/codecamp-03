import {
  Wrapper,
  Wrapper2,
  Footer,
  FooterLeft,
  FooterRight,
  UpdateIcon,
  DeleteIcon,
  LeftText,
  Photo3,
  QueryTop,
  QueryName,
  QueryContents,
  QueryDate,
  ContentsSpan,
  DateSpan,
  Row,
} from "./Market-comment-list-styles";

export default function MarketCommentListUI(props) {
  return (
    <>
      <Wrapper>
        <Wrapper2>
          <Row key={props.el?._id}>
            <Footer>
              <FooterLeft>
                <Photo3 src="/images/photo18.png" />
                <LeftText>
                  <QueryTop>
                    <QueryName>{props.el?.user.name}</QueryName>
                  </QueryTop>
                  <QueryContents>
                    <ContentsSpan>{props.el?.contents}</ContentsSpan>
                  </QueryContents>
                  <QueryDate>
                    <DateSpan>{props.el?.createdAt.slice(0, 10)}</DateSpan>
                  </QueryDate>
                </LeftText>
              </FooterLeft>
              <FooterRight>
                <UpdateIcon src="/images/photo16.png" />
                <DeleteIcon src="/images/photo17.png" />
              </FooterRight>
            </Footer>
          </Row>
        </Wrapper2>
      </Wrapper>
    </>
  );
}
