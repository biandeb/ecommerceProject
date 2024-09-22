import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const OrderItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.date}>
          {item.createdAt ? item.createdAt : "Unknown Date"}
        </Text>
      </View>
      <View style={styles.itemsContainer}>
        <Text style={styles.itemsTitle}>Items:</Text>
        {item.items?.map((product, index) => (
          <View key={index} style={styles.productContainer}>
            <Text style={styles.itemsTitle}>
              {product.title} x {product.quantity}
            </Text>
            <Text style={styles.itemsTitle}>${(product.price * product.quantity).toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <View>
        <Text style={styles.total}>
          Total: ${item.total ? item.total.toFixed(2) : "0.00"}
        </Text>
      </View>
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
    borderRadius: 15,
  },
  containerText: {
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: "white",
  },
  total: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
  itemsContainer: {
    marginTop: 10,
  },
  itemsTitle: {
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
