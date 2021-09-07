import {useRouter} from 'next/router'

export default function DynamicRoutingPage() {

    const router = useRouter()

    function move1() {
        router.push('/05-04-dynamic-routed/1')
    }

    function move2() {
        router.push('/05-04-dynamic-routed/2')
    }

    function move3() {
        router.push('/05-04-dynamic-routed/3')
    }

    return(
        <>
            <button onClick={move1}>정적라우팅 1번 게시물로 이동</button><br/>
            <button onClick={move2}>정적라우팅 2번 게시물로 이동</button><br/>
            <button onClick={move3}>정적라우팅 3번 게시물로 이동</button>
        </>
    )
}