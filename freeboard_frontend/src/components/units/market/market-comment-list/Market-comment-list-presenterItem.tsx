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
  ReplyIcon,
} from "./Market-comment-list-styles";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./Market-comment-list-queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentWrite from "../market-comment-write/Market-comment-write-container";
import MarketAnswerWritePage from "../market-answer-write/market-answer-write-container";

export default function MarketCommentListUI(props: any) {
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  function onClickAnswer() {
    setIsAnswer(true);
  }

  function onClickUpdate() {
    setIsEdit(true);
  }

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
      {!isEdit && (
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
                  <ReplyIcon
                    src="/images/photo22.png"
                    onClick={onClickAnswer}
                  />
                  <UpdateIcon
                    src="/images/photo16.png"
                    onClick={onClickUpdate}
                  />
                  <DeleteIcon
                    src="/images/photo17.png"
                    onClick={onClickDelete}
                  />
                </FooterRight>
              </Footer>
              {isAnswer && <MarketAnswerWritePage />}
              <hr />
            </Row>
          </Wrapper2>
        </Wrapper>
      )}
      {isEdit && (
        <CommentWrite isEdit={isEdit} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
