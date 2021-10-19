import MarketCommentListUI from "./Market-comment-list-presenterItem";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketCommentListPresenter(props) {
  // if (!props.data?.fetchUseditemQuestions.length) return <></>;
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditemQuestions.map((el) => (
          <MarketCommentListUI key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </>
  );
}
