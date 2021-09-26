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
  Address,
  AddressFont,
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
              <Address>
                <AddressFont>
                  서울특별시 영등포구 양산로200
                  <br />
                  (영등포동5가,영등포시장역)영등포 타임스퀘어 2층
                </AddressFont>
              </Address>
              <Images1>
                <img src="/images/photo2.png" />
                <img src="/images/photo3.png" />
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
