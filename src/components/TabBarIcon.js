import { StyleSheet, Text, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const TabBarIcon = ({ text, icon, focused }) => {
  return (
    <View style={styles.container}>
      <FontAwesome 
      style={styles.icon} 
      name={icon} 
      size={28} 
      color={focused ? '#2b222c' :'#965d62'} /> 
      <Text style={{color:focused ? '#2b222c' : '#965d62'}}>{text}</Text>
    </View>
  );
};
export default TabBarIcon;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        gap: 5,
    },
});
