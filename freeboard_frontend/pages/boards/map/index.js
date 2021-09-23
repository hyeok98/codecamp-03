import { useEffect, useRef } from "react";

export default function MapPage() {
  <script
    type="text/javascript"
    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR API KEY"
  ></script>;

  function Content() {
    const mapContainer = useRef();
    useEffect(() => {
      kakao.maps.load(() => {
        let el = document.getElementById("map");
        let map = new kakao.maps.Map(el, {
          center: new kakao.maps.Coords(523951.25, 1085073.75),
        });
      });
    }, []);
  }

  return <></>;
}
