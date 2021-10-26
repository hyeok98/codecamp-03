import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import MarketReadUI from "./Market-read.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
  FETCH_USER_LOGGED_IN,
  CREATEPOINTTRANSACTIONOFBUYINGANDSELLING,
} from "./Market-read.queries";
import { useEffect } from "react";
declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketRead(props: any) {
  const router = useRouter();

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATEPOINTTRANSACTIONOFBUYINGANDSELLING
  );

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.read },
  });

  const { data: data1 } = useQuery(FETCH_USER_LOGGED_IN);

  function onClickList() {
    router.push("/markets/list");
  }

  function onClickMoveEdit() {
    router.push(`/markets/detail/${router.query.read}/edit`);
  }

  function onClickPick() {
    toggleUseditemPick({
      variables: { useditemId: router.query.read },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.read },
        },
      ],
    });
    console.log(data);
  }

  async function onClickDelete() {
    await deleteUseditem({
      variables: { useditemId: router.query.read },
    });
    alert("게시물이 삭제되었습니다");
    router.push("/markets/list");
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f2400c45d63389ba72ae0f127645b6ec&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            Number(data?.fetchUseditem.useditemAddress?.lat) || 37.485148,
            Number(data?.fetchUseditem.useditemAddress?.lng) || 126.895113
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);

        console.log(map);

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click"
          // function (mouseEvent: { latLng: any }) {
          //   // 클릭한 위도, 경도 정보를 가져옵니다

          //   const latlng = mouseEvent.latLng;

          //   // 마커 위치를 클릭한 위치로 옮깁니다
          //   marker.setPosition(latlng);

          //   // const message =
          //   //   "클릭한 위치의 위도는 " +
          //   //   latlng.getLat() +
          //   //   " 이고, " +
          //   //   "경도는 " +
          //   //   latlng.getLng() +
          //   //   " 입니다";
          //   // alert(message);
          // }
        );
      });
    };
  });

  async function onClickFlex() {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.read,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useritemId: router.query.read },
          },
        ],
      });
      alert("상품을 구매합니다~");
      router.push(`/markets/list`);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <MarketReadUI
      data={data}
      onClickList={onClickList}
      onClickMoveEdit={onClickMoveEdit}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
      data1={data1}
      onClickFlex={onClickFlex}
    />
  );
}
