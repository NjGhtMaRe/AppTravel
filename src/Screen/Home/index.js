import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import jsonData from '../../data/attractions.json';
import categoriesData from '../../data/categories.json';
import Categories from '../../components/Categories';
import AttractionCards from '../../components/AttractionCards';
import {useNavigation} from '@react-navigation/native';

const ALL = 'All';
const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState('');
  const [categories, setCategories] = useState([ALL, ...categoriesData]);
  const [selectedCategory, setSelectedCategory] = useState(ALL);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filterData = jsonData.filter(item =>
        item?.categories.includes(selectedCategory),
      );
      setData(filterData);
    }
  }, [selectedCategory]);

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
        ListEmptyComponent={<Text style={styles.empty}>No item found.</Text>}
        renderItem={({item, index}) => (
          <AttractionCards
            onPress={() => navigation.navigate('AttractionDetails', {item})}
            key={item?.id}
            images={item?.images.length ? item?.images[0] : null}
            title={item?.name}
            city={item?.city}
            style={
              index % 2 === 0
                ? {marginRight: 12, marginLeft: 32}
                : {marginRight: 32}
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
