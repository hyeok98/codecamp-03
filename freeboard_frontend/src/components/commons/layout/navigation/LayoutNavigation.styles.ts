import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100px;
  margin-bottom: 19px;
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
  font-family: "SunFlowerB";
`;

export const Font = styled.span`
  font-size: 40px;
  margin-top: 15px;
  cursor: pointer;
  :hover {
    color: blue;
  }
  font-family: "SunFlowerB";
`;

export const Font2 = styled.span`
  font-size: 20px;
  margin-top: 15px;
  color: black;
  margin-left: 30px;
  margin-right: 30px;
`;

export const RightDiv = styled.div`
  margin-left: 350px;
  display: flex;
  align-items: center;
`;

export const Login = styled.span`
  font-size: 40px;

  margin-right: 20px;
  cursor: pointer;

  :hover {
    color: blue;
  }
  font-family: "Dongle";
`;

export const Signup = styled.span`
  border-radius: 10px;
  font-size: 40px;
  cursor: pointer;

  :hover {
    color: blue;
  }
  font-family: "Dongle";
`;

export const MyIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 30px;
`;

export const MyName = styled.span`
  font-size: 40px;
  margin-right: 20px;
  cursor: pointer;
  font-family: "Dongle";
`;
