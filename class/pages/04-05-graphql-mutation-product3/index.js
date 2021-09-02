import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

                                                    //상품 인풋활용해서 내가 등록하기

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
    const [ mySeller, setMySeller ] = useState("")
    const [ myName, setMyName ] = useState("")
    const [ myDetail, setMyDetail ] = useState("")
    const [ myPrice, setMyPrice ] = useState("")

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



    async function onClickSubmit() {                      //응답  ,  요청
        const result = await createProduct({
            variables: { 
                seller: mySeller, 
                createProductInput: {
                    name: myName,
                    detail: myDetail,
                    price: Number(myPrice)   //1.넘버() 숫자로변환   2. 밑에 input타입에서 Number로해주면 1번을안해도된다.
                }
             }
        })
        console.log(result.data.createProduct._id)
    }

    return(
        <>
            판매자: <input type="text" onChange={onChangeMySeller}/><br/>
            상품명: <input type="text" onChange={onChangeMyName}/><br/>
            상품상세: <input type="text"onChange={onChangeMyDetail}/><br/>
            상품가격: <input type="text" onChange={onChangeMyPrice}/><br/>   
            <button onClick={onClickSubmit}>상품 등록하기!!!</button>
        </>
    )
}