import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../global/colors";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: "https://i.postimg.cc/JzBwdGwZ/logo-Galaxy.png",
          }}
        />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Go</Text>
          <MaterialIcons
            name="navigate-next"
            size={24}
            color={colors.purple3}
          />
        </Pressable>
      </View>
    </>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.purple3,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 200,
    backgroundColor: colors.beige1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.purple3,
    fontSize: 20,
    fontFamily: "FiraSans-BlackItalic",
    marginRight: 5,
  },
});
