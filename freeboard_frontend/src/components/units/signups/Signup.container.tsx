import SignupUI from "./Signup.presenter";
import { useRouter } from "next/dist/client/router";

export default function Signup() {
  const router = useRouter();

  function onClickBack() {
    router.push("/auth/login");
  }

  return <SignupUI onClickBack={onClickBack} />;
}
