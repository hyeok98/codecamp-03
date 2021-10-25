import styled from "@emotion/styled";

const TableDiv = styled.div`
  width: 980px;
  display: flex;

  border-bottom: solid 1px #bdbdbd;
  padding-bottom: 15px;
  padding-top: 5px;
  margin-bottom: 15px;
`;

const Number = styled.span`
  font-size: 20px;
  width: 10%;
  text-align: center;
`;

const ProductName = styled.span`
  font-size: 20px;
  width: 30%;
  text-align: center;
`;

const ProductPrice = styled.span`
  font-size: 20px;
  width: 20%;
  text-align: center;
`;

const Seller = styled.span`
  font-size: 20px;
  width: 20%;
  text-align: center;
`;

const Date = styled.span`
  font-size: 20px;
  width: 20%;
  text-align: center;
`;

export const BottomDiv = styled.div`
  width: 980px;
  border-top: solid 1px black;
  border-bottom: solid 1px #bdbdbd;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;

  margin-bottom: 10px;
`;

const NumberTable = styled.span`
  font-size: 20px;
  width: 10%;
  text-align: center;
`;

const ProductNameTable = styled.span`
  font-size: 20px;
  width: 30%;
  text-align: center;
`;

const ProductPriceTable = styled.span`
  font-size: 20px;
  width: 20%;
  text-align: center;
`;

const SellerTable = styled.span`
  font-size: 20px;
  width: 20%;
  text-align: center;
`;

const DateTable = styled.span`
  font-size: 20px;
  width: 20%;
  text-align: center;
`;

export default function Table02(props) {
  return (
    <>
      <BottomDiv>
        <NumberTable>번호</NumberTable>
        <ProductNameTable>상품명</ProductNameTable>
        <ProductPriceTable>판매가격</ProductPriceTable>
        <SellerTable>판매자</SellerTable>
        <DateTable>날짜</DateTable>
      </BottomDiv>
      {props.data2?.fetchUseditemsIPicked.map((el, index) => (
        <TableDiv key={el._id}>
          <Number>{10 - index}</Number>
          <ProductName>{el.name}</ProductName>
          <ProductPrice>{el.price} 당근</ProductPrice>
          <Seller>{el.seller.name}</Seller>
          <Date>{el.createdAt.slice(0, 10)}</Date>
        </TableDiv>
      ))}
    </>
  );
}
