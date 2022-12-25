import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  mainImage: {
    width: '100%',
    height: height / 2,
  },
  iconBack: {
    width: 32,
    height: 32,
    marginTop: 10,
    marginLeft: 10,
  },
  iconShare: {
    width: 32,
    height: 32,
    marginTop: 10,
    marginRight: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
});

export default styles;
