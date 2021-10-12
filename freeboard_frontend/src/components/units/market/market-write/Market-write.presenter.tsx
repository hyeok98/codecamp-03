import {
  Wrapper,
  Wrapper2,
  Write,
  InputDiv,
  InputTitle,
  Input,
  AAA,
  BBB,
  Spot,
  SpotLeft,
  Map,
  SpotRight,
  GpsDiv,
  AddressDiv,
  GpsInput,
  GpsBottom,
  GpsImg,
  AddressInput,
  ImageDiv,
  Image,
  ImageBottomDiv,
  SettingsDiv,
  Settings,
  SettingsBox,
  SettingsInput,
  Error,
} from "./Market-write.styles";
import Button01 from "../../../commons/buttons/01/button01";

export default function MarketWriteUI(props) {
  return (
    // <Wrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
    <Wrapper
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdate)
          : props.handleSubmit(props.onClickSubmit)
      }
    >
      <Wrapper2>
        <Write>{props.isEdit ? "상품수정" : "상품등록"}</Write>
        <InputDiv>
          <InputTitle>상품명</InputTitle>
          <Input
            type="text"
            placeholder="상품명을 작성해주세요"
            {...props.register("myName")}
          />
          <Error>{props.formState.errors.myName?.message}</Error>
        </InputDiv>
        <InputDiv>
          <InputTitle>한줄요약</InputTitle>
          <Input
            type="text"
            placeholder="상품 한줄요약을 작성해주세요"
            {...props.register("myRemarks")}
          />
          <Error>{props.formState.errors.myRemarks?.message}</Error>
        </InputDiv>
        <AAA>
          <InputTitle>상품설명</InputTitle>
          <BBB type="text" {...props.register("myContents")} />
          <Error>{props.formState.errors.myContents?.message}</Error>
        </AAA>
        <InputDiv>
          <InputTitle>판매 가격</InputTitle>
          <Input
            type="text"
            placeholder="판매가격을 입력해주세요"
            {...props.register("myPrice")}
          />
          <Error>{props.formState.errors.myPrice?.message}</Error>
        </InputDiv>
        <InputDiv>
          <InputTitle>태그입력</InputTitle>
          <Input
            type="text"
            placeholder="#태그 #태그 #태그"
            {...props.register("myTags")}
          />
          <Error>{props.formState.errors.myTags?.message}</Error>
        </InputDiv>
        <Spot>
          <SpotLeft>
            <InputTitle>거래위치</InputTitle>
            <Map></Map>
          </SpotLeft>
          <SpotRight>
            <GpsDiv>
              <InputTitle>GPS</InputTitle>
              <GpsBottom>
                <GpsInput type="text" placeholder="위도" />
                <GpsImg src="/images/photo8.png" />
                <GpsInput type="text" placeholder="경도" />
              </GpsBottom>
            </GpsDiv>
            <AddressDiv>
              <InputTitle>주소</InputTitle>
              <AddressInput type="text" />
              <AddressInput type="text" />
            </AddressDiv>
          </SpotRight>
        </Spot>
        <ImageDiv>
          <InputTitle>사진 첨부</InputTitle>
          <ImageBottomDiv>
            <Image></Image>
            <Image></Image>
          </ImageBottomDiv>
        </ImageDiv>
        <SettingsDiv>
          <InputTitle>메인 사진 설정</InputTitle>
          <Settings>
            <SettingsBox>
              <SettingsInput type="checkbox" />
              사진1
            </SettingsBox>
            <SettingsBox>
              <SettingsInput type="checkbox" />
              사진2
            </SettingsBox>
          </Settings>
        </SettingsDiv>
        {!props.isEdit && (
          <Button01
            type="submit"
            name="등록하기"
            isValid={props.formState.isValid}
          ></Button01>
        )}
        {props.isEdit && (
          <Button01
            type="submit"
            name="수정하기"
            isValid={props.formState.isValid}
          ></Button01>
        )}
      </Wrapper2>
    </Wrapper>
  );
}