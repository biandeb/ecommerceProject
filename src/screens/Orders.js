import { FlatList, StyleSheet, Text, View } from 'react-native'

import OrderItem from '../components/OrderItem'
import { useGetOrdersByUserQuery } from '../services/shop'

const Orders = () => {
  const {data:orders, isSuccess, isError, error, isLoading} = useGetOrdersByUserQuery('1')

  if(isLoading) return <View><Text>Loading</Text></View>

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