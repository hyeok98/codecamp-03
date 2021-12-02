import styled from "@emotion/styled";

interface IProps {
  isValid: boolean;
}

const MyButton = styled.button`
  background-color: ${(props: IProps) => (props.isValid ? "#ffd600" : "")};
  width: 179px;
  height: 52px;
  border: none;
  font-size: 17px;
  margin-bottom: 80px;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export default function Button01(props: any) {
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
  );
}
