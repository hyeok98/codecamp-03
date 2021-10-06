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

export const Main = styled.div`
  margin-left: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainImg = styled.img`
  width: 250px;
`;

export const Font1 = styled.span`
  font-size: 40px;
  margin-left: 100px;
  margin-top: 15px;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Font = styled.span`
  font-size: 40px;
  margin-top: 15px;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Font2 = styled.span`
  font-size: 20px;
  margin-top: 15px;
  color: black;
  margin-left: 30px;
  margin-right: 30px;
`;

export const RightDiv = styled.div`
  /* border: solid 1px black; */
  margin-left: 400px;
`;

export const Login = styled.span`
  /* border: solid 1px black; */
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Signup = styled.span`
  border: solid 10px yellow;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  background-color: yellow;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const MyIcon = styled.img`
  width: 40px;
  margin-right: 30px;
`;

export const MyName = styled.span`
  font-size: 20px;
  margin-top: 20px;
`;
