import Head from "next/head";
import { Modal } from "antd";
import { useState } from "react";
import styled from "@emotion/styled";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./Payment.query";
import { useMutation, useQuery } from "@apollo/client";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  margin-bottom: 15px;
`;

const Button = styled.button`
  color: skyblue;
  background-color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage(props: any) {
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [inputAmount, setInputAmount] = useState("");

  function onClickPayment() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: `${inputAmount}당근`,
        amount: inputAmount,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
      },
      function (rsp: any) {
        // callback
        if (rsp.success) {
          try {
            createPointTransactionOfLoading({
              variables: {
                impUid: String(rsp.imp_uid),
              },
              update(cache, { data }) {
                cache.modify({
                  fields: {
                    fetchUserLoggedIn: (prev) => {
                      return [data.createPointTransactionOfLoading, prev];
                    },
                  },
                });
              },
            });
          } catch (error) {
            alert(error);
          }

          // mutatiom() => createPointTransactionOfLoading
          // ...,
          // 결제 성공 시 로직,
          // ...
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
        }
      }
    );
  }

  function onChangeAmount(event: any) {
    setInputAmount(event.target.value);
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

      <Modal
        visible={props.isOpen}
        onCancel={() => props.setIsOpen((prev: any) => !prev)}
        onOk={() => props.setIsOpen((prev: any) => !prev)}
      >
        <Wrapper>
          <Top>
            충전금액: <input type="text" onChange={onChangeAmount} />
          </Top>
          <Button onClick={onClickPayment}>당근 충전하기</Button>
        </Wrapper>
      </Modal>
    </>
  );
}
