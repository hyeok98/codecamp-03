import {Wrapper1,Wrapper2,Wrapper3,Wrapper4,Top,TopLeft,TopRight
,NmaeData,Name,Data1,Address,AddressFont,Images1,Main,Title,Picture
,Contents,Footer,YouTube,Like
} from '../../../styles/detail.styles'

export default function DetailPage() {

    return(
        <>
            <Wrapper1>
                <Wrapper2>
                    <Top>
                        <TopLeft>
                            <img src="/images/photo1.png"/>
                            <NmaeData>
                                <Name>노원두</Name>
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
                            게시글 제목입니다.
                        </Title>
                        <Picture>
                            {/* <img src = "/images/photo4.png"/> */}
                        </Picture>
                    </Main>
                    <Contents>
                        <div>가나아아아아아아아</div>
                    </Contents>
                    <Footer>
                        <YouTube>

                        </YouTube>
                        <Like>

                        </Like>
                    </Footer>
                </Wrapper2>
                <Wrapper3>
                    <div></div>
                </Wrapper3>
                <Wrapper4>

                </Wrapper4>
            </Wrapper1>
        </>
    )

}