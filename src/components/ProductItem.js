import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const ProductItem = ({product}) => {
  return (
    <Pressable style={styles.container} >
      <Text style={styles.title}>{product.title}</Text>
      <Image 
      style={styles.image}
      resizeMode='cover'
      source={{uri:product.thumbnail}}
      />
    </Pressable>
  )
}
export default ProductItem

const styles = StyleSheet.create({
    container:{

    },
    title:{
        width:64,
        height:64,
    },
    image:{

    },
})