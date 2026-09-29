import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlbumDetailScreen from './screens/AlbumDetailScreen';
import AlbumListScreen from './screens/AlbumListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AlbumList" component={AlbumListScreen} />
        <Stack.Screen name="AlbumView" component={AlbumDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
