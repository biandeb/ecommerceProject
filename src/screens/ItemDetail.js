import { StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";
import products from '../data/products.json'

const ItemDetail = ({id}) => {
  return (
    <>
      <Header title="Product Detail" />
      <View>
        <Text>{products[id].title}</Text>
      </View>
    </>
  );
};
export default ItemDetail;
const styles = StyleSheet.create({});
