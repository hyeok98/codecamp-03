import { useRouter } from "next/router";
import LayoutProfileUIPage from "./LayoutProfile.presenter";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        _id
        amount
      }
      picture
    }
  }
`;

export default function LayoutProfilePage() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  function onClickMarkets() {
    router.push("/mypage/myMarket");
  }

  function onClickPoints() {
    router.push("/mypage/myPoint");
  }

  function onClickProfile() {
    router.push("/mypage/myProfile");
  }

  function onClickCharge() {
    setIsOpen((prev) => !prev);
  }

  return (
    <LayoutProfileUIPage
      onClickMarkets={onClickMarkets}
      onClickPoints={onClickPoints}
      onClickProfile={onClickProfile}
      data={data}
      onClickCharge={onClickCharge}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
}
