import React, { createContext, useContext } from 'react';
import { Button, Text, View } from 'react-native';

import { observer } from 'mobx-react-lite';

// import { useCounterStore, CounterStoreContext } from './counter.store';

const Home = observer(({ navigation }) => {
  //   const counter = useContext(CounterStoreContext);
  //   useCounterStore();

  //   const navigateToNextScreen = () => {
  //     Navigation.push(componentId, {
  //       component: {
  //         name: 'NextScreen',
  //       },
  //     });
  //   };

  //   console.log('counter store', store);
  // const data = useContext(ThemeContext);

  return (
    <View>
      <Button title="Opacity" onPress={() => navigation.navigate('Opacity')} />
      <Button title="Scale" onPress={() => navigation.navigate('Scale')} />
      <Button
        title="TranslatePosition"
        onPress={() => navigation.navigate('TranslatePosition')}
      />
      <Button
        title="Interpolation"
        onPress={() => navigation.navigate('Interpolation')}
      />
      <Button title="Easing" onPress={() => navigation.navigate('Easing')} />
      <Button title="Spring" onPress={() => navigation.navigate('Spring')} />
      <Button title="Loop" onPress={() => navigation.navigate('Loop')} />
      <Button
        title="ProductHoc"
        onPress={() => navigation.navigate('Product')}
      />
    </View>
  );
});

export default Home;
