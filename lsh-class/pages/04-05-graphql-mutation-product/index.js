import {useMutation, gql} from '@apollo/client'

const CREATE_PRODUCT = gql`
    mutation{
  createProduct(seller:"이상혁52",createProductInput:{
    name:"휴대폰52",
    detail:"아이폰52",
    price:5000
  }) {
    _id
    number
    message
  }
}
`

export default function GraphqlMutationProductPage() {

    const [ createProduct ] = useMutation(CREATE_PRODUCT)

    async function aaa() {
        const result = await createProduct()
        // console.log(result)
        console.log(result.data.createProduct._id)
    }

    return(
        <button onClick={aaa}>상품 등록하기</button>
    )
}