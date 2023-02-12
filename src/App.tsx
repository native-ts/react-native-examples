import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import ActionBarScreen from './screens/ActionBar';


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ActionBarScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
