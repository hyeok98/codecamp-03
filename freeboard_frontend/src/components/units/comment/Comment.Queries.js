import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
    mutation createBoardComment(
        $boardId: ID!
        $createBoardCommernInput: CreateBoardCommentInput!) {
            createBoardComment(
                boardId: $boardId
                createBoardCommentInput: $createBoardCommentInput
            ) {
                _id
                writer
                contents
                rating
            }
        }
    )
`;
