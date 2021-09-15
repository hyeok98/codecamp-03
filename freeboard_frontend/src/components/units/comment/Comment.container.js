import { useState } from "react";
import BoardCommentUI from "./Comment.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./Comment.Queries";

export default function BoardComment() {
  const router = useRouter();
  const [myWriter, setMyWriter] = useState("");
  const [myPass, setMyPass] = useState("");
  const [myContents, setMyContents] = useState("");

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  function onChangeWriter(event) {
    setMyWriter(event.target.value);
  }

  function onChangePassword(event) {
    setMyPass(event.target.value);
  }

  function onChangeContents(event) {
    setMyContents(event.target.value);
  }

  async function onClickComment() {
    await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer: myWriter,
          password: myPass,
          contents: myContents,
          rating: 0,
        },
        boardId: String(router.query.boardId),
      },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD_COMMENTS,
      //     variables: { boardId: router.query.boardId },
      //   },
      // ],
    });
  }

  return (
    <BoardCommentUI
      onClickComment={onClickComment}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
    />
  );
}
