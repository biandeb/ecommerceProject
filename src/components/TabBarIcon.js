import { StyleSheet, Text, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const TabBarIcon = ({ text, icon }) => {
  return (
    <View style={styles.container}>
      <FontAwesome style={styles.icon} name={icon} size={28} color="black" /> 
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
export default TabBarIcon;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        gap: 5,
    },
    text:{
        fontWeight: 'bold'
    },
});
