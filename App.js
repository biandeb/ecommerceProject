import { StyleSheet, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { fonts } from "./src/global/fonts";
import Home from "./src/screens/Home";
import ItemListCategories from "./src/screens/ItemListCategories";
import ItemDetail from "./src/screens/ItemDetail";
import { colors } from "./src/global/colors";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  const [categorySelected, setCategorySelected] = useState("");
  const [productDetailId, setProductDetailId] = useState(null);

  const {width, height} = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect( () => {
    if( height < width ){
      setIsPortrait(true)
      setIsLandscape(false)
    } else {
      setIsPortrait(false)
      setIsLandscape(true)
    }
  }, [height, width])

  if (!fontsLoaded) {
    return null;
  }

  const handleCategorySelected = (category) => {
    setCategorySelected(category);
  };

  const handleProductDetailId = (id) => {
    setProductDetailId(id)
  }

  return (
    <>
      {categorySelected ? 
        productDetailId ?
        <ItemDetail id={productDetailId} />
        :
        <ItemListCategories
          category={categorySelected}
          handleProductDetailId={handleProductDetailId}
          handleCategorySelected={handleCategorySelected}
        />
        :
        <Home handleCategorySelected={handleCategorySelected} />
      }
      <StatusBar style="light" backgroundColor={colors.purple3} />
    </>
  );
}

const styles = StyleSheet.create({});
