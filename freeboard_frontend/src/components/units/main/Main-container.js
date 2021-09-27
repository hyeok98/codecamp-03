import CoffeeMainUI from "./Main-presenter";
import { useRouter } from "next/dist/client/router";

export default function CoffeeMain() {
  const router = useRouter();

  function onClickHome() {
    router.push("/boards/list");
  }

  return <CoffeeMainUI onClickHome={onClickHome} />;
}
