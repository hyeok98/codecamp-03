import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper2 = styled.div`
  width: 1200px;
  margin-top: 40px;
`;

export const Top = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Photo1 = styled.img`
  width: 20px;
  height: 20px;
`;

export const TopFont = styled.div`
  font-size: 18px;
`;

export const TopInput = styled.div`
  width: 540px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Input1 = styled.input`
  width: 180px;
  height: 52px;
  border: solid 1px #bdbdbd;
  font-size: 16px;
  padding-left: 15px;
`;

export const MainInput = styled.div`
  width: 1200px;
  height: 161px;
  margin-top: 30px;
  border: solid 1px #bdbdbd;
`;

export const InputContents = styled.input`
  width: 1100px;
  height: 108px;
  font-size: 16px;
  /* padding-left: 15px;
  padding-top: 15px; */
  border: none;
  padding-bottom: 40px;
  padding-left: 20px;
`;

export const MainBottom = styled.div`
  width: 1200px;
  height: 52px;
  border-top: solid 1px #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainNumber = styled.span`
  font-size: 16px;
  color: #bdbdbd;
  margin-left: 10px;
`;

export const MainButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const Star = styled(Rate)``;
