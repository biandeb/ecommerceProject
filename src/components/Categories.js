import { FlatList, StyleSheet, Text, View } from 'react-native'

import categories from '../data/categories.json'
import CategoryItem from './CategoryItem'

const Categories = ({handleCategorySelected}) => {
  return (
      <FlatList 
      data={categories}
      keyExtractor={item => item}
      renderItem={({item}) => <CategoryItem item={item} handleCategorySelected={handleCategorySelected} />}
      />
  )
}
export default Categories

const styles = StyleSheet.create({})