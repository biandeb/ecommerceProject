import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import SubmitButton from "../components/SubmitButton";
import LoadingSpinner from "../components/LoadingSpinner";
import { useGetUserQuery } from "../services/users";

const MyProfile = ({ navigation, route }) => {
  const [data, setData] = useState(null);

  const localId = useSelector((state) => state.auth.localId);
  const { data: user, isSuccess, isLoading, refetch } = useGetUserQuery({ localId });

  useEffect(() => {
    if (route.params?.updated) {
      refetch();
    }
  }, [route.params?.updated]);

  useEffect(() => {
    if (isSuccess && user) setData(user);
  }, [user, isSuccess]);

  if (isLoading) return <LoadingSpinner />;
  
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
      {data && data.image ? (
        <Image
        source={{ uri: data.image }}
        resizeMode="cover"
        style={styles.image}
      />
      ) : (
        <View style={styles.noImageContainer}>
          <Text style={styles.noImageText}>No image available</Text>
        </View>
      )}

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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.address}>{item.address}</Text>
          </View>
        )}
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
  noImageContainer: {
    backgroundColor: "#f5f5f5",
    width: 120,
    height: 100,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  noImageText: {
    fontSize: 16,
    color: "grey",
    fontWeight: 'bold',
  },
  address:{
    fontWeight: 'bold',
  }
});
