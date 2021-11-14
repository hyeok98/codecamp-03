/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';

const Wrapper = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.Text`
  margin-bottom: 30px;
`;

const Button1 = styled.Button``;

const MainMain = ({navigate}) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Contents>메인 페이지입니다</Contents>
      <Button1
        title="미팅게시판으로가기"
        onPress={() => navigation.navigate('만남게시판')}
      />
      <Button1
        title="커뮤니티게시판으로가기"
        onPress={() => navigation.navigate('커뮤니티게시판')}
      />
      <Button1
        title="정보공유게시판으로가기"
        onPress={() => navigation.navigate('정보공유게시판')}
      />
    </Wrapper>
  );
};

export default MainMain;
