import React, { Component } from 'react';

import Svg, { Line } from 'react-native-svg';

import {
  StyleSheet,
  View,
  Platform,
  Text,
  PanResponder,
  Image,
  Dimensions,
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Product extends Component {
  constructor() {
    super();
    //initialize state
    this.panResponder;
    this.state = {
      startTouchX: 0,
      startTouchY: 0,

      endTouchX: 0,
      endTouchY: 0,
    };

    //panResponder initialization
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onStartShouldSetPanResponderCapture: (event, gestureState) => {
        this.setState({
          startTouchX: event.nativeEvent.locationX.toFixed(2),
          startTouchY: event.nativeEvent.locationY.toFixed(2),
        });
      },
      onMoveShouldSetPanResponder: (event, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
      onPanResponderGrant: (event, gestureState) => false,
      onPanResponderMove: (event, gestureState) => {},
      onPanResponderRelease: (event, gestureState) => {
        this.setState({
          endTouchX: event.nativeEvent.locationX.toFixed(2),
          endTouchY: event.nativeEvent.locationY.toFixed(2),
        });
      },
    });
    this.setState({
      startTouchX: 0,
      startTouchY: 0,

      endTouchX: 0,
      endTouchY: 0,
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.childView}>
          <Svg height={height} width={width} position="absolute">
            <Line
              x1={this.state.startTouchX}
              y1={this.state.startTouchY}
              x2={this.state.endTouchX}
              y2={this.state.endTouchY}
              stroke="red"
              strokeWidth="8"
            />
          </Svg>
          <View
            style={{ flex: 1, backgroundColor: 'transparent' }}
            {...this.panResponder.panHandlers}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

  childView: {
    flex: 1,
    overflow: 'hidden',
  },
  point: {
    height: 22,
    width: 22,
    marginTop: 5,
    position: 'absolute',
    borderRadius: 14,
    backgroundColor: '#afeeee',
  },
});
// import React, { useEffect, useMemo, useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   Dimensions,
//   Text,
//   TextInput,
//   Button,
// } from 'react-native';
// import withCounter from './withCounter';
// import withOpacity from './withOpacity';
// import withSearch from './withSearch';

// const data = [
//   { model: 'Sentra', doors: 4 },
//   { model: 'Maxima', doors: 4 },
//   { model: 'Skyline', doors: 2 },
//   { model: 'Taurus', doors: 4 },
//   { model: 'Escort', doors: 4 },
//   { model: 'Sentra', doors: 4 },
//   { model: 'Maxima', doors: 4 },
//   { model: 'Skyline', doors: 2 },
//   { model: 'Taurus', doors: 4 },
//   { model: 'Escort', doors: 4 },
// ];
// const Product = (props) => {
//   const { onChangeText, list } = props;
//   // const { countNumber, handleCLick } = props;
//   return (
//     <View style={styles.container}>
//       <View style={{ height: 30 }}>
//         <Text>Product</Text>
//       </View>
//       <TextInput
//         style={{ height: 60, borderWidth: 1, backgroundColor: '#ff44' }}
//         placeholder="Search"
//         onChangeText={(text) => onChangeText(text)}
//       />
//       {list.map((item, index) => (
//         <View
//           key={index}
//           style={{
//             height: 30,
//             backgroundColor: 'pink',
//             margin: 8,
//             justifyContent: 'center',
//           }}
//         >
//           <Text>{item.model}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   countTxt: {
//     fontSize: 20,
//     color: 'black',
//     alignSelf: 'center',
//   },
// });
// export default withOpacity(withSearch(Product, data));

// {
//   /* <View style={{ height: 30 }}>
//         <Text>Product</Text>
//       </View>
//       <TextInput
//         style={{ height: 60, borderWidth: 1, backgroundColor: '#ff44' }}
//         placeholder="Search"
//         onChangeText={onChangeText}
//       />
//       {list.map((item, index) => (
//         <View
//           key={index}
//           style={{
//             height: 30,
//             backgroundColor: 'pink',
//             margin: 8,
//             justifyContent: 'center',
//           }}
//         >
//           <Text>{item.model}</Text>
//         </View>
//       ))} */
// }
// {
//   /* <Button title="Increase Count" onPress={handleCLick} />
//       <Text style={styles.countTxt}>{countNumber}</Text> */
// }
