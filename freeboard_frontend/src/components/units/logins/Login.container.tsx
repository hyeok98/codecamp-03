import LoginUI from "./Login.presenter";
import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import { LOGIN_USER } from "./Login.queries";
import { useMutation } from "@apollo/client";
import { GlobalContext } from "../../../../pages/_app";

export default function Login() {
  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER);

  const [MyEmail, setMyEmail] = useState("");
  const [MyPass, setMyPass] = useState("");

  const [MyEmailError, setMyEmailError] = useState("");
  const [MyPassError, setMyPassError] = useState("");
  const { setAccessToken } = useContext(GlobalContext);

  function onChangeMyEmail(event) {
    setMyEmail(event.target.value);
    if (event.target.value !== "") {
      setMyEmailError("");
    }
  }

  function onChangeMyPass(event) {
    setMyPass(event.target.value);
    if (event.target.value !== "") {
      setMyPassError("");
    }
  }

  async function onClickLogin() {
    if (MyEmail === "") {
      setMyEmailError("이메일은 필수 입력입니다.");
      return;
    }

    if (MyPass === "") {
      setMyPassError("비밀번호는 필수 입력입니다.");
      return;
    }
    try {
      const result = await loginUser({
        variables: {
          email: MyEmail,
          password: MyPass,
        },
      });
      console.log(result.data?.loginUser.accessToken);
      setAccessToken(result.data?.loginUser.accessToken);
      localStorage.setItem("accessToken", result.data.loginUser.accessToken);
      router.push("/boards/list");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  function onClickSignup() {
    router.push("/auth/signup");
  }

  function onClickBack() {
    router.push("/");
  }

  return (
    <LoginUI
      onClickLogin={onClickLogin}
      onClickSignup={onClickSignup}
      onClickBack={onClickBack}
      onChangeMyEmail={onChangeMyEmail}
      onChangeMyPass={onChangeMyPass}
      MyEmailError={MyEmailError}
      MyPassError={MyPassError}
    />
  );
}
