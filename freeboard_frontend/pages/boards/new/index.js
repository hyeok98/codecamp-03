import{ Wrapper1, Wrapper,Title, IdInput,TextInput,Header, InputText, Main, MainInput, Address,
    AddressInput, AddressButton, YouTube, Picture,
     PictuerButton, PictureDiv,MainSettings, FooterButton,
   AddressBox,MiniTitle,ErrorMessage} from '../../../styles/BoardsNew.styles'

import {useState} from 'react'
import { useMutation, gql } from "@apollo/client"
//11,12번줄이 쿼리? 10번은 타입?
const CREATE_BOARD = gql`
    mutation ($createBoardInput:CreateBoardInput!){
        createBoard(createBoardInput:$createBoardInput){     
            _id
        }
    }
`


export default function BoardsNewPage(){

    const [ createBoard ] = useMutation(CREATE_BOARD)

    const [ name, setName ] = useState("")
    const [ pass, setPass ] = useState("")
    const [ title, setTitle ] = useState("")
    const [ contents, setContents ] = useState("")
    

    const [ nameError, setNameError ] = useState("")
    const [ passError, setPassError ] = useState("")
    const [ titleError, setTitleError ] = useState("")
    const [ contentsError, setContentsError ] = useState("")
    

    function onChangeName(event) {
        setName(event.target.value)
        if(event.target.value !== "") {
            setNameError("")
        }
    }

    function onChangePass(event) {
        setPass(event.target.value)
        if(event.target.value !== "") {
            setPassError("")
        }
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
        if(event.target.value !== "") {
            setTitleError("")
        }
    }

    function onChangeContents(event) {
        setContents(event.target.value)
        if(event.target.value !== "") {
            setContentsError("")
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
        }
    }

    


   return (
       <Wrapper1>
           <Wrapper>
               <Title>게시물 등록</Title>
               <IdInput>
                   <div>
                        <div>
                            <MiniTitle>작성자</MiniTitle>
                        </div>
                        <TextInput type="text" placeholder="이름을 적어주세요" onChange={onChangeName}/>   
                        <ErrorMessage>{nameError}</ErrorMessage>
                   </div>
                   <div>
                   <div>
                            <MiniTitle>비밀번호</MiniTitle>
                        </div>
                        <TextInput type="password" placeholder="비밀번호를 입력해주세요" onChange={onChangePass} />
                        <ErrorMessage>{passError}</ErrorMessage>
                   </div>
               </IdInput>
               <Header>    
                   <MiniTitle>제목</MiniTitle>      
                   <InputText type="text" placeholder="제목을 입력하세요" onChange={onChangeTitle}/>  
                    <ErrorMessage>{titleError}</ErrorMessage>
               </Header>
               <Main>          
                       <MiniTitle>내용</MiniTitle>               
                       <MainInput type="text" placeholder="내용을 작성해주세요" onChange={onChangeContents}/>   
                       <ErrorMessage>{contentsError}</ErrorMessage>  
               </Main>
               <Address>              
                   <MiniTitle>주소</MiniTitle>    
                   <AddressBox>
                       <AddressInput type="text"/>
                       <AddressButton>우편번호 검색</AddressButton>
                   </AddressBox>
                   <div>
                       <InputText type="text"/>
                   </div>
                   <div>
                       <InputText type="text"/>
                   </div>
               </Address>
               <YouTube>
                   <div>
                       <MiniTitle>유튜브</MiniTitle>
                   </div>
                   <div>
                       <InputText type="text" placeholder="링크를 복사해주세요"/>
                   </div>
               </YouTube>
               <Picture>     
                   <div>  
                   사진첨부
                   </div>       
                   <PictureDiv>
                       <PictuerButton>
                           <span>+</span>
                           <span>Upload</span>
                       </PictuerButton>
                       <PictuerButton>
                       <span>+</span>
                           <span>Upload</span>
                       </PictuerButton>
                       <PictuerButton>
                           <span>+</span>
                           <span>Upload</span>
                       </PictuerButton>
                   </PictureDiv>
               </Picture>
               <MainSettings>       
                   메인설정     
                   <div>
                       <input type="radio" name="settings"/>유튜브
                       <input type="radio" name="settings"/>사진
                   </div>
               </MainSettings>     
                   <FooterButton onClick={onClickSignup}>등록하기</FooterButton>
           </Wrapper>
        </Wrapper1>
   )

}