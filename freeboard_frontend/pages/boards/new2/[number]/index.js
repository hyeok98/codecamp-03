import FreeRead from "../../../../src/components/units/board2/FreeRead.container";
import BoardComment from "../../../../src/components/units/comment-write/Comment-write.container";
import BoardCommentListUI from "../../../../src/components/units/comment-list/Comment-list.container";
export default function DetailPage() {
  return (
    <>
      <FreeRead />
      <BoardComment />
      <BoardCommentListUI />
    </>
  );
}
