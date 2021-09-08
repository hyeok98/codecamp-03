import{gql} from '@apollo/client'

//11,12번줄이 쿼리? 10번은 타입?
export const CREATE_BOARD = gql`
    mutation ($createBoardInput:CreateBoardInput!){
        createBoard(createBoardInput:$createBoardInput){     
            _id
        }
    }
`

export const UPDATE_BOARD = gql`
    mutation updateBoard($updateBoradInput: UpdateBoardInput!, $password:String, $boardId: ID! ) {
        updateBoard(UpdateBoardInput: $UpdateBoardInput, password: $password, boardId: $boardId  ) {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`