import React from 'react';
import { Animated, StyleSheet } from 'react-native';
const withOpacity = (WrappedComponent) => {
  class WithOpacity extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     animation: null,
    //   };
    // }
    state = {
      animation: new Animated.Value(0),
    };

    componentDidMount() {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }

    render() {
      const animatedStyle = {
        opacity: this.state.animation,
      };
      return (
        <Animated.View style={animatedStyle}>
          <WrappedComponent />
        </Animated.View>
      );
    }
  }

  return WithOpacity;
};

export default withOpacity;
