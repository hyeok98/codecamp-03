import {useRouter} from 'next/router'
import {useMutation, useQuery} from '@apollo/client'
import BoardReadUI from './FreeRead.presenter'
import { FETCH_BOARD ,DELETE_BOARD} from './FreeRead.queries'

export default function FreeRead() {

    const router = useRouter()

    const [aaa] = useMutation(DELETE_BOARD)

    const {data} = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.number}
    })

    function onClickList () {
        router.push(`/boards/list`)
    }

    function onClickEdit () {
        router.push(`/boards/new2/`)
    }

   async function onClickDelete () {
       await aaa({
            variables: {boardId: router.query.number}  //number 폴더이름.
        })
        router.push(`/boards/list`)
    }

    return(
        <>
            <BoardReadUI
            router = {router}
            data = {data}
            onClickList= {onClickList}
            onClickEdit= {onClickEdit}
            onClickDelete= {onClickDelete}
            />
        </>

    )
}