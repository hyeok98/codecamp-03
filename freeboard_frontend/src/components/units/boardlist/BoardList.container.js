import {useRouter} from 'next/router'
import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS } from './BoardList.queries' 
import { useQuery } from '@apollo/client'

export default function BoardList() {

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARDS);

    function onClickMoveToBoardNew() {
        router.push("/boards/new");
      }
    
      function onClickMoveToBoardDetail(event) {
        router.push(`/boards/list/${event.target.id}`);
      }

    return(
        <BoardListUI
            data={data}
            onClickMoveToBoardNew={onClickMoveToBoardNew}
            onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        >

        </BoardListUI>
    )
}