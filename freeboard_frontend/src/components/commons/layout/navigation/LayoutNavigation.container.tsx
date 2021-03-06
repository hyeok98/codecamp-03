import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { useRouter } from "next/dist/client/router";
import { FETCH_USER_LOGGED_IN } from "./LayoutNavigation.query";
import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";

export default function LayoutNavigation() {
  const router = useRouter();

  // const { setUserInfo, userInfo, accessToken } = useContext(GlobalContext);
  const { setUserInfo, userInfo } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (userInfo.email) return;
    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
    });
  }, []);

  function onClickMap() {
    router.push("/");
  }

  function onClickBoard() {
    router.push("/boards/list");
  }

  function onClickMarket() {
    router.push("/markets/list");
  }

  function onClickMyPage() {
    router.push("/mypage/myMarket");
  }

  function onClickLoginPage() {
    router.push("/auth/login");
  }

  function onClickSignupPage() {
    router.push("/auth/signup");
  }

  function onClickLogout() {
    localStorage.clear();
    alert("로그아웃이 되었습니다");
    location.reload();
  }

  return (
    <LayoutNavigationUI
      onClickMap={onClickMap}
      onClickBoard={onClickBoard}
      onClickMarket={onClickMarket}
      onClickMyPage={onClickMyPage}
      onClickLoginPage={onClickLoginPage}
      onClickSignupPage={onClickSignupPage}
      onClickLogout={onClickLogout}
      data={data}
    />
  );
}
