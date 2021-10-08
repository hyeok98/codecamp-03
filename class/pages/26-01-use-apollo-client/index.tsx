import { useForm } from "react-hook-form";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function UseApolloClientPage() {
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);

  const { handleSubmit, register } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();

  async function onClickLogin(data) {
    // 로그인 처리하기!! data는 이름이바껴도된다
    const result = await loginUser({
      variables: {
        email: data.myEmail,
        password: data.myPassword,
      },
    });
    const accessToken = result.data?.loginUser?.accessToken;

    console.log(result, accessToken);
    // const result = await axios.get(`koreajson.com`); client.query와 비교해보기
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const UserInfo = resultUserInfo.data.fetchUserLoggedIn;

    setAccessToken(accessToken);
    setUserInfo(UserInfo);
  }

  return (
    <>
      {userInfo.email ? (
        `${userInfo.name}님 환영합니다.`
      ) : (
        <form onSubmit={handleSubmit(onClickLogin)}>
          이메일: <input type="text" {...register("myEmail")} />
          <br />
          비밀번호: <input type="text" {...register("myPassword")} />
          <br />
          <button>로그인하기</button>
          {/* <button type="button" onClick={myOnClickFunction}>버튼</button> */}
        </form>
      )}
    </>
  );
}
