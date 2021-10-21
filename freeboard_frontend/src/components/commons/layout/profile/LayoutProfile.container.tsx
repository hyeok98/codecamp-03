import { useRouter } from "next/router";
import LayoutProfileUIPage from "./LayoutProfile.presenter";

export default function LayoutProfilePage() {
  const router = useRouter();

  function onClickMarkets() {
    router.push("/mypage/myMarket");
  }

  function onClickPoints() {
    router.push("/mypage/myPoint");
  }

  function onClickProfile() {
    router.push("/mypage/myProfile");
  }

  return (
    <LayoutProfileUIPage
      onClickMarkets={onClickMarkets}
      onClickPoints={onClickPoints}
      onClickProfile={onClickProfile}
    />
  );
}
