import {gql, useMutation, useQuery} from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_PRODUCTS = gql`
    query{
        fetchProducts{
            _id
            seller
            name
            detail
            price
            createdAt
        }
    }
`

const DELETE_PRODUCTS = gql`
    mutation deleteProduct($productId:ID) {
        deleteProduct(productId:$productId) {
            message
        }
     }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: solid 1px black;
`

const Column = styled.div`
    width: 20%;
`

export default function MapProducts() {

    const [deleteProduct] = useMutation(DELETE_PRODUCTS)

    const {data} = useQuery(FETCH_PRODUCTS)

   async function onClickDelete(event) {

        await deleteProduct({
            variables: {productId: event.target.id},
            refetchQueries: [{query: FETCH_PRODUCTS}]
        })
    }



    return(
       <div>
           {data?.fetchProducts.map((el, index) => (
               <Row key={el._id} >
                    <Column>
                        <input type="checkbox"/>
                    </Column>
                    <Column>
                        {index}    
                    </Column>     
                    <Column>
                        {el.seller}
                    </Column>
                    <Column>
                        {el.name}
                    </Column>
                    <Column>
                        {el.detail}
                    </Column>
                    <Column>
                        {el.price}
                    </Column>
                    <Column>
                        {el.createdAt}
                    </Column>
                    <Column>
                        <button id={el._id} onClick={onClickDelete}>삭제하기</button>
                    </Column>
                   
               </Row>

           ))}
       </div>
    )
}