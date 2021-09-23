import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  width: 100%;
  height: 60px;
`;

export const Font = styled.span`
  font-size: 20px;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Font2 = styled.span`
  font-size: 20px;
  color: blue;
  margin-left: 30px;
  margin-right: 30px;
`;
