import {
  Wrapper,
  Image,
  BottomDiv,
  Image2,
  ContentDiv,
  Name,
  Contents,
} from "./market-answer-list-styles";

export default function MarketAnswerListUIPage() {
  return (
    <Wrapper>
      <Image src="/images/photo23.png" />
      <BottomDiv>
        <Image2 src="/images/photo18.png" />
        <ContentDiv>
          <Name>판매자</Name>
          <Contents>얼마까지 원하시나요?????</Contents>
        </ContentDiv>
      </BottomDiv>
    </Wrapper>
  );
}
