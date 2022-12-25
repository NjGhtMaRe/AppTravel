import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const AttractionCards = ({images, title, style, city, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image style={styles.images} source={{uri: images}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.city}>{city}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AttractionCards);
