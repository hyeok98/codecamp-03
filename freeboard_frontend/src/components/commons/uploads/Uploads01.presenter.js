import { PictuerButton, ImageInput, UploadImage } from "./Uploads01.styles";

export default function Uploads01UI(props) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage onClick={props.onClickUpload} src={props.fileUrl} />
      ) : (
        <PictuerButton onClick={props.onClikUpload}>
          <span>+</span>
          <span>Upload</span>
        </PictuerButton>
      )}
      <ImageInput
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeFile}
      />
    </>
  );
}
