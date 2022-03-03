import { WarningOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(WarningOutlined)`
  font-size: large;
  color: blue;
`;

export default function LibrayIconPage() {
  return (
    <div>
      <MyIcon />
    </div>
  );
}
