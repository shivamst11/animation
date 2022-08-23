import React from 'react';
import { Animated, StyleSheet } from 'react-native';
const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    state = {
      count: 0,
    };

    handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    render() {
      return (
        <WrappedComponent
          countNumber={this.state.count}
          handleCLick={this.handleClick}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
