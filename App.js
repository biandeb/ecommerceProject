import { StyleSheet } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { fonts } from "./src/global/fonts";
import { colors } from "./src/global/colors";
import Navigator from "./src/navigation/navigator";


export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  

  if (!fontsLoaded) {
    return null;
  }


  return (
    <>
    <Navigator />
      <StatusBar style="light" backgroundColor={colors.purple3} />
    </>
  );
}

const styles = StyleSheet.create({});
