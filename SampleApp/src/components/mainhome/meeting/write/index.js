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
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.Text`
  margin-bottom: 30px;
`;

const Input = styled.TextInput`
  border: solid 1px black;
`;

// const Button1 = styled.Button``;

const MainMeetingWrite = () => {
  return (
    <Wrapper>
      <Contents>만남 페이지 글등록페이지입니다</Contents>
      <Input>fewfew</Input>
    </Wrapper>
  );
};

export default MainMeetingWrite;
