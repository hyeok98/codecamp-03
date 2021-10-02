import LandingMainUI from "./Main-presenter";
import { useRouter } from "next/dist/client/router";

export default function LandingMain() {
  const router = useRouter();

  function onClickHome() {
    router.push("/boards/list");
  }

  function onClickLogin() {
    router.push("/auth/login");
  }

  return (
    <LandingMainUI onClickHome={onClickHome} onClickLogin={onClickLogin} />
  );
}
