import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./FreeBoard.queries";
import FreeBoardUI from "./FreeBoard.presenter";

export default function FreeBoard(props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const fileRef = useRef();

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [imageUrl, setImageUrl] = useState("");

  const [qqq, setQqq] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [nameError, setNameError] = useState("");
  const [passError, setPassError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  function onChangeName(event) {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }

    if (
      event.target.value !== "" &&
      pass !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setQqq(true);
    } else {
      setQqq(false);
    }
  }

  function onChangePass(event) {
    setPass(event.target.value);
    if (event.target.value !== "") {
      setPassError("");
    }

    if (
      name !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setQqq(true);
    } else {
      setQqq(false);
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (
      name !== "" &&
      pass !== "" &&
      event.target.value !== "" &&
      contents !== ""
    ) {
      setQqq(true);
    } else {
      setQqq(false);
    }
  }

  function onChangeContents(event) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    if (
      name !== "" &&
      pass !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setQqq(true);
    } else {
      setQqq(false);
    }
  }

  function onChangeYoutubeUrl(event) {
    setYoutubeUrl(event.target.value);
  }

  function onChangeAddressDetail(event) {
    setAddressDetail(event.target.value);
  }

  function onClickAddressSearch() {
    setIsOpen(true);
  }

  function onCompleteAddressSearch(data) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  }

  async function onChangeFile(event) {
    const myFile = event.target.files[0];
    console.log(myFile);

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setImageUrl(result.data.uploadFile.url);
  }

  function onClikDiv() {
    fileRef.current?.click();
  }

  async function onClickSignup() {
    if (name === "") {
      setNameError("이름을 작성해주세요.");
    }

    if (pass === "") {
      setPassError("비밀번호를 작성해주세요.");
    }

    if (title === "") {
      setTitleError("제목을 작성해주세요.");
    }

    if (contents === "") {
      setContentsError("내용을 작성해주세요.");
    }

    if (name !== "" && pass !== "" && title !== "" && contents !== "") {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: name,
            password: pass,
            title: title,
            contents: contents,
            youtubeUrl: youtubeUrl,
            images: [imageUrl],
            boardAddress: {
              zipcode: zipcode,
              address: address,
              addressDetail: addressDetail,
            },
          },
        },
      });
      console.log(result.data.createBoard._id);

      alert("게시물을 등록합니다");
      router.push(`/boards/new2/${result.data.createBoard._id}`);
    }
  }

  async function onClickEdit() {
    const result = await updateBoard({
      variables: {
        boardId: router.query.number,
        password: pass,
        updateBoardInput: {
          title: title,
          contents: contents,
          youtubeUrl: youtubeUrl,
        },
      },
    });
    router.push(`/boards/new2/${result.data.updateBoard._id}`);
  }

  return (
    <>
      <FreeBoardUI
        isOpen={isOpen}
        onChangeName={onChangeName}
        onChangePass={onChangePass}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onChangeAddressDetail={onChangeAddressDetail}
        onClickAddressSearch={onClickAddressSearch}
        onCompleteAddressSearch={onCompleteAddressSearch}
        onClickSignup={onClickSignup}
        onChangeYoutubeUrl={onChangeYoutubeUrl}
        onClikDiv={onClikDiv}
        onChangeFile={onChangeFile}
        fileRef={fileRef}
        nameError={nameError}
        passError={passError}
        titleError={titleError}
        contentsError={contentsError}
        qqq={qqq}
        onClickEdit={onClickEdit}
        isEdit={props.isEdit}
        data={props.data}
        address={address}
        zipcode={zipcode}
        imageUrl={imageUrl}
      />
    </>
  );
}
