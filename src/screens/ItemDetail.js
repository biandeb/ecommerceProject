import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";
import products from "../data/products.json";
import { colors } from "../global/colors";

const ItemDetail = ({route}) => {

  const {id} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.containerDetail}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: products[id].thumbnail }}
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{products[id].title}</Text>
          <Text style={styles.description}>{products[id].description}</Text>
          <Text style={styles.price}>Price: {products[id].price}$</Text>
        </View>
        <Pressable style={styles.button}>
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
