import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import products from "../data/products.json";

const ItemListCategories = ({ category, handleCategorySelected, handleProductDetailId }) => {
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
    <SafeAreaView style={styles.container}>
      <Header title={category} handleCategorySelected={handleCategorySelected} />
      <Search onSearch={onSearch} />
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ProductItem product={item} 
            handleProductDetailId={handleProductDetailId}
            />
          )}
        />
    </SafeAreaView>
  );
};
export default ItemListCategories;

const styles = StyleSheet.create({
  container:{
    width:'100%',
    flex:1,
  },
});
