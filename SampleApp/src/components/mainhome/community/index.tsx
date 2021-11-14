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

const Button1 = styled.Button``;

const MainCommunity = () => {
  return (
    <Wrapper>
      <Contents>커뮤니티페이지입니다</Contents>
      <Button1 title="커뮤니티 페이지입니다" />
    </Wrapper>
  );
};

export default MainCommunity;
