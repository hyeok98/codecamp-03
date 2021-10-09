import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import MarketReadUI from "./Market-read.presenter";
import { FETCH_USED_ITEM } from "./Market-read.queries";

export default function MarketRead() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.read },
  });

  return <MarketReadUI data={data} />;
}
