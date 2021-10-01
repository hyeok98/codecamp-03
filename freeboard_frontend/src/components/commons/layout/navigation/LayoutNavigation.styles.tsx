import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
`;

export const MainImg = styled.img`
  width: 250px;
`;

export const Font1 = styled.span`
  font-size: 40px;
  margin-left: 100px;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Font = styled.span`
  font-size: 40px;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Font2 = styled.span`
  font-size: 20px;
  color: black;
  margin-left: 30px;
  margin-right: 30px;
`;
