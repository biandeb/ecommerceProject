import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { usePostOrderMutation } from "../services/orders";
import { clearCart } from "../features/cart/cartSlice";

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  const localId = useSelector((state) => state.auth.localId);
  const [triggerPostOrder] = usePostOrderMutation();
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const total = cart.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setTotalPrice(total);
    };

    calculateTotal();
  }, [cart.items]);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));

    const newTotalPrice = cart.items.reduce(
      (total, item) =>
        item.id !== productId ? total + item.price * item.quantity : total,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  const handleAddOrder = () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      ...cart,
      createdAt,
    };
    triggerPostOrder({ localId, order });
    dispatch(clearCart());
    navigation.navigate("OrdersStack");
  };

  if (cart.items.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <View style={styles.emptyCartBox}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem item={item} onRemove={handleRemoveFromCart} />
        )}
      />
      <View style={styles.containerConfirm}>
        <Pressable onPress={handleAddOrder}>
          <Text style={styles.textConfirm}>Confirm</Text>
        </Pressable>
        <Text style={styles.textConfirm}>Total: {totalPrice} $</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 0.85,
  },
  containerConfirm: {
    backgroundColor: colors.purple3,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textConfirm: {
    color: "white",
    fontSize: 20,
  },
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
