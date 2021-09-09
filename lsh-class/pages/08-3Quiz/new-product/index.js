import { useRouter } from 'next/router'
import { useMutation,gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, 
    $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
       
    
`

export default function ProductNew() {

    const router = useRouter()

    const [ createProduct ] = useMutation(CREATE_PRODUCT)

    const [mySeller, setMySeller] = useState("")
    const [myName, setMyName] = useState("")
    const [myDetail, setMyDetail] = useState("")
    const [myPrice, setMyPrice] = useState("")


    function onChangeMySeller(event) {
        setMySeller (event.target.value)
    }

    function onChangeMyName(event) {
        setMyName (event.target.value)
    }

    function onChangeMyDetail(event) {
        setMyDetail (event.target.value)
    }

    function onChangeMyPrice(event) {
        setMyPrice (event.target.value)
    }

   async function onClickMove() {
        const result = await createProduct({
            variables: { seller:mySeller,
            createProductInput: {
                name: myName,
                detail: myDetail,
                price: Number(myPrice)
            }
            }
        })
        router.push(`/08-3Quiz/detail-product/${result.data.createProduct._id}/`) //id는 프로덕트id
    }

    return(
        <>
            <div>상품 등록페이지</div>
            판매자: <input type="text" onChange={onChangeMySeller}/><br/>
            상품이름: <input type="text" onChange={onChangeMyName}/><br/>
            상품상세: <input type="text" onChange={onChangeMyDetail}/><br/>
            상품가격: <input type="text" onChange={onChangeMyPrice}/><br/>
            <button onClick={onClickMove}>등록하기</button>
        </>
    )
}