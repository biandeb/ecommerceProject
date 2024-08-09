import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

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
        backgroundColor: colors.purple1,
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        width:'90%',
        marginHorizontal: '5%',
        gap:10,
        borderRadius:9,
        },
    title:{
        width:'70%',
        color:'white',
        fontWeight:'bold',

    },
    image:{
        width:64,
        height:64,
        color:'white',
    },
})