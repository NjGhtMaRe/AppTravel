import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import styles from './styles';

const Gallery = ({route, navigation}) => {
  const {images} = route?.params || {};

  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={images}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <Image style={styles.image} source={{uri: item}} />
          )}
        />
        <TouchableOpacity onPress={onBack} style={styles.backContainer}>
          <Image
            style={styles.backIcon}
            source={require('../../assets/back.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Gallery);
