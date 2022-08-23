import React from 'react';
import { StyleSheet } from 'react-native';
const withSearch = (WrappedComponent, data) => {
  class WithSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: data,
      };
    }

    onChangeText = (txt) => {
      this.setState({
        list: data.filter((item) =>
          item.model.toLowerCase().includes(txt.toLowerCase())
        ),
      });
    };

    render() {
      return (
        <WrappedComponent
          list={this.state.list}
          onChangeText={this.onChangeText}
        />
      );
    }
  }

  return WithSearch;
};

export default withSearch;

const styles = StyleSheet.create({});
