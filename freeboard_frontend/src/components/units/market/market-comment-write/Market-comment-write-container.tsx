import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import CommentWriteUI from "./Market-comment-write-presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "./Market-comment-write-queries";

export default function CommentWrite(props: any) {
  const router = useRouter();

  const [myContents, setMyContents] = useState("");

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS);

  function onChangeContents(event: any) {
    setMyContents(event.target.value);
  }

  async function onClickQuestion() {
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: myContents,
          },
          useditemId: router.query.read,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.read },
          },
        ],
      });
      alert("댓글을 등록합니다");
      console.log(result.data);
      console.log(data);
    } catch (error) {
      alert(error);
    }
  }

  async function onClickQuestionUpdate(event: any) {
    if (!myContents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }

    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: { contents: myContents },
          useditemQuestionId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.read },
          },
        ],
      });
      props.setIsEdit?.(false);
      alert("댓글수정완료");
    } catch (error) {
      alert(error);
    }
  }

  function back() {
    props.setIsEdit(false);
  }

  return (
    <CommentWriteUI
      onChangeContents={onChangeContents}
      onClickQuestion={onClickQuestion}
      onClickQuestionUpdate={onClickQuestionUpdate}
      isEdit={props.isEdit}
      el={props.el}
      back={back}
    />
  );
}
