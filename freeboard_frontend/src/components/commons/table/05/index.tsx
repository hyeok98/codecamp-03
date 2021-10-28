import styled from "@emotion/styled";

const BottomDiv = styled.div`
  width: 980px;
  display: flex;

  border-bottom: solid 1px #bdbdbd;
  padding-bottom: 15px;
  padding-top: 5px;
  margin-bottom: 15px;
`;

const DayTable = styled.span`
  font-size: 20px;
  width: 20%;
  text-align: center;
`;

const ProductNameTable = styled.span`
  font-size: 20px;
  width: 41%;
  text-align: center;
`;

const HistoryTable = styled.span`
  font-size: 20px;
  width: 13%;
  text-align: center;
`;

const BalanceTable = styled.span`
  font-size: 20px;
  width: 13%;
  text-align: center;
`;

const SellerTable = styled.span`
  font-size: 20px;
  width: 13%;
  text-align: center;
`;

const TableDiv = styled.div`
  width: 980px;
  border-top: solid 1px black;
  border-bottom: solid 1px #bdbdbd;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;

  margin-bottom: 10px;
`;

const Day = styled.span`
  font-size: 20px;
  width: 20%;
  text-align: center;
`;

const ProductName = styled.span`
  font-size: 20px;
  width: 41%;
  text-align: center;
`;

const History = styled.span`
  font-size: 20px;
  width: 13%;
  text-align: center;
`;

const Balance = styled.span`
  font-size: 20px;
  width: 13%;
  text-align: center;
`;

const Seller = styled.span`
  font-size: 20px;
  width: 13%;
  text-align: center;
`;

export default function Table05(props: any) {
  return (
    <>
      <TableDiv>
        <DayTable>거래일</DayTable>
        <ProductNameTable>상품명</ProductNameTable>
        <HistoryTable>거래내역</HistoryTable>
        <BalanceTable>거래 후 잔액</BalanceTable>
        <SellerTable>판매자</SellerTable>
      </TableDiv>
      {props.data5?.fetchPointTransactionsOfBuying.map(
        (el: any, index: any) => (
          <BottomDiv key={el._id}>
            <Day>{el.createdAt.slice(0, 10)}</Day>
            <ProductName>{el.useditem.name}</ProductName>
            <History>{el.amount}</History>
            <Balance>{el.balance} 당근</Balance>
            <Seller></Seller>
          </BottomDiv>
        )
      )}
    </>
  );
}
