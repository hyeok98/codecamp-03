import LoginUI from "./Login.presenter";
import { useRouter } from "next/dist/client/router";

export default function Login() {
  const router = useRouter();

  function onClickSignup() {
    router.push("/auth/signup");
  }

  return <LoginUI onClickSignup={onClickSignup} />;
}
