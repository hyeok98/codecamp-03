import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import MarketListUI from "./Market-list.presenter";
import { FETCH_USED_ITEMS } from "./Market-list.queries";

export default function MarketList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEMS);

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
    />
  );
}
