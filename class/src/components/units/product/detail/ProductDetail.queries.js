import {gql} from '@apollo/client'

export const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID) {
        fetchProduct(productId: $ID) {
            _id
            name
            detail
            price
        }
    }
`