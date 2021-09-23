import { useState } from "react";
import BoardCommentUI from "./Comment-write.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  // UPDATE_BOARD_COMMENT,
} from "./Comment-write.Queries";
import { FETCH_BOARD_COMMENTS } from "../comment-list/Comment-list.Queries";

export default function BoardComment(props) {
  const router = useRouter();
  const [myWriter, setMyWriter] = useState("");
  const [myPass, setMyPass] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myStar, setMyStar] = useState(0);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  // const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  function onChangeWriter(event) {
    setMyWriter(event.target.value);
  }

  function onChangePassword(event) {
    setMyPass(event.target.value);
  }

  function onChangeContents(event) {
    setMyContents(event.target.value);
  }

  function onChangeStar(value) {
    setMyStar(value);
  }

  async function onClickComment() {
    await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer: myWriter,
          password: myPass,
          contents: myContents,
          rating: myStar,
        },
        boardId: String(router.query.number),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.number },
        },
      ],
    });
    alert("댓글을 등록합니다~");
    console.log(router.query.number);
  }

  //
  // async function onClickUpdate(event) {
  //   if (!myContents) {
  //     alert("내용이 수정되지 않았습니다.");
  //     return;
  //   }
  //   if (!myPass) {
  //     alert("비밀번호가 입력되지 않았습니다.");
  //     return;
  //   }

  //   try {
  //     await updateBoardComment({
  //       variables: {
  //         updateBoardCommentInput: { contents: myContents },
  //         password: myPass,
  //         boardCommentId: event.target.id,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_BOARD_COMMENTS,
  //           variables: { boardId: router.query.boardId },
  //         },
  //       ],
  //     });
  //     props.setIsEdit?.(false);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  return (
    <BoardCommentUI
      onClickComment={onClickComment}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeStar={onChangeStar}
      // onClickUpdate={onClickUpdate}
    />
  );
}
