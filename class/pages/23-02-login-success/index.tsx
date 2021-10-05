import { useQuery, gql } from "@apollo/client";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../_app";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LoginSuccessPage() {
  const { setUserInfo, userInfo } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (userInfo.email) return;
    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      pictuer: data?.fetchUserLoggedIn.picture,
    });
  }, [data]);

  return (
    <>
      <div>로그인에 성공하셨습니다!</div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
    </>
  );
}
