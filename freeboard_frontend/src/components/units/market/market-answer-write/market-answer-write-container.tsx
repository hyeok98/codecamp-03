import MarketAnswerWriteUIPage from "./market-answer-write-presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./market-answer-write-queries";
import { useState } from "react";

export default function MarketAnswerWritePage(props: any) {
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );

  const [myContents, setMyContents] = useState("");

  function onChangeAnswerWrite(event: any) {
    setMyContents(event.target.value);
  }

  async function onClickAnswerSubmit() {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.el?._id,
          createUseditemQuestionAnswerInput: {
            contents: myContents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.el?._id },
          },
        ],
      });
      alert("대댓글 등록완료");
      props.setIsAnswer(false);
    } catch (error) {
      alert(error);
    }
  }

  async function onClickAnswerUpdate(event: any) {
    if (!myContents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }

    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: { contents: myContents },
          useditemQuestionAnswerId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionAnswerId: props.el?._id },
          },
        ],
      });
      props.setIsAnswerEdit(false);
    } catch (error) {
      alert(error);
    }
  }

  function back() {
    props.setIsAnswerEdit(false);
  }

  return (
    <MarketAnswerWriteUIPage
      onChangeAnswerWrite={onChangeAnswerWrite}
      onClickAnswerSubmit={onClickAnswerSubmit}
      onClickAnswerUpdate={onClickAnswerUpdate}
      isAnswerEdit={props.isAnswerEdit}
      answerel={props.answerel}
      back={back}
    />
  );
}
