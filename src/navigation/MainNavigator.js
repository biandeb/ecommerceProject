import { StyleSheet } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";


import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import { useSelector } from "react-redux";


const MainNavigator = () => {
  const idToken = useSelector(state => state.auth.idToken)

  return (
    <NavigationContainer>
      {idToken ? <TabNavigator /> : <AuthStack />
      }
    </NavigationContainer>
  );
};
export default MainNavigator;

const styles = StyleSheet.create({});
