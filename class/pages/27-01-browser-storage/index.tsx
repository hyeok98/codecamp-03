export default function BrowserStoragePage() {
  function onClickSaveCookie() {
    document.cookie = "aaa=철수"; // aaa 가 key , 철수가 value
  }

  function onClickSaveLocalStorage() {
    localStorage.setItem("bbb", "영희"); // bbb 라는 key 에 영희라는 value
  }

  function onClickSaveSessionStorage() {
    sessionStorage.setItem("ccc", "훈이");
  }

  function onClickGetCookie() {
    // console.log("myCookie", document.cookie);
    const temp = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("aaa="))[0]; // 결과가 ["aaa=철수"] 라고 결과가 나와서 filter을 걸어준다?

    console.log(temp.split("=")[1]);
  }

  function onClickGetLocalStorage() {
    const asdf = localStorage.getItem("bbb");
    console.log("1번", asdf);
  }

  function onClickGetSessionStorage() {
    const aaa = sessionStorage.getItem("ccc");
    console.log("세션스토리지:", aaa);
  }

  return (
    <>
      <button onClick={onClickSaveCookie}>쿠키에 저장하기</button>
      <button onClick={onClickSaveLocalStorage}>로컬스토리지에 저장하기</button>
      <button onClick={onClickSaveSessionStorage}>
        세션스토리지에 저장하기
      </button>
      ===============================================================
      <br />
      <button onClick={onClickGetCookie}>쿠키에 있는 값 가져오기</button>
      <button onClick={onClickGetLocalStorage}>
        로컬스토리지에 있는 값 가져오기
      </button>
      <button onClick={onClickGetSessionStorage}>
        세션스토리지에 있는 값 가져오기
      </button>
    </>
  );
}
