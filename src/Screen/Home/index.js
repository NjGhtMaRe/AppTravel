import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import jsonData from '../../data/attractions.json';
import categoriesData from '../../data/categories.json';
import Categories from '../../components/Categories';

const ALL = 'All';
const Home = () => {
  const [data, setData] = useState('');
  const [categories, setCategories] = useState([ALL, ...categoriesData]);
  const [selectedCategory, setSelectedCategory] = useState(ALL);

  useEffect(() => {
    setData(jsonData);
    console.log(data);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => String(item?.id)}
        ListHeaderComponent={
          <>
            <View style={styles.headerContainer}>
              <Title text={'Where do'} />
              <Title text={'you want to go?'} style={{fontWeight: 'bold'}} />
              <Title
                text={'Explore Attractions'}
                style={{
                  fontSize: 24,
                  color: 'black',
                  marginTop: 32,
                  marginBottom: 32,
                }}
              />
              <View>
                <Categories
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryPress={setSelectedCategory}
                />
              </View>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
