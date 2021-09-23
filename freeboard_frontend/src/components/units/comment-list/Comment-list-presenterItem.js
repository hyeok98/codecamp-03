import {
  Wrapper,
  Wrapper2,
  Footer,
  FooterLeft,
  FooterRight,
  Photo2,
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
} from "./Comment-list.styles";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./Comment-list.Queries";

export default function BoardCommentListUI(props) {
  const router = useRouter();

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  async function onClickCommentDelete() {
    const pw = prompt("비밀번호를 입력해 주세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: pw,
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
      console.log(error);
    }
  }

  return (
    <>
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
                <Photo2 src="/images/photo16.png" />
                <Photo2
                  src="/images/photo17.png"
                  onClick={onClickCommentDelete}
                />
              </FooterRight>
            </Footer>
          </Row>
        </Wrapper2>
      </Wrapper>
    </>
  );
}
