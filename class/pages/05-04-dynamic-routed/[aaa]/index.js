
import { useRouter } from "next/router"

export default function DynamicRoutedPage() {

    const router = useRouter()
//query 에 저장됨?
    return(
        <>
            <div>{router.query.aaa}번페이지입니다</div>
            <div>동적페이지 이동 완료!!</div>
        </>
    )

}