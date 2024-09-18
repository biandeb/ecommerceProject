import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { usePostOrderMutation } from "../services/shop";
import { clearCart } from "../features/cart/cartSlice";

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  const localId = useSelector((state) => state.auth.localId);
  const [triggerPostOrder] = usePostOrderMutation();
  const dispatch = useDispatch();

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

  if (cart.total === 0)
    return (
      <View>
        <Text>Empty cart</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.containerConfirm}>
        <Pressable onPress={handleAddOrder}>
          <Text style={styles.textConfirm}>Confirm</Text>
        </Pressable>
        <Text style={styles.textTotal}>Total: {cart.total} $</Text>
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
});
