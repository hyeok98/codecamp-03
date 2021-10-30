import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutBanner from "./ banner/LayoutBanner.container";
import LayoutHrader from "./header/LayoutHrader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutProfilePage from "./profile/LayoutProfile.container";

const Wrapper = styled.div``;

const Body = styled.div``;

const Area = styled.div`
  display: flex;
`;

export default function Layout(props: any) {
  const HIDDEN_MYPAGE = [
    "/mypage/myMarket",
    "/mypage/myPoint",
    "/mypage/myProfile",
  ];
  const SHOW_BANNER = ["/boards/list"];
  const router = useRouter();
  const isHiddenMypages = HIDDEN_MYPAGE.includes(router.pathname);
  const ShowBanner = SHOW_BANNER.includes(router.pathname);

  return (
    <>
      {ShowBanner && (
        <Wrapper>
          <LayoutNavigation />
          <LayoutHrader />
          <LayoutBanner />
          {isHiddenMypages ? (
            <Area>
              <LayoutProfilePage />
              <Body>{props.children}</Body>
            </Area>
          ) : (
            <Body>{props.children}</Body>
          )}
        </Wrapper>
      )}
      {!ShowBanner && (
        <Wrapper>
          <LayoutNavigation />
          {isHiddenMypages ? (
            <Area>
              <LayoutProfilePage />
              <Body>{props.children}</Body>
            </Area>
          ) : (
            <Body>{props.children}</Body>
          )}
        </Wrapper>
      )}
    </>
  );
}
