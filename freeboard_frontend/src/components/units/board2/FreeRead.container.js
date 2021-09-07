import {useRouter} from 'next/router'
import {useQuery} from '@apollo/client'
import BoardReadUI from './FreeRead.presenter'
import { FETCH_BOARD } from './FreeRead.queries'

export default function FreeRead() {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.number}
    })

    return(
        <>
            <BoardReadUI
            router = {router}
            data = {data}
            />
        </>

    )
}