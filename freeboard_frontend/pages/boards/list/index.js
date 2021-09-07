import {Wrapper1,Wrapper2,Top,Search,TitleBoard,TopBest,BestBoard,
MainSearch,Year,SearchButton,SearchInput,BestImages,BestContents,
BestPhoto,BestTitle,BestBottom,BestBox,BestLeft,BestRight,LeftTop,LeftBottom
,LeftTopImages,LeftName,BestGood,BestSu,List,Row,Column
} from '../../../styles/BoardList.styles'
import {gql,useQuery} from '@apollo/client'
import {useRouter} from 'next/router'

const FETCH_BOARDS = gql`
    query{
        fetchBoards{
           
            writer
            title
            contents
            createdAt
        }
    }
`


export default function BoardsListPage() {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARDS, {
        variables: {writer: router.query.name}
    })


    

    return(
        <>
            <Wrapper1>
                <Wrapper2>
                    <Top>
                        <TitleBoard>
                            베스트 게시글
                        </TitleBoard>
                        <TopBest>
                            <BestBoard>
                                <BestImages>
                                    <BestPhoto src="/images/photo9.png"/>
                                </BestImages>
                                <BestContents>
                                    <BestBox>
                                        <BestTitle>
                                            게시글 제목입니다.
                                        </BestTitle>
                                        <BestBottom>
                                            <BestLeft>
                                                <LeftTop>
                                                    <LeftTopImages>
                                                        <img src="/images/photo10.png"/>
                                                    </LeftTopImages>
                                                    <LeftName>
                                                        노원두
                                                    </LeftName>
                                                </LeftTop>
                                                <LeftBottom>
                                                    Data:2021.02.18
                                                </LeftBottom>
                                            </BestLeft>
                                            <BestRight>
                                                <BestGood>
                                                    <img src="/images/photo11.png"/>
                                                </BestGood>
                                                <BestSu>
                                                    356
                                                </BestSu>
                                            </BestRight>
                                        </BestBottom>
                                    </BestBox>
                                </BestContents>
                            </BestBoard>

                            <BestBoard>
                                <BestImages>
                                    <BestPhoto src="/images/photo12.png"/>
                                </BestImages>
                                <BestContents>
                                    <BestBox>
                                        <BestTitle>
                                            게시글 제목입니다.
                                        </BestTitle>
                                        <BestBottom>
                                            <BestLeft>
                                                <LeftTop>
                                                    <LeftTopImages>
                                                        <img src="/images/photo10.png"/>
                                                    </LeftTopImages>
                                                    <LeftName>
                                                        노원두
                                                    </LeftName>
                                                </LeftTop>
                                                <LeftBottom>
                                                    Data:2021.02.18
                                                </LeftBottom>
                                            </BestLeft>
                                            <BestRight>
                                                <BestGood>
                                                    <img src="/images/photo11.png"/>
                                                </BestGood>
                                                <BestSu>
                                                    356
                                                </BestSu>
                                            </BestRight>
                                        </BestBottom>
                                    </BestBox>
                                </BestContents>
                            </BestBoard>
                            <BestBoard>
                                <BestImages>
                                    <BestPhoto src="/images/photo13.png"/>
                                </BestImages>
                                <BestContents>
                                    <BestBox>
                                        <BestTitle>
                                            게시글 제목입니다.
                                        </BestTitle>
                                        <BestBottom>
                                            <BestLeft>
                                                <LeftTop>
                                                    <LeftTopImages>
                                                        <img src="/images/photo10.png"/>
                                                    </LeftTopImages>
                                                    <LeftName>
                                                        노원두
                                                    </LeftName>
                                                </LeftTop>
                                                <LeftBottom>
                                                    Data:2021.02.18
                                                </LeftBottom>
                                            </BestLeft>
                                            <BestRight>
                                                <BestGood>
                                                    <img src="/images/photo11.png"/>
                                                </BestGood>
                                                <BestSu>
                                                    356
                                                </BestSu>
                                            </BestRight>
                                        </BestBottom>
                                    </BestBox>
                                </BestContents>
                            </BestBoard>
                            <BestBoard>
                                <BestImages>
                                    <BestPhoto src="/images/photo14.png"/>
                                </BestImages>
                                <BestContents>
                                    <BestBox>
                                        <BestTitle>
                                            게시글 제목입니다.
                                        </BestTitle>
                                        <BestBottom>
                                            <BestLeft>
                                                <LeftTop>
                                                    <LeftTopImages>
                                                        <img src="/images/photo10.png"/>
                                                    </LeftTopImages>
                                                    <LeftName>
                                                        노원두
                                                    </LeftName>
                                                </LeftTop>
                                                <LeftBottom>
                                                    Data:2021.02.18
                                                </LeftBottom>
                                            </BestLeft>
                                            <BestRight>
                                                <BestGood>
                                                    <img src="/images/photo11.png"/>
                                                </BestGood>
                                                <BestSu>
                                                    356
                                                </BestSu>
                                            </BestRight>
                                        </BestBottom>
                                    </BestBox>
                                </BestContents>
                            </BestBoard>
                        </TopBest>
                    </Top>
                    <Search>
                        <MainSearch>
                            <SearchInput type="text" placeholder="제목을 검색해주세요."/>
                        </MainSearch>
                        <Year>
                           <div>YYYY.MM.DD ~ YYYY.MM.DD</div>
                        </Year>
                        <SearchButton>검색하기</SearchButton>
                    </Search>
                    <List>
                        {data?.fetchBoards.map((el,index) => (
                         <Row>
                            <Column>{index}</Column>
                            <Column>{el.title}</Column>
                            <Column>{el.writer}</Column>
                            <Column>{el.createdAt}</Column>
                         </Row>
                                
                            
                        ))}
                    </List> 
                    
                </Wrapper2>
            </Wrapper1>
        </>
    )
}