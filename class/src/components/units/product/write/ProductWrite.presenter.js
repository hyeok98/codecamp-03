import {} from "./ProductWrite.styles"

export default function ProductWriteUI(props) {

    return(
        <>
            <div>{props.isEdit ? "제품수정" : "제품등록"}</div>
            제품이름: <input type="text"/><br/>
            제품상세내용: <input type="text"/><br/>
            제품가격: <input type="text"/><br/>
            <button>{props.isEdit ? "수정완료" : "등록완료"}</button>
        </>

    )
}