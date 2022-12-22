import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Title = ({text, style}) => {
  return (
    <View>
      <Text style={[styles.title, style]}>{text}</Text>
    </View>
  );
};

export default React.memo(Title);
