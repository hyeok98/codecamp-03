import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import MeetingScreen from '../screens/main';
import CommunityScreen from '../screens/home/community';
import SharingInfoScreen from '../screens/sharinginfo';
import MainMeetingWriteScreen from '../screens/meetingwrite';

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="메인" component={HomeScreen} />
      <Stack.Screen name="만남게시판" component={MeetingScreen} />
      <Stack.Screen name="커뮤니티게시판" component={CommunityScreen} />
      <Stack.Screen name="정보공유게시판" component={SharingInfoScreen} />
      <Stack.Screen name="만남등록" component={MainMeetingWriteScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
