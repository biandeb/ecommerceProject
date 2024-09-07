import { Image, StyleSheet, View } from 'react-native'

import SubmitButton from '../components/SubmitButton'

const MyProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image 
      source={require('../../assets/profile-default.jpg')}
      resizeMode='cover'
      style={styles.image}
      />
      <SubmitButton title='Add profile picture' onPress={() => navigation.navigate('ImageSelector')} />
      <SubmitButton title='Add localization' onPress={() => navigation.navigate('LocationSelector')} />
    </View>
  )
}
export default MyProfile;

const styles = StyleSheet.create({
        container:{
            marginTop:70,
            alignItems:"center",
            gap:20,
        },
        image:{
            width:150,
            height:150,
            borderRadius: 20
    }
})