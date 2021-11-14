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

const MainMeeting = ({navigate}) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Contents>만남 페이지입니다</Contents>
      <Button1
        title="등록하러가기"
        onPress={() => navigation.navigate('만남등록')}
      />
    </Wrapper>
  );
};

export default MainMeeting;
