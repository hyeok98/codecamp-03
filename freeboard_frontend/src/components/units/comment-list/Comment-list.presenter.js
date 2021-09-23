import BoardCommentListUI from "./Comment-list-presenterItem";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentPresenter(props) {
  if (!props.data?.fetchBoardComments.length) return <></>;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListUI key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
