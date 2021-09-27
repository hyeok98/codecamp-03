import styled from "@emotion/styled";
import LayoutBanner from "./ banner/LayoutBanner.container";
import LayoutHrader from "./header/LayoutHrader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

const Wrapper = styled.div``;

const Body = styled.div``;

export default function Layout(props) {
  return (
    <Wrapper>
      <LayoutNavigation />
      <LayoutHrader />
      <LayoutBanner />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
