export default function BoardReadUI(props) {

    return(
        <>
            <div>상세페이지입니다</div>
            <div>게시글 번호: {props.router.query.number}</div>
            <div>게시글 작성자: {props.data?.fetchBoard.writer}</div>
            <div>게시글 제목: {props.data?.fetchBoard.title}</div>
            <div>게시글 내용: {props.data?.fetchBoard.contents}</div>
        </>
    )
}