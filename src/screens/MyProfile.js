import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import SubmitButton from "../components/SubmitButton";
import { useGetUserQuery } from "../services/shop";
import LoadingSpinner from "../components/LoadingSpinner";

const MyProfile = ({ navigation }) => {
  const [data, setData] = useState(null);

  const localId = useSelector((state) => state.auth.localId);
  const {
    data: user,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetUserQuery({ localId });

  useEffect(()=>{
    if(isSuccess) setData(user)
    if(isError) console.log(error)
  },[isSuccess,isError])



  if(isLoading) return <LoadingSpinner />
  if (!user) {
    return (
      <View style={styles.container}>
        <SubmitButton
          title="Add profile picture"
          onPress={() => navigation.navigate("ImageSelector")}
        />
        <SubmitButton
          title="Add location"
          onPress={() => navigation.navigate("LocationSelector")}
        />
      </View>
    );
  }


  return (
    <View style={styles.container}>
      {data && data.image ? <Image
        source={user.image ? {uri:user.image} : require("../../assets/profile-default.jpg")}
        resizeMode="cover"
        style={styles.image}
      /> : <Text>No image</Text>}
      <SubmitButton
        title="Add profile picture"
        onPress={() => navigation.navigate("ImageSelector")}
      />
      <SubmitButton
        title="Add location"
        onPress={() => navigation.navigate("LocationSelector")}
      />
      <FlatList
      data={user.locations} 
      keyExtractor={item => item.id}
      renderItem={({item}) => <View><Text>{item.address}</Text></View>}
      />
    </View>
  );
};
export default MyProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
});
