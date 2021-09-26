import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardReadUI from "./FreeRead.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./FreeRead.queries";

export default function FreeRead() {
  const router = useRouter();

  const [aaa] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.number },
  });

  function onClickList() {
    router.push(`/boards/list`);
  }

  function onClickMoveEdit() {
    router.push(`/boards/new2/${router.query.number}/edit`);
  }

  async function onClickDelete() {
    await aaa({
      variables: { boardId: router.query.number },
    });
    alert("게시물이 삭제되었습니다.");
    router.push(`/boards/list`);
  }

  async function onClickLike() {
    await likeBoard({
      variables: { boardId: router.query.number },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.number } },
      ],
    });
    console.log(data);
  }

  async function onClickDisLike() {
    await dislikeBoard({
      variables: { boardId: router.query.number },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.number } },
      ],
    });
  }

  return (
    <>
      <BoardReadUI
        // router = {router}
        data={data}
        onClickList={onClickList}
        onClickMoveEdit={onClickMoveEdit}
        onClickDelete={onClickDelete}
        onClickLike={onClickLike}
        onClickDisLike={onClickDisLike}
      />
    </>
  );
}
