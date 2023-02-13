import React, { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Easing, Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FaChevronRight from "@native-ts/icons/fa/ChevronRight";
import FaChevronLeft from "@native-ts/icons/fa/ChevronLeft";

export interface ScreenProps{
  title: string;
}

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

const Screen: FC<PropsWithChildren<ScreenProps>> = props => {

  const { children, title } = props;
  const [ visible, setVisible ] = useState(false);

  const opacity = useRef(new Animated.Value(0));
  const opacityTiming = useRef<Animated.CompositeAnimation>();

  const translate = useRef(new Animated.Value(WINDOW_WIDTH));
  const translateTiming = useRef<Animated.CompositeAnimation>();

  useEffect(() => {
    if (visible){
      stop();
      animated(0.5, 0);
      start();
    }
  }, [  visible]);

  const stop = () => {
    opacityTiming.current && opacityTiming.current.stop();
    translateTiming.current && translateTiming.current.stop();
  }

  const start = (callback?: (() => void)) => {
    opacityTiming.current?.start();
    translateTiming.current?.start(callback);
  }

  const animated = (o: number, c: number) => {
    opacityTiming.current = Animated.timing(opacity.current, {
      toValue: o,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.linear,
    });

    translateTiming.current = Animated.timing(translate.current, {
      toValue: c,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.linear,
    });
  }

  const handlePressButton = () => setVisible(true);

  const handlePressClose = () => {
    stop();
    animated(0, WINDOW_WIDTH);
    start(() => setVisible(false));
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handlePressButton}>
        <Text>{ title }</Text>
        <FaChevronRight color="#0969da" />
      </TouchableOpacity>
      <Modal
        visible={visible}
        animationType="none"
        transparent
      >
        <Animated.View
          style={[
            styles.backdrop, 
            { opacity: opacity.current }
          ]}
        />
        <Animated.View
          style={[
            styles.container,
            { transform: [{ translateX: translate.current }] }
          ]}
        >
          <View style={styles.header}>
            <TouchableOpacity style={styles.headerButton} onPress={handlePressClose}>
              <FaChevronLeft color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerText}>{ title }</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000'
  },
  container: {
    backgroundColor: '#fff',
    height: WINDOW_HEIGHT - (StatusBar.currentHeight ?? 0)
  },
  header: {
    backgroundColor: '#0969da',
    height: 55,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerButton: {
    height: 55,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  }
})

export default Screen;
