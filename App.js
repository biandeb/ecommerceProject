import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { fonts } from "./src/global/fonts";
import { colors } from "./src/global/colors";
import { store } from "./src/app/store";
import { init } from "./src/db";
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
  init();

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
      <StatusBar style="light" backgroundColor={colors.purple3} />
    </>
  );
}

const styles = StyleSheet.create({});
