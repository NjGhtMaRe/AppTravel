import React from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  Pressable,
  View,
} from 'react-native';
import styles from './styles';

const AttractionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};

  const onBack = () => {
    navigation.goBack();
  };
  console.log(item);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.mainImage} source={{uri: item?.images[0]}}>
        <View style={styles.headerContainer}>
          <Pressable hitSlop={8} onPress={onBack}>
            <Image
              style={styles.iconBack}
              source={require('../../assets/back.png')}
            />
          </Pressable>
          <Pressable hitSlop={8}>
            <Image
              style={styles.iconShare}
              source={require('../../assets/share.png')}
            />
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
