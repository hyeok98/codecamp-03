import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import ProductDetailUI from "./ProductDetail.presenter"
import { FETCH_PRODUCT } from "./ProductDetail.queries"

export default function ProductDetail() {

    const router = useRouter()

    const {data} = useQuery(FETCH_PRODUCT, {
        variables: {productId: router.query._id}
    })

    return(
        <>
            <ProductDetailUI
            router = {router}
            data = {data}
            />
        </>
    
    )
}