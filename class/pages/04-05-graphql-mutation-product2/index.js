import { useMutation, gql } from "@apollo/client"
                                                    //아무것도안누르고 등록누르면 조ㅎ
                                                //세팅
const CREATE_PRODUCT = gql`   
    mutation createProduct($seller: String, $createProductInput: CreateProductInput! ) {
        createProduct(
            seller: $seller, 
            createProductInput: $createProductInput                        
            ){
                _id
                number
                message
            }
        }
    `


export default function GraphqlMutationProductPage() {
    
    const [ createProduct ] = useMutation(CREATE_PRODUCT)   //세팅

    async function onClickSubmit() {                      //응답  ,  요청
        const result = await createProduct({
            variables: { 
                seller: "영희", 
                createProductInput: {
                    name: "키보드",
                    detail: "아주좋은 키보드",
                    price: 5000
                }
             }
        })
        console.log(result.data.createProduct._id)
    }

    return(
        <>
            판매자: <input type="text"/><br/>
            상품명: <input type="text"/><br/>
            상품상세: <input type="text"/><br/>
            상품가격: <input type="text"/><br/>
            <button onClick={onClickSubmit}>상품 등록하기!!!</button>
        </>
    )
}