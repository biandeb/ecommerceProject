import { Pressable, StyleSheet, Text } from "react-native";

import ShadowWrapper from "./ShadowWrapper";
import { colors } from "../global/colors";

const CategoryItem = ({ item, handleCategorySelected }) => {
  return (
    <Pressable onPress={() => handleCategorySelected(item)}>
    <ShadowWrapper style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </ShadowWrapper>
    </Pressable>
  );
};
export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 12,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.purple2,
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
