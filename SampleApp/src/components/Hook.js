/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const Hook = () => {
  const [name, setName] = useState('ji3n');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>안녕하세요 Hook 테스터입니다</Text>
      <Button title="이름변경" onPress={() => setName('kunghun')}></Button>
      <Text>안녕하세요{name}님</Text>
    </View>
  );
};

export default Hook;
