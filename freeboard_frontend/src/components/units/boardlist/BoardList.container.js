import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useQuery } from "@apollo/client";

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);

  function onClickMove() {
    router.push("/boards/new");
  }

  function onClickMoveDetail(event) {
    router.push(`/boards/new2/${event.target.id}`);
  }

  return (
    <BoardListUI
      data={data}
      onClickMove={onClickMove}
      onClickMoveDetail={onClickMoveDetail}
    ></BoardListUI>
  );
}
