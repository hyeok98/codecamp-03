import Uploads01UI from "./Uploads01.presenter";
import { checkValidationImage } from "../../../commons/libraries/validations/checkValidationImage";
import { useRef, useState } from "react";
export default function Uploads01(props) {
  const fileRef = useRef();
  const [fileUrl, setFileUrl] = useState("");

  function onClikUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event) {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setFileUrl(data.target?.result);
      props.onChangeFiles(file, props.index);
    };
  }

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={fileUrl}
      onClikUpload={onClikUpload}
      onChangeFile={onChangeFile}
    />
  );
}
