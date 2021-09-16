import styled from "@emotion/styled";
// import { useRouter } from "next/router";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./ banner/LayoutBanner.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutSidebar from "./sidebar/LayoutSidebar.container";
// import LayoutBody from "./body/LayoutBody.container";
const Wrapper = styled.div``;
// const Header = styled.div`
//   background-color: red;
//   height: 200px;
// `;

const Body = styled.div`
  width: 700px;
  /* height: 400px; */
`;

const Area = styled.div`
  display: flex;
`;

// const HIDDEN_FOOTER = ["/13-01-layout-hidden"];
// const OnePage = ["/quiz/13-01-layout/one"];
export default function Layout(props) {
  // const router = useRouter();
  // const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);

  return (
    <Wrapper>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Area>
        <LayoutSidebar />
        <Body>{props.children}</Body>
      </Area>
      <LayoutFooter />
    </Wrapper>

    // <Wrapper>
    //   {/* <Header>여기는 헤더 영역입니다.</Header> */}
    //   <LayoutHeader />
    //   <SidebarWrapper>
    //     <SideBar>여기는 사이드바영역입니다.</SideBar>
    //     <Body>{props.children}</Body>
    //   </SidebarWrapper>
    //   {!isHiddenFooter && <LayoutFooter />}
    //   {/* <Footer>여기는 풋터 영역입니다.</Footer> */}
    // </Wrapper>
  );
}
