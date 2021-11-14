/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import TabNavigator from './page/navigation/tabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'red'}}>HomeScreen 페이지입니다</Text>
      <Button
        title="프로필 페이지로이동"
        onPress={() =>
          navigation.navigate('Profile', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }></Button>
      <Button
        title="Hook 을 이용하는 방법"
        onPress={() =>
          navigation.navigate('Hook', {
            // itemId: 86,
            // otherParam: 'anything you want here',
          })
        }></Button>
    </View>
  );
}

function ProfileScreen({route, navigation}) {
  const {itemId} = route.params;
  const {otherParam} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'red'}}>ProfileScreen 페이지입니다</Text>

      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <Button
        title="프로필 페이지로이동"
        onPress={() => navigation.push('Profile')}></Button>
      <Button title="Go back" onPress={() => navigation.goBack()}></Button>
      <Button title="poToTop" onPress={() => navigation.popToTop()}></Button>
    </View>
  );
}

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="tabNavigator"
          component={TabNavigator}></Stack.Screen> */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
