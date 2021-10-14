import { useRouter } from "next/router";

export default function KakaoMapRoutingPage() {
  const router = useRouter();

  function onClickKakaoMap() {
    router.push("/29-03-kakao-map-routed");
  }

  return (
    <>
      <button onClick={onClickKakaoMap}>카카오맵페이지이동</button>
    </>
  );
}
