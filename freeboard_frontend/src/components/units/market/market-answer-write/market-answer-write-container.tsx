import MarketAnswerWriteUIPage from "./market-answer-write-presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  // FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./market-answer-write-queries";
import { useState } from "react";

export default function MarketAnswerWritePage(props: any) {
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
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
      });
      alert("대댓글 등록완료");
      props.setIsAnswer(false);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <MarketAnswerWriteUIPage
      onChangeAnswerWrite={onChangeAnswerWrite}
      onClickAnswerSubmit={onClickAnswerSubmit}
    />
  );
}
