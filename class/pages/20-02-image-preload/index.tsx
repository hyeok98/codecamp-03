import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [imageTag, setImageTag] = useState();
  const divRef = useRef<HTMLInputElement>();

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setImageTag(img);
    };
  }, []);

  function onClickButton() {
    divRef.current?.appendChild(imageTag);
  }

  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지보여주기</button>
    </>
  );
}
