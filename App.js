import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListScreen from './screens/TaskListScreen';
import TaskDetailScreen from './screens/TaskDetailScreen';
import BandList from './screens/BandScreen';
import AlbumDetailScreen from './screens/AlbumDetailScreen';
import BandCard from './screens/components/BandCard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*<Stack.Screen
          name="TaskList"
          component={TaskListScreen}
          options={{title: "Uppgifter"}}
        />

        <Stack.Screen
          name="TaskDetail"
          component={TaskDetailScreen}
          options={{title: "Detaljer"}}
        />*/}
        <Stack.Screen name="AlbumList" component={BandCard} />
        <Stack.Screen name="AlbumView" component={AlbumDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
