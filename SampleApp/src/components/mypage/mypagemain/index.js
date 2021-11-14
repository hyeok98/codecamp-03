/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from '@emotion/native';

const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 30px;
`;

const Profile = styled.Image`
  width: 71px;
  height: 66px;
  margin-bottom: 10px;
`;

const ProfileView = styled.View`
  display: flex;
  flex-direction: row;
`;

const MyName = styled.Text`
  margin-bottom: 20px;
  font-weight: bold;
  margin-right: 30px;
`;

const Logout = styled.Button`
  color: red;
`;

const ProfileUpdateView = styled.View`
  width: 308px;
  height: 31px;
  border: solid 1px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const ProfileUpdateText = styled.Text`
  font-weight: bold;
`;

const MyLikeBoardView = styled.View`
  width: 350px;
  height: 40px;
  /* border: solid 1px gray; */
  border-bottom: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 10px;
  border-bottom-color: gray;
  border-bottom-width: 1;
`;

const MyLikeBoardImage = styled.Image`
  margin-right: 10px;
  width: 23px;
  height: 23px;
`;

const MyLikeBoardText = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

const MyBoardImage = styled.Image`
  margin-right: 10px;
  width: 35px;
  height: 32px;
`;

const MyMoneyImage = styled.Image`
  margin-right: 10px;
  width: 40px;
  height: 40px;
`;

const Hr = styled.View`
  width: 100%;
  border-bottom-color: gray;
  border-bottom-width: 1;
  margin-bottom: 10px;
`;

const MypageMain = () => {
  return (
    <Wrapper>
      <Profile
        source={require('../../../../public/images/defaultprofile.png')}
      />
      <ProfileView>
        <MyName>코딩싫어</MyName>
        <Logout title="로그아웃" />
      </ProfileView>
      <ProfileUpdateView>
        <ProfileUpdateText>프로필 수정하기</ProfileUpdateText>
      </ProfileUpdateView>
      <Hr></Hr>
      <MyLikeBoardView>
        <MyLikeBoardImage
          source={require('../../../../public/images/mylikeimage.png')}
        />
        <MyLikeBoardText>내가누른 좋아요</MyLikeBoardText>
      </MyLikeBoardView>
      <MyLikeBoardView>
        <MyBoardImage
          source={require('../../../../public/images/myboardsimage.png')}
        />
        <MyLikeBoardText>내가 쓴 글 보기</MyLikeBoardText>
      </MyLikeBoardView>
      <MyLikeBoardView>
        <MyMoneyImage
          source={require('../../../../public/images/mymoneyimage.png')}
        />
        <MyLikeBoardText>동창회비 내역</MyLikeBoardText>
      </MyLikeBoardView>
    </Wrapper>
  );
};

export default MypageMain;
