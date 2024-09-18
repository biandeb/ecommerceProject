import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { clearUser } from "../features/auth/authSlice";
import { colors } from "../global/colors";
import { deleteSession } from "../db";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.auth.idToken);

  const onLogout = () => {
    deleteSession();
    dispatch(clearUser());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {idToken && (
        <Pressable onPress={onLogout} style={styles.logout}>
          <SimpleLineIcons name="logout" size={28} color="black" />
        </Pressable>
      )}
    </View>
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 5 : 0,
  },
  text: {
    marginTop: 15,
    fontSize: 22,
    color: "#fff",
    position: "relative",
    fontFamily: "FiraSans-BlackItalic",
  },
  icon: {
    position: "absolute",
    left: 20,
  },
  logout: {
    position: "absolute",
    right: 25,
    bottom: 29,
  },
});
