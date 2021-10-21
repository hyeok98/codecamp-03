import MyMarketUI from "./Mymarkets.presenter";
import {
  FETCH_USEDITEM_ISOLD,
  FETCH_USEDITEM_IPICKED,
} from "./Mymarkets.queries";
import { useQuery } from "@apollo/client";

export default function MyMarket() {
  const { data } = useQuery(FETCH_USEDITEM_ISOLD, {
    variables: { page: 1 },
  });

  const { data: data2 } = useQuery(FETCH_USEDITEM_IPICKED, {
    variables: { search: "" },
  });

  return <MyMarketUI data={data} data2={data2} />;
}
