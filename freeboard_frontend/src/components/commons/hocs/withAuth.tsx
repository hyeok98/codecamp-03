import { useRouter } from "next/dist/client/router";
// import { useContext, useEffect } from "react";
// import { GlobalContext } from "../../../../pages/_app";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   if (!accessToken) {
  //     alert("로그인한 사람만 입장 가능합니다.");
  //     router.push("/auth/login");
  //   }
  // }, []);

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인이 필요합니다");
      router.push("/auth/login");
    }
  }, []);

  return <Component {...props} />;
};
