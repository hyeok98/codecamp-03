import {
  Wrapper,
  Wrapper2,
  Write,
  InputDiv,
  InputTitle,
  Input,
  AAA,
  Spot,
  SpotLeft,
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
  Map,
} from "./Market-write.styles";
import Button01 from "../../../commons/buttons/01/button01";
import "react-quill/dist/quill.snow.css";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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
          <ReactQuill
            style={{ width: "996px", height: "320px" }}
            onChange={props.onChangeMyEditor}
            placeholder="상품을 설명해주세요"
          />
        </AAA>
        <Error>{props.formState.errors.myContents?.message}</Error>

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
            <Map id="map"></Map>
          </SpotLeft>
          <SpotRight>
            <GpsDiv>
              <InputTitle>GPS</InputTitle>
              <GpsBottom>
                <GpsInput type="text" placeholder="위도" value={props.myLat} />
                <GpsImg src="/images/photo04.png" />
                <GpsInput type="text" placeholder="경도" value={props.myLng} />
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
