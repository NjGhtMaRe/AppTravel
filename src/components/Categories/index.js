import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({item}) => {
        const selected = selectedCategory === item;
        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.categoriesContainer,
              selected ? styles.selectedCategoriesContainer : {},
            ]}>
            <Text style={[styles.text, selected ? styles.selectedText : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default React.memo(Categories);
