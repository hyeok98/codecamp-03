import {useRouter} from 'next/router'
import {useQuery} from '@apollo/client'
import BoardReadUI from './BoardRead.presenter'
import {FETCH_BOARD} from './BoardRead.queries'


export default function BoradRead() {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number)}
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
