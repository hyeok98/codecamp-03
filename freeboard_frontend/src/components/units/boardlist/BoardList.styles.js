import styled from "@emotion/styled";

export const Wrapper1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Wrapper2 = styled.div`
  width: 1200px;
  /* height: 1000px; */
`;

export const Top = styled.div`
  width: 1200px;
  height: 339px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TitleBoard = styled.div`
  width: 208px;
  height: 42px;
  font-size: 36px;
  padding-top: 30px;
`;

export const TopBest = styled.div`
  width: 1200px;
  height: 257px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  /* border: solid 1px pink; */
`;

export const BestBoard = styled.div`
  width: 282px;
  height: 257px;
  /* border: solid 1px black; */
  border-radius: 30px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const BestImages = styled.div`
  width: 282px;
  height: 120px;
`;

export const BestPhoto = styled.img`
  width: 282px;
  height: 120px;
  border-radius: 30px 30px 0 0;
  /* border: solid 1px black ; */
`;

export const BestContents = styled.div`
  width: 282px;
  height: 137px;
  border-radius: 0 0 30px 30px;
  /* border: solid 1px black ; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BestBox = styled.div`
  width: 250px;
  height: 100px;
  /* border: solid 1px red ; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BestTitle = styled.div`
  width: 250px;
  height: 27px;
  font-size: 18px;
  /* border: solid 1px blue ; */
`;

export const BestBottom = styled.div`
  width: 250px;
  height: 60px;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BestLeft = styled.div`
  width: 95px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeftTop = styled.div`
  width: 75px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftTopImages = styled.div`
  width: 20px;
  height: 20px;
`;

export const LeftName = styled.div`
  font-size: 16px;
`;

export const LeftBottom = styled.div`
  width: 95px;
  height: 18px;
  font-size: 12px;
  color: #828282;
`;

export const BestRight = styled.div`
  width: 29px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BestGood = styled.div`
  width: 20px;
  height: 18px;
`;

export const BestSu = styled.div`
  width: 27px;
  height: 24px;
  font-size: 16px;
`;

export const Search = styled.div`
  width: 1200px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 110px;
  /* border: solid 1px red; */
`;

export const MainSearch = styled.div`
  width: 776px;
  height: 52px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 701px;
  height: 24px;
  font-size: 16px;
  color: black;
  border: none;
  background-color: #f2f2f2;
`;

export const Year = styled.div`
  width: 244px;
  height: 52px;
  font-size: 16px;
  color: #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: solid 1px #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  font-size: 16px;
  background-color: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export const List = styled.div`
  width: 1200px;
  /* height: 583px; */
  margin-top: 80px;
  /* border: solid 1px black; */
  border-top: solid 2px black;
  border-bottom: solid 1px black;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const Column = styled.div`
  width: 20%;
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const Page = styled.span`
  margin: 10px;
  cursor: pointer;
  color: ${(props) => (props.currentPage ? "red" : "black")};
`;

export const PageWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const MyWord = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;
