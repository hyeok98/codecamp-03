import {
  Wrapper,
  Image,
  BottomDiv,
  Image2,
  ContentsDiv,
  ContentsLeft,
  Name,
  Contents,
  ImageUpdate,
  ImageDelete,
} from "./market-answer-list-styles";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTIONS_ANSWERS,
} from "./market-answer-list-queries";
import { useMutation } from "@apollo/client";
// import { useRouter } from "next/router";
import MarketAnswerWritePage from "../market-answer-write/market-answer-write-container";
import { useState } from "react";

export default function MarketAnswerListItemUI(props: any) {
  // const router = useRouter();
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );

  const [isAnswerEdit, setIsAnswerEdit] = useState(false);

  function onClickAnswerUpdate() {
    setIsAnswerEdit(true);
  }

  async function onClickAnswerDelete() {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.answerel?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS_ANSWERS,
            variables: { useditemQuestionId: props.answerel?._id },
          },
        ],
      });
      alert("댓글삭제완료");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      {!isAnswerEdit && (
        <Wrapper key={props.answerel?._id}>
          <Image src="/images/photo23.png" />
          <BottomDiv>
            <Image2 src="/images/photo18.png" />
            <ContentsDiv>
              <ContentsLeft>
                <Name>{props.answerel?.user?.name}</Name>
                <Contents>{props.answerel?.contents}</Contents>
              </ContentsLeft>
              <div>
                <ImageUpdate
                  src="/images/photo16.png"
                  onClick={onClickAnswerUpdate}
                />
                <ImageDelete
                  src="/images/photo17.png"
                  onClick={onClickAnswerDelete}
                />
              </div>
            </ContentsDiv>
          </BottomDiv>
        </Wrapper>
      )}
      {isAnswerEdit && (
        <MarketAnswerWritePage
          isAnswerEdit={isAnswerEdit}
          setIsAnswerEdit={setIsAnswerEdit}
          answerel={props.answerel}
        />
      )}
    </>
  );
}
