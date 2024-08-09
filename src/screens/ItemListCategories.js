import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import products from "../data/products.json";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";

const ItemListCategories = ({ category }) => {
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    setProductsFiltered(
      products.filter(product => product.category === category))
  }, [category]);

  const onSearch = (input) => {
    if(!input){
      setProductsFiltered(products.filter(product => product.category === category))
     } else{
        setProductsFiltered(productsFiltered.filter(product => product.title.includes(input) ))
    }
  }

  return (
    <>
      <Header title="Categories" />
      <Search onSearch={onSearch} />
      <View>
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ProductItem product={item} />
          )}
        />
      </View>
    </>
  );
};
export default ItemListCategories;

const styles = StyleSheet.create({});
