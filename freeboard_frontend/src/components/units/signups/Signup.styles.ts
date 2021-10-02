import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fbf7f2;
`;

export const HeaderImgDiv = styled.div`
  margin-left: 200px;
  /* margin-top: 100px; */
`;

export const HeaderImg = styled.img`
  width: 300px;
  margin-top: 100px;
`;

export const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* border: solid 1px black; */
  /* margin-top: 100px; */
`;

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignupText = styled.span`
  font-size: 40px;
  margin-top: 200px;
`;

export const InputDiv = styled.div`
  margin-top: 20px;
`;

export const InputText = styled.div`
  font-size: 20px;
`;

export const Input = styled.input`
  width: 384px;
  height: 64px;
  border-radius: 16px;
  font-size: 16px;
  padding-left: 10px;
  background: transparent;
`;

export const Error = styled.div`
  font-size: 14px;
  color: red;
  height: 22px;
  margin-top: 2px;
  padding-left: 10px;
`;

export const Button = styled.button`
  width: 384px;
  height: 64px;
  border-radius: 16px;
  font-size: 16px;
  margin-top: 50px;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const SignImg = styled.img`
  width: 400px;
`;
