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

  const onGallery = () => {
    navigation.navigate('Gallery');
  };
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
              <Pressable onPress={onGallery} key={image}>
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.miniIcon}
            source={require('../../assets/location_circle.png')}
          />
          <Text style={{fontSize: 12}}>{item?.address}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.miniIcon}
            source={require('../../assets/schedule.png')}
          />
          <View>
            <Text style={{fontSize: 12}}>OPEN</Text>
            <Text
              style={{
                fontSize: 12,
              }}>{`${item?.opening_time} - ${item?.closing_time}`}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
