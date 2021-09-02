import {useMutation, gql} from '@apollo/client'


const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"영희8", title:"안녕하세요! 영희입니다.", contents:"내용"){
        number
        message
        }
    }
`





export default function GraphqMutationBoard1Page() {

    const [ createBoard ] = useMutation(CREATE_BOARD)


    async function aaa() {
        const result = await createBoard() //함수실행할떄는 뒤에 괄호
        console.log(result)
        console.log(result.data.createBoard.number)
    }


    return(
        <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>


    )


}