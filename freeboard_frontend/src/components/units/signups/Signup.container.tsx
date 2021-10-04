import SignupUI from "./Signup.presenter";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { CREATE_USER } from "./Signup.queries";
import { useMutation } from "@apollo/client";

export default function Signup() {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Pass1, setPass1] = useState("");
  const [Pass2, setPass2] = useState("");

  const [EmailError, setEmailError] = useState("");
  const [NameError, setNameError] = useState("");
  const [Pass1Error, setPass1Error] = useState("");
  const [Pass2Error, setPass2Error] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  }

  function onChangeName(event) {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
  }

  function onChangePass1(event) {
    setPass1(event.target.value);
    if (event.target.value !== "") {
      setPass1Error("");
    }
  }

  function onChangePass2(event) {
    setPass2(event.target.value);
    if (event.target.value !== "") {
      setPass2Error("");
    }
  }

  async function onClickSignup() {
    // if (Email === "") {
    //   setEmailError("이메일은 필수입력입니다.");
    // }

    if (Name === "") {
      setNameError("이름은 필수입력입니다.");
    }

    if (Pass1 === "") {
      setPass1Error("비밀번호는 필수입력입니다.");
    }

    if (Pass2 === "") {
      setPass2Error("비밀번호 확인은 필수입력입니다.");
    }

    if (Pass1 !== Pass2) {
      alert("비밀번호가 같지않습니다.");
      return;
    }

    if (!/^\w+@\w+\.\w+/.test(Email)) {
      setEmailError("이메일을 쓰지않았거나 이메일형식이 아닙니다");
      return;
    }

    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: Email,
            password: Pass1,
            name: Name,
          },
        },
      });
      console.log(result.data.createUser._id);
      alert("회원가입을 축하드립니다");
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  }

  function onClickBack() {
    router.push("/auth/login");
  }

  return (
    <SignupUI
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePass1={onChangePass1}
      onChangePass2={onChangePass2}
      onClickSignup={onClickSignup}
      onClickBack={onClickBack}
      EmailError={EmailError}
      NameError={NameError}
      Pass1Error={Pass1Error}
      Pass2Error={Pass2Error}
    />
  );
}
