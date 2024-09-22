import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../global/colors";

const ProductItem = ({ product }) => {
  const {width, height} = useWindowDimensions()
  const navigation = useNavigation()


  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('Details', {id:product.id})}>
      <Text style={[styles.title, width < 300 ? styles.titleMin : styles.titleMax]}>{product.title}</Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: product.thumbnail }}
      />
    </Pressable>
  );
};
export default ProductItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple1,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "90%",
    marginHorizontal: "5%",
    gap: 10,
    borderRadius: 9,
  },
  title: {
    width: "70%",
    color: "white",
    fontWeight: "bold",
    fontSize:20,
  },
  titleMin:{
    width: "70%",
    fontSize:14,
    color: "white",
    fontWeight: "bold",
  },
  titleMax:{
    width: "70%",
    fontSize:20,
    color: "white",
    fontWeight: "bold",
  },
  image: {
    minWidth: 80,
    width: '20vw',
    maxWidth: 150,
    minHeight:80,
    height: '20vw',
    maxWidth: 150,
    color: 'white',
  },
});
