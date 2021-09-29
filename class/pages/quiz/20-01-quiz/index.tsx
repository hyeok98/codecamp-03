import { useRef, useState } from "react";
import { useMutation, gql } from "@apollo/client";
// import { fileValidation } from "../../../src/commons/libraries/validation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPreviewQuiz() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const fileRef = useRef<HTMLInputElement>();

  const [myWrite, setMyWrite] = useState("");
  const [myPass, setMyPass] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [myFile, setMyFile] = useState("");

  function onChangeFile(event) {
    const file = event.target.files[0];

    // if (!fileValidation(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); //readAsDataURL  스터리지에 없고 내컴퓨터에만 사용되는 임시 url?
    fileReader.onload = (data) => {
      setImageUrl(data.target.result);
      setMyFile(file);
      console.log(myFile);
    };
  }

  function onChangeMyWrite(event) {
    setMyWrite(event.target.value);
  }

  function onChangeMyPassword(event) {
    setMyPass(event.target.value);
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);
  }

  function onChangeMyContents(event) {
    setMyContents(event.target.value);
  }

  function onClickGray() {
    fileRef.current?.click();
  }

  async function onClickSubmit() {
    const start = performance.now();
    const result = await Promise.all([
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
    ]);
    const end = performance.now();
    console.log(end - start);

    const urls = result.map((el) => el.data.uploadFile.url);

    createBoard({
      variables: {
        createBoardInput: {
          writer: myWrite,
          password: myPass,
          title: myTitle,
          contents: myContents,
          images: urls,
        },
      },
    });
  }

  return (
    <>
      작성자: <input type="text" onChange={onChangeMyWrite} />
      <br />
      비밀번호: <input type="text" onChange={onChangeMyPassword} />
      <br />
      제목: <input type="text" onChange={onChangeMyTitle} />
      <br />
      내용: <input type="text" onChange={onChangeMyContents} />
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickGray}
      >
        이미지 업로드
      </div>
      <input type="file" ref={fileRef} onChange={onChangeFile} />
      <br />
      <img src={imageUrl} />
      {/* <button onClick={onClickAaa}>이미지 저장하기</button> */}
      <br />
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  );
}
