import {
  Wrapper,
  Wrapper2,
  Footer,
  FooterLeft,
  FooterRight,
  UpdateIcon,
  DeleteIcon,
  LeftText,
  Photo3,
  QueryTop,
  QueryName,
  QueryContents,
  QueryDate,
  ContentsSpan,
  DateSpan,
  Row,
  Star,
  PasswordInput,
} from "./Comment-list.styles";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./Comment-list.Queries";
import { useState } from "react";
import BoardComment from "../comment-write/Comment-write.container";

export default function BoardCommentListUI(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  async function onClickCommentDelete() {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.number },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }

  function onChangeDeletePassword(event) {
    setMyPassword(event.target.value);
  }

  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickCommentDelete}>
          {/* onCancel={} */}
          <div>비밀번호 입력: </div>
          <PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <Wrapper>
          <Wrapper2>
            <Row key={props.el?._id}>
              <Footer>
                <FooterLeft>
                  <Photo3 src="/images/photo18.png" />
                  <LeftText>
                    <QueryTop>
                      <QueryName>{props.el?.writer}</QueryName>
                      <div>
                        <Star value={props.el?.rating} disabled />
                      </div>
                    </QueryTop>
                    <QueryContents>
                      <ContentsSpan>{props.el?.contents}</ContentsSpan>
                    </QueryContents>
                    <QueryDate>
                      <DateSpan>{props.el?.createdAt.slice(0, 10)}</DateSpan>
                    </QueryDate>
                  </LeftText>
                </FooterLeft>
                <FooterRight>
                  <UpdateIcon
                    src="/images/photo16.png"
                    onClick={onClickUpdate}
                  />
                  <DeleteIcon
                    src="/images/photo17.png"
                    onClick={onClickOpenDeleteModal}
                  />
                </FooterRight>
              </Footer>
            </Row>
          </Wrapper2>
        </Wrapper>
      )}
      {isEdit && (
        <BoardComment isEdit={isEdit} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
