import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.3)',
    marginBottom: 14,
    marginTop: 16,
  },
  images: {
    width: width / 2 - 44,
    height: 100,
    borderRadius: 20,
    margin: 4,
  },
  icon: {
    width: 12,
    height: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 4,
    marginLeft: 10,
  },
  city: {
    marginLeft: 6,
    fontWeight: 'bold',
    fontSize: 10,
    color: 'rgba(0,0,0,0.2)',
  },
});

export default styles;
