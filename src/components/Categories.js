import { FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import CategoryItem from './CategoryItem'

const Categories = () => {
  const categories = useSelector(state => state.shop.categories)

  return (
      <FlatList 
      data={categories}
      keyExtractor={item => item}
      renderItem={({item}) => <CategoryItem item={item} />}
      />
  )
}
export default Categories

const styles = StyleSheet.create({})