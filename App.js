import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import Navigator from "./src/navigation/Navigator";
import { fonts } from "./src/global/fonts";
import { colors } from "./src/global/colors";
import { store } from "./src/app/store";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>
      <StatusBar style="light" backgroundColor={colors.purple3} />
    </>
  );
}

const styles = StyleSheet.create({});
