import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  categoriesContainer: {
    // marginLeft: 32,
    marginRight: 16,
  },
  selectedCategoriesContainer: {
    borderBottomWidth: 1,
    borderColor: '#099129',
  },
  text: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 14,
  },
  selectedText: {
    color: 'black',
    borderBottomWidth: 1,
    borderColor: '#099129',
    fontWeight: 'bold',
  },
});

export default styles;
