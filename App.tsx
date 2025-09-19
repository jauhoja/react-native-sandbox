import { Text, View } from 'react-native';
//import MapLibreMap from './MapLibreMap';

import { MapView } from "@maplibre/maplibre-react-native";


const HelloView = () => {
   return <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 12,
        borderColor: 'lightblue',
        borderRadius: 50
      }}>
      <Text>Hello, world!</Text>
    </View>
}

    function App() {
  return (
  <>
    <HelloView />
      <MapView style={{
         flex: 1,
        borderWidth: 12,
        borderColor: 'pink',
        }}/>
  </>
  )
}

export default App;
