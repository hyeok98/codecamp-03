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
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./Market-comment-list-queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function MarketCommentListUI(props) {
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const router = useRouter();

  async function onClickDelete() {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.read },
          },
        ],
      });
      alert("댓글 삭제 완료");
    } catch (error) {
      alert(error);
    }
  }

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
                <DeleteIcon src="/images/photo17.png" onClick={onClickDelete} />
              </FooterRight>
            </Footer>
          </Row>
        </Wrapper2>
      </Wrapper>
    </>
  );
}
