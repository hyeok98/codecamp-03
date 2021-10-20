import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export default function BoardList() {
  const router = useRouter();

  const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const { data: bestdata } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  function onClickMove() {
    router.push("/boards/new");
  }

  function onClickMoveDetail(event) {
    router.push(`/boards/new2/${event.target.id}`);
  }

  function onClickPage(event) {
    refetch({ search: myKeyword, page: Number(event.target.id) });
    setCurrentPage(Number(event.target.id));
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  function onChangeSearch(event) {
    setMySearch(event.target.value);
  }

  function onClickSearch() {
    refetch({ search: mySearch, page: 1 });
    setMyKeyword(mySearch);
    setCurrentPage(1);
  }

  function onClickBest(event) {
    router.push(`/boards/new2/${event.currentTarget.id}`);
  }

  return (
    <BoardListUI
      data={data}
      onClickMove={onClickMove}
      onClickMoveDetail={onClickMoveDetail}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
      startPage={startPage}
      lastPage={lastPage}
      currentPage={currentPage}
      bestdata={bestdata}
      onClickBest={onClickBest}
    ></BoardListUI>
  );
}
