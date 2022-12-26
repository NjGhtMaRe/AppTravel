import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  mainImage: {
    flexDirection: 'column',
    width: '100%',
    height: height / 2,
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    marginBottom: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  miniImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginHorizontal: 6,
    margin: 8,
  },
  moreImageContainer: {
    position: 'absolute',
    top: 8,
    left: 6,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: 8,
  },
  moreImage: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
});

export default styles;
