import { useRouter } from "next/dist/client/router";
import MarketListUI from "./Market-list.presenter";

export default function MarketList() {
  const router = useRouter();

  function aa() {
    router.push("/markets/new");
  }

  return <MarketListUI aa={aa} />;
}
