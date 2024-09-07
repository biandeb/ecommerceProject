import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Location from "expo-location";

import MapPreview from "../components/MapPreview";

const LocationSelector = () => {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
    address: "",
  });

  // Para poder hacerlo asincronico
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted') return
      const newLocation = await Location.getCurrentPositionAsync()
setLocation({
    ...location,
    latitude: newLocation.coords.latitude,
    longitude: newLocation.coords.longitude,
})
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        {location.latitude}dd{location.longitude}
        <MapPreview location={location} />
      </Text>
    </View>
  );
};
export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});
