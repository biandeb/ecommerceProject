import { StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";
import Categories from "../components/Categories";

const Home = ({handleCategorySelected}) => {
  return (
    <>
      <Header title="Galaxy Store" />
      <Categories handleCategorySelected={handleCategorySelected} />
    </>
  );
};
export default Home;
const styles = StyleSheet.create({});
