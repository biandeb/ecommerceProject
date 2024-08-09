import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { colors } from "../global/colors";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

const Search = ({onSearch}) => {
    const [input, setInput] = useState('')

    const handleInputChange = (t) => {
        setInput(t)
    }

    const handleRemoveInput = () => {
        setInput('')
        onSearch('')
    }

    const search = () => {
        onSearch(input)
    }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        //   placeholderTextColor='#fff'
        placeholder="Search product"
        value={input}
        onChangeText={handleInputChange}
      />
      <View style={styles.buttonContainer}>
      <Pressable onPress={search}>
        <FontAwesome5 name="search" size={25} color="grey" />
      </Pressable>
      <Pressable onPress={handleRemoveInput}>
        <MaterialIcons name="cancel" size={29} color="grey" />
      </Pressable>
    </View>
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:'center',
    alignItems: "center",
  },
  input: {
    backgroundColor: colors.beige1,
    margin: 10,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: "75%",
  },
  buttonContainer:{
    flexDirection: "row",
    gap:7,
    marginBottom:2,
  },
});
