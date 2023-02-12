import React, { FC, PropsWithChildren, useState } from "react";
import { Animated, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface ScreenProps{
  title: string;
}

const Screen: FC<PropsWithChildren<ScreenProps>> = props => {

  const { children, title } = props;
  const [ visible, setVisible ] = useState(false);

  return (
    <>
      <TouchableOpacity style={styles.button}>
        <Text>{ title }</Text>
      </TouchableOpacity>
      <Modal
        visible={visible}
        animationType="none"
        transparent
      >
        <Animated.View style={styles.backdrop} />
        <Animated.View>
          <View>
            <Text>{ title }</Text>
          </View>
          <ScrollView>
            { children }
          </ScrollView>
        </Animated.View>
      </Modal>
    </>
  );

}

const styles = StyleSheet.create({
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#0969da',
    borderRadius: 25,
    height: 50,
    margin: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    justifyContent: 'center',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000'
  }
})

export default Screen;
