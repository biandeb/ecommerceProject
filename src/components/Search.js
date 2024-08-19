import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

import { colors } from "../global/colors";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState('')

  const handleInputChange = (t) => {
    setInput(t);
  };

  const handleRemoveInput = () => {
    setInput("");
    onSearch("");
    setError('')
  };

  const search = () => {
    const regex = /[^a-zA-Z0-9 ]/
    if(regex.test(input)){
        setError('The characters are not valid.')
    } else {
        setError('');
        onSearch(input);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          //   placeholderTextColor='#fff'
          placeholder="Search product"
          value={input}
          onChangeText={handleInputChange}
        />
        <View style={styles.buttonContainer}>
          <Pressable style={styles.search} onPress={search}>
            <FontAwesome5 name="search" size={25} color="grey" />
          </Pressable>
          <Pressable style={styles.remove} onPress={handleRemoveInput}>
            <MaterialIcons name="cancel" size={29} color="grey" />
          </Pressable>
        </View>
      </View>
        <Text style={styles.error}>{error}</Text>
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
    container:{
        margin: 5,
        marginTop:10,
    },
  containerInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: colors.beige1,
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: "75%",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 3,
    marginStart: 10,
  },
  error:{
    color:'red',
    marginLeft:25,
  },
  remove:{
    marginBottom:1,
  },
  search:{
    marginTop:3,
  }
});
