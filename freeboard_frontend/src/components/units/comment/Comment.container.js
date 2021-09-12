import { useState } from "react";
import BoardCommentUI from "./Comment.presenter";

const [myWrite, setMyWrite] = useState("");
const [myPass, setMyPass] = useState("");
const [myContents, setMyContents] = useState("");

function onChangeWriter(event) {
  setMyWrite(event.target.value);
}

function onChangePassword(event) {
  setMyPass(event.target.value);
}

function onChangeContents(event) {
  setMyContents(event.target.value);
}

function onClickComment() {}

export default function BoardComment() {
  return (
    <BoardCommentUI
      onClickComment={onClickComment}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
    />
  );
}
