import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 980px;
  margin-top: 80px;
  margin-left: 100px;
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const MyProduct = styled.span<{ isColor: boolean }>`
  font-size: 18px;
  margin-right: 8px;
  /* color: #828282; */
  color: ${(props) => (props.isColor === true ? "skyblue" : "#828282")};
`;

export const MyPick = styled.span<{ isColor: boolean }>`
  font-size: 18px;
  margin-left: 5px;
  /* color: #828282; */
  color: ${(props) => (props.isColor === false ? "skyblue" : "#828282")};
`;

export const Font1 = styled.span`
  color: #bdbdbd;
  margin-right: 5px;
`;

export const SearchInput = styled.input`
  width: 386px;
  height: 52px;
  background-color: #f2f2f2;
  border: none;
  margin-right: 20px;
  padding-left: 20px;
`;

export const SearchButton = styled.button`
  width: 80px;
  height: 52px;
  background-color: black;
  color: white;
  font-size: 16px;
`;
