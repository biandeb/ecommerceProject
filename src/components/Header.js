import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../global/colors'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}
export default Header

const styles = StyleSheet.create({
    container:{
        marginTop:22,
        marginBottom: 10,
        backgroundColor: colors.beige1,
        width:'100%',
        height:80,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:22,
    }
})