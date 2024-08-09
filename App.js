import { StatusBar } from "expo-status-bar";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Home from "./src/screens/Home";
import ItemListCategories from "./src/screens/ItemListCategories";
import ItemDetail from "./src/screens/ItemDetail";
import { colors } from "./src/global/colors";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");

  const handleCategorySelected = (category) => {
    setCategorySelected(category);
  };

  const handleGoBack = () => {
    setCategorySelected("");
  };

  return (
    <>
      {categorySelected ? (
        <View style={{ flex: 1 }}>
          <ItemListCategories category={categorySelected} />
          <Pressable style={styles.button} onPress={handleGoBack}>
            <Text style={styles.buttonText}>Go Back</Text>
          </Pressable>
        </View>
      ) : (
        <Home handleCategorySelected={handleCategorySelected} />
      )}
      {/* {<ItemDetail id={1} />} */}
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.beige0,
    paddingVertical: 10,
    width:'25%',
    marginTop:20,
    marginStart: 285,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
