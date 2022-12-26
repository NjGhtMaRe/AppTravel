import React from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  Pressable,
  View,
  ScrollView,
} from 'react-native';
import styles from './styles';

const AttractionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImage = item?.images?.length ? item?.images.slice(0, 5) : [];
  const diffImage = item?.images?.length - slicedImage?.length;

  const onBack = () => {
    navigation.goBack();
  };
  console.log(item);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          imageStyle={{borderRadius: 20}}
          style={styles.mainImage}
          source={{uri: mainImage}}>
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
          <View style={styles.footerContainer}>
            {slicedImage?.map((image, index) => (
              <Pressable key={image}>
                <Image style={styles.miniImage} source={{uri: image}} />
                {diffImage > 0 && index === slicedImage?.length - 1 ? (
                  <View style={styles.moreImageContainer}>
                    <Text style={styles.moreImage}>{`+${diffImage}`}</Text>
                  </View>
                ) : null}
              </Pressable>
            ))}
          </View>
        </ImageBackground>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.title}>{item?.name}</Text>
            <Text style={styles.city}>{item?.city}</Text>
          </View>
          <Text style={styles.price}>{item?.entry_price}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
