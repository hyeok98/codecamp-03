import {
  Wrapper1,
  Wrapper,
  Title,
  IdInput,
  TextInput,
  Header,
  InputText,
  Main,
  MainInput,
  Address,
  AddressInput,
  AddressButton,
  YouTube,
  Picture,
  PictuerButton,
  PictureDiv,
  MainSettings,
  FooterButton,
  AddressBox,
  MiniTitle,
  ErrorMessage,
} from "./FreeBoard.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function FreeBoardUI(props) {
  return (
    <>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />
        </Modal>
      )}
      <Wrapper1>
        <Wrapper>
          <Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</Title>
          <IdInput>
            <div>
              <div>
                <MiniTitle>작성자</MiniTitle>
              </div>
              <TextInput
                type="text"
                placeholder="이름을 적어주세요"
                // readOnly={Boolean(props.data?.fetchBoard.writer)}
                // defaultValue={props.data?.fetchBoard.writer}
                onChange={props.onChangeName}
              />
              <ErrorMessage>{props.nameError}</ErrorMessage>
            </div>
            <div>
              <div>
                <MiniTitle>비밀번호</MiniTitle>
              </div>
              <TextInput
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={props.onChangePass}
              />
              <ErrorMessage>{props.passError}</ErrorMessage>
            </div>
          </IdInput>
          <Header>
            <MiniTitle>제목</MiniTitle>
            <InputText
              type="text"
              placeholder="제목을 입력하세요"
              onChange={props.onChangeTitle}
              // defaultValue={props.data?.fetchBoard.title}
            />
            <ErrorMessage>{props.titleError}</ErrorMessage>
          </Header>
          <Main>
            <MiniTitle>내용</MiniTitle>
            <MainInput
              type="text"
              placeholder="내용을 작성해주세요"
              onChange={props.onChangeContents}
            />
            <ErrorMessage>{props.contentsError}</ErrorMessage>
          </Main>
          <Address>
            <MiniTitle>주소</MiniTitle>
            <AddressBox>
              <AddressInput
                name="zipcode"
                placeholder="07250"
                readOnly
                value={
                  props.zipcode || props.data?.fetchBoard.boardAddress?.zipcode
                }
              />
              <AddressButton onClick={props.onClickAddressSearch}>
                우편번호 검색
              </AddressButton>
            </AddressBox>
            <div>
              <InputText
                readOnly
                value={
                  props.address || props.data?.fetchBoard.boardAddress?.address
                }
              />
            </div>
            <div>
              <InputText
                onChange={props.onChangeAddressDetail}
                defaultValue={
                  props.data?.fetchBoard.boardAddress?.addressDetail
                }
              />
            </div>
          </Address>
          <YouTube>
            <div>
              <MiniTitle>유튜브</MiniTitle>
            </div>
            <div>
              <InputText
                type="text"
                placeholder="링크를 복사해주세요"
                onChange={props.onChangeYoutubeUrl}
                defaultValue={props.data?.fetchBoard.youtubeUrl}
              />
            </div>
          </YouTube>
          <Picture>
            <div>사진첨부</div>
            <PictureDiv>
              <PictuerButton>
                <span>+</span>
                <span>Upload</span>
              </PictuerButton>
              <PictuerButton>
                <span>+</span>
                <span>Upload</span>
              </PictuerButton>
              <PictuerButton>
                <span>+</span>
                <span>Upload</span>
              </PictuerButton>
            </PictureDiv>
          </Picture>
          <MainSettings>
            메인설정
            <div>
              <input type="radio" name="settings" />
              유튜브
              <input type="radio" name="settings" />
              사진
            </div>
          </MainSettings>
          {!props.isEdit && (
            <FooterButton onClick={props.onClickSignup} qqq={props.qqq}>
              등록하기
            </FooterButton>
          )}
          {props.isEdit && (
            <FooterButton onClick={props.onClickEdit} qqq={props.qqq}>
              수정하기
            </FooterButton>
          )}
        </Wrapper>
      </Wrapper1>
    </>
  );
}
