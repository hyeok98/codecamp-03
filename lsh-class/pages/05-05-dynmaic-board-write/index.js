import {useMutation,gql} from '@apollo/client'
import { useRouter } from 'next/router'
import {useState} from 'react'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            number
            message
        }
    }
`

export default function GraphqMutationBoard3Page() {

    const router = useRouter()

    const [ createBoard ] = useMutation(CREATE_BOARD)
    const [ myWriter, setMyWriter ] = useState("")
    const [ myTitle, setMyTitle ] = useState("")
    const [ myContents, setMyContents ] = useState("")

    function onChangeWriter(event) {
        setMyWriter(event.target.value)
    }

    function onChangeTitle(event) {
        setMyTitle(event.target.value)
    }

    function onChangeContents(event) {
        setMyContents(event.target.value)
    }

    async function aaa() {
        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents }
        })
        console.log(result)
        console.log(result.data.createBoard.number)
        router.push(`/05-06-dynamic-board-read/${result.data.createBoard.number}`)
    }

    return(
        <>  
           작성자: <input onChange={onChangeWriter}/><br/>
            제목: <input onChange={onChangeTitle}/><br/>
            내용: <input onChange={onChangeContents}/><br/>
            <button onClick={aaa}>graphql-api 요청하기</button>
        </>

    )
}