import {useRouter} from 'next/router'
import {useState} from 'react'
import { useMutation } from "@apollo/client"
import { CREATE_BOARD } from './FreeBoard.queries'
import FreeBoardUI from './FreeBoard.presenter'

export default function FreeBoard() {

    const router = useRouter()

    const [ createBoard ] = useMutation(CREATE_BOARD)

    const [ name, setName ] = useState("")
    const [ pass, setPass ] = useState("")
    const [ title, setTitle ] = useState("")
    const [ contents, setContents ] = useState("")

    const [qqq, setQqq] = useState(false)
    

    const [ nameError, setNameError ] = useState("")
    const [ passError, setPassError ] = useState("")
    const [ titleError, setTitleError ] = useState("")
    const [ contentsError, setContentsError ] = useState("")
    

    function onChangeName(event) {
        setName(event.target.value)
        if(event.target.value !== "") {
            setNameError("")
        }

        if(event.target.value !== "" && pass !== "" && title !== "" && contents !== "") {
            setQqq(true)
       }else {
           setQqq(false)
       }

    
    }

    function onChangePass(event) {
        setPass(event.target.value)
        if(event.target.value !== "") {
            setPassError("")
        }

        if(name !== "" && event.target.value !== "" && title !== "" && contents !== "") {
            setQqq(true)
       }else {
        setQqq(false)
    }

        
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
        if(event.target.value !== "") {
            setTitleError("")
        }

        if(name !== "" && pass !== "" && event.target.value !== "" && contents !== "") {
            setQqq(true)
       }else {
        setQqq(false)
    }
    }

    function onChangeContents(event) {
        setContents(event.target.value)
        if(event.target.value !== "") {
            setContentsError("")
        }

        if(name !== "" && pass !== "" && title !== "" && event.target.value !== "") {
            setQqq(true)
       }else {
        setQqq(false)
    }
    }

    async function onClickSignup() {

        
        if(name === ("")) {
            setNameError("이름을 작성해주세요.")
        }

        if(pass === ("")) {
            setPassError("비밀번호를 작성해주세요.")
        }

        if(title === ("")) {
            setTitleError("제목을 작성해주세요.")
        }

        if(contents === ("")) {
            setContentsError("내용을 작성해주세요.")
        }

        if(name !== "" && pass !== "" && title !== "" && contents !== "") {
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        writer:name,
                        password:pass,
                        title:title,
                        contents: contents
                    }
                }
            })
            console.log(result.data.createBoard._id)
            
            alert('게시물을 등록합니다')
            router.push(`/boards/new2/${result.data.createBoard._id}`)
        }
    }
    

    return(
        <>
            <FreeBoardUI onChangeName={onChangeName}
            onChangePass={onChangePass}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSignup={onClickSignup}
            nameError={nameError}
            passError={passError}
            titleError={titleError}
            contentsError={contentsError}
            qqq={qqq}
            />
        </>

    )
}