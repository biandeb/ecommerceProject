import { FlatList, StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { useSelector } from "react-redux";

import OrderItem from "../components/OrderItem";
import LoadingSpinner from "../components/LoadingSpinner";
import { useGetOrdersByUserQuery } from "../services/orders";

const Orders = () => {
  const localId = useSelector((state) => state.auth.localId);
  const { data: orders, isLoading } = useGetOrdersByUserQuery(localId);
  

  if (isLoading) return <LoadingSpinner />;
  if (orders.length === 0)
    return (
      <View style={styles.emptyCartContainer}>
        <View style={styles.emptyCartBox}>
          <Text style={styles.emptyCartText}>Your orders are empty</Text>
        </View>
      </View>
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <OrderItem item={item} />
          </View>
        )}
      />
    </View>
  );
};
export default Orders;

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  emptyCartBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: "600",
    color: "grey",
  },
});
