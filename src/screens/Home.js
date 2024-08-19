import { StyleSheet } from "react-native";

import Header from "../components/Header";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title="Galaxy Store"/>
      <Categories />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container:{
    width:"100%",
  }
});
