export default function ProductNewUI(props) {
  return (
    <>
      <div>{props.isEdit ? "상품수정페이지" : "상품등록페이지"}</div>
      판매자: <input type="text" onChange={props.onChangeMySeller} />
      <br />
      상품이름: <input type="text" onChange={props.onChangeMyName} />
      <br />
      상품상세: <input type="text" onChange={props.onChangeMyDetail} />
      <br />
      상품가격: <input type="text" onChange={props.onChangeMyPrice} />
      <br />
      {!props.isEdit && <button onClick={props.onClickMove}>등록하기</button>}
      {props.isEdit && <button onClick={props.onClckUpdate}>수정하기</button>}
    </>
  );
}
