import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from "./src/screens/Home";
import ItemListCategories from "./src/screens/ItemListCategories";
import ItemDetail from "./src/screens/ItemDetail";
import Header from "../components/Header.js";


const Stack = createNativeStackNavigator();


const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={
        ({route}) => (
           {
                header: () => {
                    return  <Header />
            }
        }
        )
  }
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Products' component={ItemListCategories} />
        <Stack.Screen name='Details' component={ItemDetail} />
      </Stack.Navigator>
     </NavigationContainer>
  )
}
export default Navigator

const styles = StyleSheet.create({})