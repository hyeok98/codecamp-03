import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import ProductNewUI from './newProduct.presenter'
import {CREATE_PRODUCT} from './newProduct.queries'

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

    return <ProductNewUI
    onChangeMySeller={onChangeMySeller}
    onChangeMyName={onChangeMyName}
    onChangeMyDetail={onChangeMyDetail}
    onChangeMyPrice={onChangeMyPrice}
    onClickMove={onClickMove}
    />
       
    
}