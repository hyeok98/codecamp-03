import LoginUI from "./Login.presenter";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [MyEmail, setMyEmail] = useState("");
  const [MyPass, setMyPass] = useState("");

  const [MyEmailError, setMyEmailError] = useState("");
  const [MyPassError, setMyPassError] = useState("");

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
    }

    if (MyPass === "") {
      setMyPassError("비밀번호는 필수 입력입니다.");
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
