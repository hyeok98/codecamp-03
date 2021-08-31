import{Wrapper1,Wrapper2,Header,HeaderHeader,HeaderPhoto,HeaderMain,
    My,Name,MyPhoto,Faq,HeaderFooter,Notice,Main,
MainMain,MainText,MainText2,Text1,Text2,MainFooter,
FooterPhoto,FooterPhoto2,MyMy} from '../../../styles/01-faq'

export default function BoardsNewPage(){

    return (
        <Wrapper1>
            <Wrapper2>
                <Header>
                    <HeaderHeader>

                    </HeaderHeader>
                    <HeaderPhoto>
                        <img src="/images/photo1.png"/>
                    </HeaderPhoto>
                    <HeaderMain>
                        <MyMy>
                            <My>마이</My>
                        </MyMy>
                        <MyPhoto>
                            <img src="/images/photo2.png"/>
                            <Name>임정아</Name>
                            <img src="/images/photo3.png"/>
                        </MyPhoto>
                    </HeaderMain>
                    <HeaderFooter>
                        <Notice>공지사항</Notice>
                        <Notice>이벤트</Notice>
                        <Faq>FAQ</Faq>
                        <Notice>Q&A</Notice>
                    </HeaderFooter>
                </Header>
                <Main>
                    <MainMain>
                        
                            <MainText>
                                <MainText2>                               
                                    <Text1>Q.01</Text1>                                                               
                                    <Text2>리뷰 작성은 어떻게 하나요?</Text2>                 
                                </MainText2>
                                <div>
                                    <img src="/images/photo4.png"/>
                                </div>
                            </MainText>
                            <MainText>
                                <MainText2>                               
                                    <Text1>Q.02</Text1>                                                               
                                    <Text2>리뷰 수정/삭제는 어떻게 하나요?</Text2>                 
                                </MainText2>
                                <div>
                                    <img src="/images/photo4.png"/>
                                </div>
                            </MainText>
                            <MainText>
                                <MainText2>                               
                                    <Text1>Q.03</Text1>                                                               
                                    <Text2>아이디/비밀번호를 잊어버렸어요.</Text2>                 
                                </MainText2>
                                <div>
                                    <img src="/images/photo4.png"/>
                                </div>
                            </MainText>
                            <MainText>
                                <MainText2>                               
                                    <Text1>Q.04</Text1>                                                               
                                    <Text2>회원탈퇴를 하고싶어요.</Text2>                 
                                </MainText2>
                                <div>
                                    <img src="/images/photo4.png"/>
                                </div>
                            </MainText>
                            <MainText>
                                <MainText2>                               
                                    <Text1>Q.05</Text1>                                                               
                                    <Text2>출발지 설정은 어떻게 하나요?</Text2>                 
                                </MainText2>
                                <div>
                                    <img src="/images/photo4.png"/>
                                </div>
                            </MainText>
                            <MainText>
                                <MainText2>                               
                                    <Text1>Q.06</Text1>                                                               
                                    <Text2>비밀번호를 변경하고 싶어요.</Text2>                 
                                </MainText2>
                                <div>
                                    <img src="/images/photo4.png"/>
                                </div>
                            </MainText>
                        
                    </MainMain>
                    <MainFooter>
                        <FooterPhoto>
                            <FooterPhoto2>
                                <img src="/images/photo9.svg"/>
                                <span>홈</span>
                            </FooterPhoto2>
                            <FooterPhoto2>
                                <img src="/images/photo6.png"/>
                                <span>잇츠로드</span>
                            </FooterPhoto2>
                            <FooterPhoto2>
                                <img src="/images/photo7.png"/>
                                <span>마이찜</span>
                            </FooterPhoto2>
                            <FooterPhoto2>
                                <img src="/images/photo8.png"/>
                                <span>마이</span>
                            </FooterPhoto2>
                        </FooterPhoto>
                    </MainFooter>
                </Main>
            </Wrapper2>
        </Wrapper1>
    )
}