import {Wrapper1,Wrapper2,Wrapper3,Wrapper4,Top,TopLeft,TopRight
    ,NmaeData,Name,Data1,Address,AddressFont,Images1,Main,Title,Picture
    ,Contents,Footer,YouTube,Like,PictureImg,YouImg,LikeDiv,LikeFont,Button3
    } from './FreeRead.styles'
    

export default function BoardReadUI(props) {

    return(
        <>
            <Wrapper1>
                <Wrapper2>
                    <Top>
                        <TopLeft>
                            <img src="/images/photo1.png"/>
                            <NmaeData>
                                <Name>{props.data?.fetchBoard.writer}</Name>
                                <Data1>Data:2021.02.18</Data1>
                            </NmaeData>
                        </TopLeft>
                        <TopRight>
                            <Address>
                                <AddressFont>
                                서울특별시 영등포구 양산로200<br/>
                                (영등포동5가,영등포시장역)영등포 타임스퀘어 2층
                                </AddressFont>
                            </Address>
                            <Images1>
                                <img src = "/images/photo2.png"/>
                                <img src = "/images/photo3.png"/>
                            </Images1>
                        </TopRight>
                    </Top>
                    <Main>
                        <Title>
                        {props.data?.fetchBoard.title}
                        </Title>
                        <Picture>
                        <PictureImg src = "/images/photo4.png"/>
                        </Picture>
                    </Main>
                    <Contents>
                        {props.data?.fetchBoard.contents}
                    </Contents>
                    <Footer>
                        <YouTube>
                        <YouImg src = "/images/photo6.png"/>
                        </YouTube>
                        <Like>
                            <LikeDiv>
                                <img src = "/images/photo7.png"/>
                                <LikeFont>1920</LikeFont>
                            </LikeDiv>
                            <LikeDiv>
                            <img src = "/images/photo8.png"/>
                                <LikeFont>1920</LikeFont>
                            </LikeDiv>
                        </Like>
                    </Footer>
                </Wrapper2>
                <Wrapper3>
                    <div>
                        <Button3>목록으로</Button3>
                    </div>
                    <div>
                        <Button3>수정하기</Button3>
                    </div>
                    <div>
                        <Button3>삭제하기</Button3>   
                    </div>
                    
                </Wrapper3>
                <Wrapper4>

                </Wrapper4>
            </Wrapper1>
        </>

    )
}