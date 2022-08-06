import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Animated,
  Button,
} from 'react-native';
const TranslatePosition = () => {
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
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(animation, {
        toValue: 0,
        duration: 2000,
        //delay: 4000,
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
export default TranslatePosition;
