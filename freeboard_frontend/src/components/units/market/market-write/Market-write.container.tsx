import { useForm } from "react-hook-form";
import MarketWriteUI from "./Market-write.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Market-write.validation";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./Market-write.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketWrite(props) {
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const router = useRouter();

  const [myLat, setMyLat] = useState(null);
  const [myLng, setMyLng] = useState(null);
  const [files, setFiles] = useState([null, null, null]);

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onChangeMyEditor(value) {
    setValue("myContents", value === "<p><br></p>" ? "" : value);
    console.log(value);
    trigger("myContents");
  }

  async function onClickSubmit(data) {
    console.log(data);
    try {
      const uploadFiles = files
        .filter((el) => el)
        .map((el) => uploadFile({ variables: { file: el } }));
      const results = await Promise.all(uploadFiles);
      const myImages = results.map((el) => el.data.uploadFile.url);

      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.myName,
            remarks: data.myRemarks,
            contents: data.myContents,
            price: Number(data.myPrice),
            tags: data.myTags,
            useditemAddress: {
              lat: myLat,
              lng: myLng,
            },
            images: myImages,
          },
        },
      });
      console.log(result);
      alert("등록성공");
      router.push(`/markets/detail/${result.data.createUseditem._id}`);
    } catch (error) {
      alert(error);
    }
  }

  async function onClickUpdate(data) {
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.read,
          updateUseditemInput: {
            name: data.myName,
            remarks: data.myRemarks,
            contents: data.myContents,
            price: Number(data.myPrice),
            tags: data.myTags,
          },
        },
      });
      console.log(result);
      alert("업데이트 성공");
      router.push(`/markets/detail/${result.data.updateUseditem._id}`);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7c3cf8892e69d2fcac53f76a548fe722";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.485148, 126.895113), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            // const message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            // message += "경도는 " + latlng.getLng() + " 입니다";

            // var resultDiv = document.getElementById("clickLatlng");
            // resultDiv.innerHTML = message;
            setMyLat(latlng.getLat());
            setMyLng(latlng.getLng());
          }
        );
      });
    };
  }, []);

  function onChangeFiles(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  return (
    <MarketWriteUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      onChangeMyEditor={onChangeMyEditor}
      myLat={myLat}
      myLng={myLng}
      onChangeFiles={onChangeFiles}
    />
  );
}
