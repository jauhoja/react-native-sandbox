import { Button, Text, View } from 'react-native';
import MapLibreMap from './MapLibreMap';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation();
  return <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>This is such a great application</Text>
    <Button title="Go to map" onPress={() => navigation.navigate('MapLibreMap')} />
  </View>
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: "Home"
      }
    },
    MapLibreMap: {
      screen: MapLibreMap,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  return (
  <Navigation />
 )
}

export default App;
