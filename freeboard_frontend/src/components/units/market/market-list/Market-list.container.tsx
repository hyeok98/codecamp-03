import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import MarketListUI from "./Market-list.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./Market-list.queries";

export default function MarketList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEMS);
  const { data: bestdata } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  function onClickMoveDetail(event) {
    router.push(`/markets/detail/${event.target.id}`);
  }

  function onClickNew() {
    router.push("/markets/new");
  }

  return (
    <MarketListUI
      onClickNew={onClickNew}
      onClickMoveDetail={onClickMoveDetail}
      data={data}
      bestdata={bestdata}
    />
  );
}
