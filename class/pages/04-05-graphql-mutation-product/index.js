import { useMutation, gql } from "@apollo/client"

                                                //세팅
const CREATE_PRODUCT = gql`   
    mutation{
        createProduct(
            seller:"철수2", 
            createProductInput:{
                name:"마우스2",
                detail:"좋은마우스2",
                price: 3000
            }
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
        const result = await createProduct()
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