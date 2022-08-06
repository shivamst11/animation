import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Animated,
  Button,
  Easing,
} from 'react-native';
const TranslateEasing = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  // this also work
  //const animation= new startAnimation

  const animatedStyle = {
    transform: [{ translateX: animation }, { translateY: animation }],
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 200,
      duration: 1000,
      easing: Easing.bezier(0.1, 1, 0.86, 0.23),
      //easing ;Easing.bounce,
      //easing;Easing.elastic(2),
      //easig : Easing.
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start()
    );
  };

  return (
    <View style={styles.container}>
      <Button title={'start animation'} onPress={startAnimation} />
      <Animated.View
        style={[
          {
            height: 200,
            width: 200,
            backgroundColor: 'red',
          },
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
export default TranslateEasing;
