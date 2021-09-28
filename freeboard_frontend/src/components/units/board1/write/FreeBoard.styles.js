import styled from "@emotion/styled";

export const Wrapper1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  border: solid 1px black;
  width: 1200px;
  height: 1715px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;
export const Title = styled.h1`
  margin-top: 50px;
`;

export const IdInput = styled.div`
  width: 996px;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
`;

export const TextInput = styled.input`
  width: 486px;
  height: 52px;
  margin-top: 10px;
`;

export const Header = styled.div`
  width: 996px;
  height: 120px;
  display: flex;
  flex-direction: column;
`;
export const InputText = styled.input`
  width: 996px;
  height: 52px;
  border: solid 1px black;
  margin-top: 10px;
`;

export const Main = styled.div`
  width: 996px;
  height: 530px;
  display: flex;
  flex-direction: column;
`;

export const MainInput = styled.textarea`
  width: 996px;
  height: 480px;
  border: solid 1px black;
`;

export const Address = styled.div`
  width: 996px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddressBox = styled.div`
  width: 210px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AddressInput = styled.input`
  width: 77px;
  height: 52px;
`;

export const AddressButton = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
`;

export const YouTube = styled.div`
  width: 996px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Picture = styled.div`
  width: 996px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PictureDiv = styled.div`
  width: 270px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PictuerButton = styled.div`
  width: 78px;
  height: 78px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bdbdbd;
`;

export const MainSettings = styled.div`
  width: 996px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props) => (props.qqq === true ? "yellow" : "gray")};
  margin-bottom: 50px;
  border: none;
`;

export const MiniTitle = styled.span`
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.div`
  color: red;
`;

export const ImageInput = styled.input`
  display: none;
`;
