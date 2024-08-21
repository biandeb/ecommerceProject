import { StyleSheet, Text, View } from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { colors } from "../global/colors";

const OrderItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.date}>
          {new Date(item.createdAt).toLocaleString()}
        </Text>
        <Text style={styles.total}>Total: {item.total} $</Text>
      </View>
      <FontAwesome5 name="search" size={30} color="black" />
    </View>
  );
};
export default OrderItem;

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    backgroundColor: colors.purple2,
    borderWidth: 1,
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    alignItems: "center",
  },
  containerText: {
    gap: 15,
  },
  date: {
    fontSize: 16,
    color: "white",
  },
  total: {
    fontSize: 18,
    color: "white",
    fontWeight: 'bold',
  },
});
