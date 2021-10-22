import MyMarketUI from "./Mymarkets.presenter";
import {
  FETCH_USEDITEM_ISOLD,
  FETCH_USEDITEM_IPICKED,
} from "./Mymarkets.queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export default function MyMarket() {
  const [isMarket, setIsMarket] = useState(true);

  const { data } = useQuery(FETCH_USEDITEM_ISOLD, {
    variables: { page: 1 },
  });

  const { data: data2 } = useQuery(FETCH_USEDITEM_IPICKED, {
    variables: { search: "" },
  });

  function onClickMarket() {
    setIsMarket(true);
  }

  function onClickMyPick() {
    setIsMarket(false);
  }

  return (
    <MyMarketUI
      data={data}
      data2={data2}
      onClickMarket={onClickMarket}
      onClickMyPick={onClickMyPick}
      isMarket={isMarket}
    />
  );
}
