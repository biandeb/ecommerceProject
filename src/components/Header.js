import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import { colors } from "../global/colors";
import ButtonBack from "./ButtonBack";

const Header = ({ title, handleCategorySelected }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {
          handleCategorySelected ?
          <ButtonBack handleCategorySelected={handleCategorySelected}/>
          : null
        }
        <Text style={styles.text}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight:0,
    marginBottom: 10,
    backgroundColor: colors.purple3,
    width: "100%",
    height: 110,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 5 : 0, // Unicamente para IOS
  },
  text: {
    marginTop: 15,
    fontSize: 22,
    color: "#fff",
    position: 'relative',
    fontFamily: 'FiraSans-BlackItalic',
  },
});
