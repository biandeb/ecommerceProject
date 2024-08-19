import { SafeAreaView, StyleSheet } from "react-native";

import Header from "../components/Header";
import Categories from "../components/Categories";

const Home = ({handleCategorySelected}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Galaxy Store"/>
      <Categories handleCategorySelected={handleCategorySelected}/>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container:{
    width:"100%"
  }
});
