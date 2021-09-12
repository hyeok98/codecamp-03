export default function ProductReadUI(props) {
  return (
    <>
      <div>상품상세페이지</div>
      <div>판매자: {props.data?.fetchProduct.seller}</div>
      <div>상품이름: {props.data?.fetchProduct.name}</div>
      <div>상품상세: {props.data?.fetchProduct.detail}</div>
      <div>상품가격: {props.data?.fetchProduct.price}</div>
      <button onClick={props.onClickEdit}>수정하러가기</button>
    </>
  );
}
