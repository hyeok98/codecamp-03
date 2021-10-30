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
  const [imageColor1, setImageColor1] = useState(true);
  const [imageColor2, setImageColor2] = useState(false);
  const [imageColor3, setImageColor3] = useState(false);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  function onClickMarkets() {
    router.push("/mypage/myMarket");
    setImageColor1(true);
    setImageColor2(false);
    setImageColor3(false);
  }

  function onClickPoints() {
    router.push("/mypage/myPoint");
    setImageColor1(false);
    setImageColor2(true);
    setImageColor3(false);
  }

  function onClickProfile() {
    router.push("/mypage/myProfile");
    setImageColor1(false);
    setImageColor2(false);
    setImageColor3(true);
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
      imageColor1={imageColor1}
      imageColor2={imageColor2}
      imageColor3={imageColor3}
    />
  );
}
