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
import MapView, {Marker} from 'react-native-maps';
import Share from 'react-native-share';
import ImgToBase64 from 'react-native-image-base64';
import styles from './styles';

const AttractionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImage = item?.images?.length ? item?.images.slice(0, 5) : [];
  const diffImage = item?.images?.length - slicedImage?.length;

  console.log(item);
  console.log(mainImage);

  ImgToBase64.getBase64String(mainImage)
    .then(base64String => console.log(base64String))
    .catch(err => console.log(err));

  const onBack = () => {
    navigation.goBack();
  };

  const onShare = async () => {
    try {
      const imageWithoutParams = mainImage.split('?')[0];
      const imagePart = imageWithoutParams.split('.');
      const imageExtension = imagePart[imagePart.length - 1];
      const base64Image = await ImgToBase64.getBase64String(mainImage);

      Share.open({
        message: 'This is share',
        url: `data:image/${imageExtension || 'jpg'};base64,${base64Image}`,
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          err && console.log(err);
        });
    } catch (e) {
      console.log('Sharing error: ', e);
    }
  };

  const onGallery = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };

  const onMap = () => {
    navigation.navigate('Map', {
      coordinates: item?.coordinates,
      name: item?.name,
      city: item?.city,
    });
  };
  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0.007,
    longitudeDelta: 0.007,
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
            <Pressable hitSlop={8} onPress={onShare}>
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
        <View>
          <MapView style={styles.map} initialRegion={coords}>
            <Marker key={item.id} coordinate={coords} title={item.name} />
          </MapView>
        </View>
        <Pressable hitSlop={8} onPress={onMap}>
          <Text style={styles.textMap}>Show full map location</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
