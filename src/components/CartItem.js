import { StyleSheet, Text, View } from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { colors } from "../global/colors";

const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>{item.price} $</Text>
      </View>
      <FontAwesome5 name="trash" size={35} color="black" />
    </View>
  );
};
export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: colors.purple2,
    marginVertical: 10,
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerText: {
    width: "70%",
    gap: 5,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  brand: {
    color: "white",
    fontSize: 15,
  },
  price: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
