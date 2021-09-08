import {} from "./ProductDetail.styles"

export default function ProductDetailUI(props){


    return(
        <>
            <div>상품 상세 페이지입니다.</div>
            <div>상품이름 : {props.data?.fetchProduct.name} </div>
            <div>상품상세 : {props.data?.fetchProduct.detail} </div>
            <div>상품가격 : {props.data?.fetchProduct.price} </div>
        </>

    )
}