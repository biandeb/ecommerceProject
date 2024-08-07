import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import products from '../data/products.json'


const ItemListCategories = ({category}) => {
    const [categoryFiltered, setCategoryFiltered] = useState([])

    useEffect(() => {
        setCategoryFiltered(products.filter(product => product.category === category))
    },[category])

  return (
    <>
      <Header title="Categories" />
      <View>
        <FlatList 
        data={categoryFiltered}
        keyExtractor={item => item.id}
        renderItem={({item}) => <View><Text>{item.title}</Text></View>}
        />
      </View>
    </>
  );
};
export default ItemListCategories;
const styles = StyleSheet.create({});
