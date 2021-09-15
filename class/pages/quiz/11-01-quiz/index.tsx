import { Rate } from "antd";
import { useState } from "react";

const desc = ["1점", "2점", "3점", "4점", "5점"];

export default function LibrayStarPage() {
  const [value, setValue] = useState(3);

  //   const aaa = 3;

  const handleChange = (value) => {
    // console.log(aaa);
    setValue(value);
    alert(value + "점");
  };

  return (
    <span>
      {/* <Rate onChange={handleChange} value={value} /> */}
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      <br />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
    </span>
  );
}
