import LandingMainUI from "./Main-presenter";
import { useRouter } from "next/dist/client/router";
import { FETCH_USER_LOGGED_IN } from "./Main-query";
// import { useContext } from "react";
// import { GlobalContext } from "../../../../pages/_app";
import { useQuery } from "@apollo/client";

export default function LandingMain() {
  const router = useRouter();

  // const { setUserInfo, userInfo } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  function onClickHome() {
    router.push("/boards/list");
  }

  function onClickLogin() {
    router.push("/auth/login");
  }

  function onClickLogout() {
    localStorage.clear();
    alert("로그아웃이 되었습니다.");
    location.reload();
  }

  return (
    <LandingMainUI
      onClickHome={onClickHome}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
      data={data}
    />
  );
}
