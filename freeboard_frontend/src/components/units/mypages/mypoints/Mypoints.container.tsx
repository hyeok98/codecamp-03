import MyPointsUI from "./Mypoints.presenter";
import { useState } from "react";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from "./Mypoints.queries";
import { useQuery } from "@apollo/client";

export default function MyPoints() {
  const [isChange, setIsChange] = useState(true);
  const [isChanged, setIsChanged] = useState(false);

  const { data: data3 } = useQuery(FETCH_POINT_TRANSACTIONS);

  const { data: data4 } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  const { data: data5 } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING);

  const { data: data6 } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING);

  function onClickAllHistory() {
    setIsChange(true);
    setIsChanged(false);
  }

  function onClickChargeHistory() {
    setIsChange(false);
    setIsChanged(false);
  }

  function onClickBuyHistory() {
    setIsChange(false);
    setIsChanged(true);
  }

  function onClickSellHistory() {
    setIsChange(true);
    setIsChanged(true);
  }

  return (
    <MyPointsUI
      isChange={isChange}
      isChanged={isChanged}
      onClickAllHistory={onClickAllHistory}
      onClickChargeHistory={onClickChargeHistory}
      onClickBuyHistory={onClickBuyHistory}
      onClickSellHistory={onClickSellHistory}
      data3={data3}
      data4={data4}
      data5={data5}
      data6={data6}
    />
  );
}
