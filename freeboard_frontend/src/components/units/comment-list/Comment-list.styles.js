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
  height: 130px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Footer = styled.div`
  width: 1200px;
  height: 120px;
  border-bottom: solid 1px #bdbdbd;
  margin-top: 40px;
  margin-bottom: 150px;
  display: flex;
  justify-content: space-between;
`;

export const FooterLeft = styled.div`
  width: 800px;
  height: 100px;
  display: flex;
`;

export const FooterRight = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

export const UpdateIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const LeftText = styled.div`
  width: 600px;
  height: 100px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Photo3 = styled.img`
  width: 40px;
  height: 40px;
`;

export const QueryTop = styled.div`
  width: auto;
  height: 28px;
  display: flex;
  align-items: center;
`;

export const QueryName = styled.div`
  font-size: 16px;
  margin-right: 5px;
  width: auto;
`;

export const QueryContents = styled.div`
  margin-bottom: 25px;
  width: 1000px;
`;

export const QueryDate = styled.div``;

export const ContentsSpan = styled.span`
  font-size: 16px;
  color: #4f4f4f;
`;
export const DateSpan = styled.span`
  font-size: 12px;
  color: #bdbdbd;
`;

export const Row = styled.div``;

export const Star = styled(Rate)`
  padding-left: 20px;
`;
