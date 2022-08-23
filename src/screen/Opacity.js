import { observer } from 'mobx-react-lite';
import React, { useEffect, useState, useContext, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Animated,
  Button,
} from 'react-native';
import { CounterStoreContext, ThemeContext, useCounterStore } from './context';
const Opacity = () => {
  const animation = useRef(new Animated.Value(1)).current;
  // this also work
  //const animation= new startAnimation
  const { count, increment, decrement } = useCounterStore();
  // console.log('animation', animation);

  const animatedStyle = {
    opacity: animation,
  };
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
        //delay: 4000,
        useNativeDriver: true,
      }).start()
    );
  };

  return (
    <View style={styles.container}>
      <Text>{count} </Text>

      <Button title={'start animation'} onPress={startAnimation} />
      <Button title={'start animation'} onPress={() => increment()} />
      <Animated.View
        style={[
          { height: 200, width: 200, backgroundColor: 'red' },
          animatedStyle,
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default observer(Opacity);
