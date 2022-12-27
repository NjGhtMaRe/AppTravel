import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    paddingBottom: 40,
  },
  backIcon: {
    width: 50,
    height: 50,
    margin: 8,
  },
  headerContainer: {
    position: 'absolute',
    width: width - 58,
    top: 50,
    left: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
