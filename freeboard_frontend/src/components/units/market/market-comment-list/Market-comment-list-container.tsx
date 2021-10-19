import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketCommentListPresenter from "./Market-comment-list-presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./Market-comment-list-queries";

export default function MarketCommentList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.read },
  });

  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  }
  return <MarketCommentListPresenter data={data} onLoadMore={onLoadMore} />;
}
