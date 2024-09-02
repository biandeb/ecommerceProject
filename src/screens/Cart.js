import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import CartItem from '../components/CartItem'
import { colors } from '../global/colors'

const Cart = () => {
  const cart = useSelector(state => state.cart)

  return (
    <View style={styles.container}>
      <FlatList 
      data={cart.items}
      keyExtractor={item => item.id}
      renderItem={({item}) => <CartItem 
      item={item}
      />
      }
      />
      <View style={styles.containerConfirm}>
        <Text style={styles.textConfirm}>Confirm</Text>
        <Text style={styles.textTotal}>Total: {cart.total} $</Text>
      </View>
    </View>
  )
}
export default Cart

const styles = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
    flex: 0.85,
  },
  containerConfirm:{
    backgroundColor: colors.purple3,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textConfirm:{
    color: 'white',
    fontSize: 20,
  },
})