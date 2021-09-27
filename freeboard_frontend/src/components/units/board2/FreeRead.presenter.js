import {
  Wrapper1,
  Wrapper2,
  Wrapper3,
  Top,
  TopLeft,
  TopRight,
  NmaeData,
  Name,
  Data1,
  Images1,
  Main,
  Title,
  Picture,
  Contents,
  Footer,
  YouTube,
  Like,
  PictureImg,
  LikeDiv,
  LikeCount,
  DisLikeCount,
  Button3,
  Hr,
  DisLikeDiv,
  LikeImg,
  DisLikeImg,
} from "./FreeRead.styles";
import { Tooltip } from "antd";
import ReactPlayer from "react-player";

export default function BoardReadUI(props) {
  return (
    <>
      <Wrapper1>
        <Wrapper2>
          <Top>
            <TopLeft>
              <img src="/images/photo1.png" />
              <NmaeData>
                <Name>{props.data?.fetchBoard.writer}</Name>
                <Data1>Data:{props.data?.fetchBoard.createdAt}</Data1>
              </NmaeData>
            </TopLeft>
            <TopRight>
              <Images1>
                <img src="/images/photo2.png" />
                <Tooltip
                  placement="topRight"
                  title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
                >
                  <img src="/images/photo3.png" />
                </Tooltip>
              </Images1>
            </TopRight>
          </Top>
          <Main>
            <Title>{props.data?.fetchBoard.title}</Title>
            <Picture>
              <PictureImg src="/images/photo4.png" />
            </Picture>
          </Main>
          <Contents>{props.data?.fetchBoard.contents}</Contents>
          <Footer>
            <YouTube>
              <ReactPlayer
                url={props.data?.fetchBoard.youtubeUrl}
                width="486px"
                height="240px"
                muted="true"
                playing="true"
              />
            </YouTube>
            <Like>
              <LikeDiv>
                <LikeImg onClick={props.onClickLike} src="/images/photo7.png" />
                <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
              </LikeDiv>
              <DisLikeDiv>
                <DisLikeImg
                  onClick={props.onClickDisLike}
                  src="/images/photo8.png"
                />
                <DisLikeCount>
                  {props.data?.fetchBoard.dislikeCount}
                </DisLikeCount>
              </DisLikeDiv>
            </Like>
          </Footer>
        </Wrapper2>
        <Wrapper3>
          <div>
            <Button3 onClick={props.onClickList}>목록으로</Button3>
          </div>
          <div>
            <Button3 onClick={props.onClickMoveEdit}>수정하기</Button3>
          </div>
          <div>
            <Button3 onClick={props.onClickDelete}>삭제하기</Button3>
          </div>
        </Wrapper3>
        <Hr></Hr>
      </Wrapper1>
    </>
  );
}
