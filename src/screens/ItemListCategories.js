import { FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import products from "../data/products.json";

const ItemListCategories = ({ route }) => {
  const {category} = route.params;
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
    <View style={styles.container}>
      <Header title={category} />
      <Search onSearch={onSearch} />
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ProductItem product={item} 
            />
          )}
        />
    </View>
  );
};
export default ItemListCategories;

const styles = StyleSheet.create({
  container:{
    width:'100%',
    flex:1,
  },
});
