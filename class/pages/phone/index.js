import Head from "next/head";
import styled from "@emotion/styled";

const Button = styled.button`
  width: 200px;
  height: 200px;
`;

export default function PhonePage() {
  function onClickPhone() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000

    IMP.certification(
      {
        // param
        merchant_uid: "ORD20180131-0000011", // 주문 번호
        m_redirect_url: "https://www.naver.com", // 모바일환경에서 popup:false(기본값) 인 경우 필수, 예: https://www.myservice.com/payments/complete/mobile
        popup: true, // PC환경에서는 popup 파라메터가 무시되고 항상 true 로 적용됨
      },
      function (rsp) {
        // callback
        if (rsp.success) {
          console.log(rsp);
          // 인증 성공 시 로직,
        } else {
          // 인증 실패 시 로직,
        }
      }
    );
  }
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <div>
        <Button onClick={onClickPhone}>확인</Button>
      </div>
    </>
  );
}
