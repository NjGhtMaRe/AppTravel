import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';

const Map = ({navigation, route}) => {
  const {coordinates, name, city} = route?.params || {};

  const coords = {
    latitude: coordinates?.lat,
    longitude: coordinates?.lon,
    latitudeDelta: 0.007,
    longitudeDelta: 0.007,
  };

  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={coords}>
        <Marker coordinate={coords} title={name} />
      </MapView>
      <View style={styles.headerContainer}>
        <Pressable hitSlop={8} onPress={onBack}>
          <Image
            style={styles.backIcon}
            source={require('../../assets/back.png')}
          />
        </Pressable>
        <Pressable hitSlop={8} onPress={onBack}>
          <Text style={styles.text}>{`${name}, ${city}`}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default React.memo(Map);
