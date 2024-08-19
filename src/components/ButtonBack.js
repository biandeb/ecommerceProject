import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "../global/colors";

import AntDesign from "@expo/vector-icons/AntDesign";

const ButtonBack = ({handleCategorySelected}) => {

  return (
    <View>
      <Pressable style={styles.button} onPress={() => handleCategorySelected('')}>
        <AntDesign name="back" size={21} color="black" />
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>
    </View>
  );
};
export default ButtonBack;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.beige0,
    paddingVertical: 8,
    width: "50%",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    right: '35%',
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
});
