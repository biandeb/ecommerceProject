import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';
import ItemDetail from './src/screens/ItemDetail';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('');

  const handleCategorySelected = (category) => {
    setCategorySelected(category)
  }

  return (
    <>
    {categorySelected ? 
        <ItemListCategories category={categorySelected} />
        :
    <Home handleCategorySelected={handleCategorySelected} />
  }
    {/* {<ItemDetail id={1} />} */}
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
});
