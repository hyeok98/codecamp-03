import styled from "@emotion/styled";

const BottomDiv = styled.div`
  width: 980px;
  display: flex;

  border-bottom: solid 1px #bdbdbd;
  padding-bottom: 15px;
  padding-top: 5px;
  margin-bottom: 15px;
`;

const DateTable = styled.span`
  font-size: 20px;
  width: 25%;
  text-align: center;
`;

const ContentsTable = styled.span`
  font-size: 20px;
  width: 25%;
  text-align: center;
`;

const HistoryTable = styled.span`
  font-size: 20px;
  width: 25%;
  text-align: center;
`;

const BalanceTable = styled.span`
  font-size: 20px;
  width: 25%;
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

const Date = styled.span`
  font-size: 20px;
  width: 25%;
  text-align: center;
`;

const Contents = styled.span`
  font-size: 20px;
  width: 25%;
  text-align: center;
`;

const History = styled.span`
  font-size: 20px;
  width: 25%;
  text-align: center;
`;

const Balance = styled.span`
  font-size: 20px;
  width: 25%;
  text-align: center;
`;

export default function Table03(props: any) {
  return (
    <>
      <TableDiv>
        <DateTable>날짜</DateTable>
        <ContentsTable>내용</ContentsTable>
        <HistoryTable>거래 및 충전 내역</HistoryTable>
        <BalanceTable>잔액</BalanceTable>
      </TableDiv>
      {props.data3?.fetchPointTransactions.map((el: any, index: any) => (
        <BottomDiv key={el._id}>
          <Date>{el.createdAt.slice(0, 10)}</Date>
          <Contents>{el.status}</Contents>
          <History>{el.amount} 당근</History>
          <Balance>{el.balance} 당근</Balance>
        </BottomDiv>
      ))}
    </>
  );
}
