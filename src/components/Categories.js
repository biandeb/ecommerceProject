import { FlatList, StyleSheet } from 'react-native'

import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../services/shop'

const Categories = () => {
  const {data:categories} = useGetCategoriesQuery()

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