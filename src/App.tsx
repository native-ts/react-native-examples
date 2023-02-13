import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Drawer, { DrawerRef } from '@native-ts/drawer';
import ActionBarScreen from './screens/ActionBar';


const App = () => {
  const drawer = useRef<DrawerRef>(null);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* <ActionBarScreen /> */}
        <TouchableOpacity onPress={() => drawer.current?.open()}>
          <Text>Open drawer</Text>
        </TouchableOpacity>
        <Drawer ref={drawer}>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <Text>Drawer</Text>
          <TouchableOpacity onPress={() => drawer.current?.close()}>
            <Text>Close drawer</Text>
          </TouchableOpacity>
        </Drawer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
