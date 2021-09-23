import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { useRouter } from "next/dist/client/router";

export default function LayoutNavigation() {
  const router = useRouter();

  function onClickMap() {
    router.push("/");
  }

  function onClickBoard() {
    router.push("/boards/list");
  }

  function onClickMarket() {
    router.push("/");
  }

  function onClickMyPage() {
    router.push("/");
  }

  return (
    <LayoutNavigationUI
      onClickMap={onClickMap}
      onClickBoard={onClickBoard}
      onClickMarket={onClickMarket}
      onClickMyPage={onClickMyPage}
    />
  );
}
