/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchPage from './page/aaa/search';
import MyPage from './page/aaa/mypage';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home페이지입니다</Text>
      <Button
        title="정보공유게시판으로이동"
        onPress={() => navigation.navigate('Sharinginfo')}></Button>
      <Button
        title="만남게시판으로이동"
        onPress={() => navigation.navigate('Sharinginfo')}></Button>
      <Button
        title="커뮤니티게시판으로이동"
        onPress={() => navigation.navigate('Sharinginfo')}></Button>
    </View>
  );
}

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>세팅1페이지입니다</Text>
//     </View>
//   );
// }

// function SettingsScreen2() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>세팅2페이지입니다!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search" component={SearchPage} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="MyPage" component={MyPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
