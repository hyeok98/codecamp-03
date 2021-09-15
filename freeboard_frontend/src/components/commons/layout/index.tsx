import styled from "@emotion/styled";

import LayoutBanner from "./ banner/LayoutBanner.container";

const Wrapper = styled.div``;

const Body = styled.div``;

export default function Layout(props) {
  return (
    <Wrapper>
      <LayoutBanner />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
