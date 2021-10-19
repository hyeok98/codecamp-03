import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import MarketListUI from "./Market-list.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./Market-list.queries";

export default function MarketList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const { data: bestdata } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  function onClickMoveDetail(event) {
    router.push(`/markets/detail/${event.target.id}`);
  }

  function onClickNew() {
    router.push("/markets/new");
  }

  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  }

  return (
    <MarketListUI
      onClickNew={onClickNew}
      onClickMoveDetail={onClickMoveDetail}
      data={data}
      bestdata={bestdata}
      onLoadMore={onLoadMore}
    />
  );
}
