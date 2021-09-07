import {useMutation,gql} from '@apollo/client'

const CREATE_BOARD = gql`
    mutation{
  createBoard(writer:"이상혁찐퉁3",title:"찐퉁제목3",contents:"찐퉁내용3") {
    _id
    number
    message
  }
}
`

export default function GraphqMutationBoard1Page() {

   const [createBoard] = useMutation(CREATE_BOARD)

    async function aaa() {
        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.number)
    }

    return(
        <button onClick={aaa}>Graphql-api 요청하기</button>

    )
}