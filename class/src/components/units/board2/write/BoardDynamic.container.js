import DynamicBoardUI from './BoardDynamic.presenter'
import {useMutation} from '@apollo/client'
import { useState } from 'react'
import { CREATE_BOARD } from './BoardDynamic.queries'
import {useRouter} from 'next/router'

export default function BoardDynamic() {

    const router = useRouter()

    const [ createBoard ] = useMutation(CREATE_BOARD)
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle ] = useState("")
    const [myContents, setMyContents ] = useState("")

    const [qqq, setQqq] = useState(false)

    function onChangeMyWriter(event) {
       setMyWriter (event.target.value)
       if(myWriter !== "" && myTitle !== "" && myContents !== "" ) {
        setQqq(true)
   }
    }

    function onChangeMyTitle(event) {
        setMyTitle (event.target.value)
        if(myWriter !== "" && myTitle !== "" && myContents !== "" ) {
            setQqq(true)
       }
    }

    function onChangeMyContents(event) {
        setMyContents (event.target.value)
        if(myWriter !== "" && myTitle !== "" && myContents !== "" ) {
            setQqq(true)
       }
    }


    async function aaa() {
        try{
            const result = await createBoard({
                variables: { writer: myWriter, title: myTitle, contents: myContents }
            }) 
            console.log(result)
            console.log(result.data.createBoard.number)
            // router.push('/05-06-dynamic-board-read/' + result.data.createBoard.number)  //옛날방식
            router.push(`/quiz/dynamic-board-read/${result.data.createBoard.number}`) //최신방식(템플릿 리터럴)
            alert("완료")

        }catch(error) {
            console.log(error)
        }

        
    }

    return(
        <>
            <DynamicBoardUI onChangeMyWriter={onChangeMyWriter}
            onChangeMyTitle={onChangeMyTitle}
            onChangeMyContents={onChangeMyContents}
            aaa={aaa}
            qqq={qqq}
            />
        </>

    )
}