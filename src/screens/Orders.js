import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import OrderItem from '../components/OrderItem'
import { useGetOrdersByUserQuery } from '../services/shop'
import LoadingSpinner from '../components/LoadingSpinner'

const Orders = () => {
  const localId = useSelector(state => state.auth.localId)
  const {data:orders, isLoading } = useGetOrdersByUserQuery(localId)

  if(isLoading) return <LoadingSpinner />
  if(orders.length === 0) return <View><Text>Empty</Text></View>
  
  return (
    <View>
      <FlatList 
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <OrderItem 
      item={item}
      />
      }
      />
    </View>
  )
}
export default Orders

const styles = StyleSheet.create({})