import { StyleSheet } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";


import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";


const MainNavigator = () => {
  const [idToken, setIdToken] = useState('')

  return (
    <NavigationContainer>
      {idToken ? <TabNavigator /> : <AuthStack />
      }
    </NavigationContainer>
  );
};
export default MainNavigator;

const styles = StyleSheet.create({});
