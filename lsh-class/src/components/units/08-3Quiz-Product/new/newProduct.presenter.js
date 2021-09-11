export default function ProductNewUI(props) {

    return(
        <>
            <div>상품 등록페이지</div>
            판매자: <input type="text" onChange={props.onChangeMySeller}/><br/>
            상품이름: <input type="text" onChange={props.onChangeMyName}/><br/>
            상품상세: <input type="text" onChange={props.onChangeMyDetail}/><br/>
            상품가격: <input type="text" onChange={props.onChangeMyPrice}/><br/>
            <button onClick={props.onClickMove}>등록하기</button>
        </>
    )
}