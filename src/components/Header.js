import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { colors } from "../global/colors";

const Header = ({ title }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
    </SafeAreaView>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop:22, // Queda bien en Android pero no en IOS, se modifica el header
    marginBottom: 10,
    backgroundColor: colors.purple3,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 5 : 0, // Unicamente para IOS
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    fontSize: 22,
    color:'#fff',
    fontWeight:'bold',
  },
});
