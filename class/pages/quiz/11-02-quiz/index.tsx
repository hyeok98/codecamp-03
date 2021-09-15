import { Calendar } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";
const MyCalendar = styled(Calendar)`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
`;
export default function QuizCalendar() {
  const [data, setDate] = useState("");
  function onSelect(value) {
    setDate(value.format("YYYY-MM-DD"));
    console.log(value);
  }
  return (
    <>
      <MyCalendar fullscreen={false} onSelect={onSelect} />
      <div>{data}</div>
    </>
  );
}
