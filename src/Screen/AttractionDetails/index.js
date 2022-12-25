import React from 'react';
import {Text, SafeAreaView} from 'react-native';

const AttractionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  return (
    <SafeAreaView>
      <Text>Test</Text>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
