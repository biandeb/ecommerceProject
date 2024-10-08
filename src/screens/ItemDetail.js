import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { colors } from "../global/colors";
import { addItemCart } from "../features/cart/cartSlice";
import { useGetProductQuery } from "../services/shop";
import LoadingSpinner from "../components/LoadingSpinner";

const ItemDetail = ({route}) => {

  const {id} = route.params;
  const {data:product, isLoading} = useGetProductQuery(id)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleAddItemCart = () => {
    dispatch(addItemCart({...product,quantity:1}))
    navigation.navigate('CartStack')
  }

  if(isLoading) return <LoadingSpinner />

  return (
    <View style={styles.container}>
      <View style={styles.containerDetail}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: product.thumbnail }}
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Price: {product.price}$</Text>
        </View>
        <Pressable style={styles.button} onPress={handleAddItemCart}>
          <Text style={styles.buttonBuy}>Buy now</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  containerDetail: {

  },
  containerText: {
    width: '80%',
    gap: 10,
    margin: 20,
    marginHorizontal: '10%',
  },
  image: {
    width:'100%',
    height: 250,
    marginVertical: 10,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold'

  },
  description:{
    fontSize: 16,
  },
  price:{
    fontSize: 19,
    fontWeight: 'bold'
  },
  button:{
    margin: 20,
    marginHorizontal: '10%',
    backgroundColor: colors.purple3,
    width: 80,
    borderRadius: 5,
    padding:10,
    alignItems: 'center'
  },
  buttonBuy:{
    color: 'white',
    fontWeight: 'bold'
  }
});
