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

export default function Table03(props) {
  return (
    <>
      <TableDiv>
        <DateTable>충전일</DateTable>
        <ContentsTable>결제 ID</ContentsTable>
        <HistoryTable>충전내역</HistoryTable>
        <BalanceTable>충전 후 잔액</BalanceTable>
      </TableDiv>

      <BottomDiv>
        <Date>2020.09.28</Date>
        <Contents>afsafs</Contents>
        <History>70000</History>
        <Balance>1568</Balance>
      </BottomDiv>
    </>
  );
}
