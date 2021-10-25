import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import CommentWriteUI from "./Market-comment-write-presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./Market-comment-write-queries";

export default function CommentWrite() {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [myContents, setMyContents] = useState("");
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS);

  function onChangeContents(event) {
    setMyContents(event.target.value);
  }

  async function onClickQuestion() {
    try {
      await createUseditemQuestion({
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
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <CommentWriteUI
      onChangeContents={onChangeContents}
      onClickQuestion={onClickQuestion}
    />
  );
}
