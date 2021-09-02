import { gql, useMutation } from "@apollo/client"

const CREATE_BOARD = gql`
mutation{
    createBoard(writer:"이상혁10",title:"이상혁10",contents:"내용10") {
          number
          message
    }
  }
  `

export default function GraphqMutationBoard2Page() {

    const [ createBoard ] = useMutation(CREATE_BOARD)

    async function ccc() {
       const result = await createBoard({
            variables: {write:"상혁", title:"제목4", contents:"내용4"}
        })

        console.log(result)
        console.log(result.data.createBoard.number)
    }


    return(
        <button onClick={ccc}>GRAPHQL-API 요청하기~~</button>

    )


}
    