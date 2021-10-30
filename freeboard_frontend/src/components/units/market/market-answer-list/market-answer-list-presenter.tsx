import MarketAnswerListItemUI from "./market-answer-list-presenteritem";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketAnswerListUIPage(props: any) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchUseditemQuestionAnswers.map((answerel: any) => (
        <MarketAnswerListItemUI key={answerel._id} answerel={answerel} />
      ))}
    </InfiniteScroll>
  );
}
