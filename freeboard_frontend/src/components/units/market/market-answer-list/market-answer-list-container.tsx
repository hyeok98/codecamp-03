import { useQuery } from "@apollo/client";
import MarketAnswerListUIPage from "./market-answer-list-presenter";
import { FETCH_USEDITEM_QUESTIONS_ANSWERS } from "./market-answer-list-queries";
export default function MarketAnswerListPage(props: any) {
  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS_ANSWERS, {
    variables: {
      useditemQuestionId: props.el?._id,
    },
  });

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  }

  return <MarketAnswerListUIPage onLoadMore={onLoadMore} data={data} />;
}
