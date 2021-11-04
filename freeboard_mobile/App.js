/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.aaa}>
        <Text>하이하이</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  aaa: {
    backgroundColor: 'blue',
  },
});

export default App;
