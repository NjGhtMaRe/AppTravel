import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';

const Map = ({navigation, route}) => {
  const {coordinates, name} = route?.params || {};
  console.log(coordinates);
  const coords = {
    latitude: coordinates?.lat,
    longitude: coordinates?.lon,
    latitudeDelta: 0.007,
    longitudeDelta: 0.007,
  };
  return (
    <View>
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={coords}>
          <Marker key={coordinates} coordinate={coords} title={name} />
        </MapView>
      </View>
      <View styles={styles.headerContainer}>
        <Image
          style={styles.backIcon}
          source={require('../../assets/back.png')}
        />
      </View>
    </View>
  );
};

export default React.memo(Map);
