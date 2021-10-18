import MarketRead from "../../../../src/components/units/market/market-read/Market-read.container";
import CommentWrite from "../../../../src/components/units/market/market-comment-write/Market-comment-write-container";
import MarketCommentList from "../../../../src/components/units/market/market-comment-list/Market-comment-list-container";
export default function MarketsReadPage() {
  return (
    <>
      <MarketRead />
      <CommentWrite />
      <MarketCommentList />
    </>
  );
}
