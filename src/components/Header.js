import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import { clearUser } from "../features/auth/authSlice";
import { colors } from "../global/colors";
import { deleteSession } from "../db";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const idToken = useSelector((state) => state.auth.idToken);

  const onLogout = () => {
    deleteSession();
    dispatch(clearUser());
  };

  const showLogoutAlert = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Logout cancelled"),
          style: "cancel",
        },
        {
          text: "Log Out",
          onPress: onLogout,
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };
  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const getTitle = () => {
    switch (route.name) {
      case "Home":
        return "Welcome to Gourmet Bites";
      case "Login":
        return 'Login';
      case "Register":
        return 'Register';
      case "LocationSelector":
        return "Location";
      case "Products":
        return route.params.category;
      case "Details":
        return "Product Detail";
      case "MyProfile":
        return "My Profile";
      case "Cart":
        return "Cart";
      case "Orders":
        return "Orders";
      default:
        return "";
    }
  };

  const isProfileScreen = route.name === "MyProfile";
  const shouldShowBackButton = route.name !== "Home";

  return (
    <View style={styles.container}>
      {shouldShowBackButton && (
        <Pressable onPress={goBack} style={styles.iconLeft}>
          <FontAwesome5 name="arrow-left" size={25} color="black" />
        </Pressable>
      )}

      {isProfileScreen && idToken && (
        <Pressable onPress={showLogoutAlert} style={styles.iconRight}>
          <SimpleLineIcons name="logout" size={25} color="black" />
        </Pressable>
      )}

      <Text style={styles.text}>{getTitle()}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
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
    fontFamily: "FiraSans-BlackItalic",
    textAlign: "center",
  },
  iconLeft: {
    position: "absolute",
    left: 25,
    bottom: 29,
  },
  iconRight: {
    position: "absolute",
    right: 25,
    bottom: 29,
  },
});
