import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';
import CategorieCard from '../../components/Card/CategorieCard';

const Categories = ({navigation}) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {data: categotieData} = await axios.get(Config.API_URL);
      setData(categotieData.categories);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleCategorieSelect = strCategory => {
    navigation.navigate('FoodListPage', {strCategory});
  }

  const renderCategorie = ({item}) => (
    <CategorieCard 
      categories={item} 
      onSelect={() => handleCategorieSelect(item.strCategory)} 
    />
  );
  
  

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#ffa500'}}>
      <FlatList
        data={data}
        renderItem={renderCategorie}
        keyExtractor={item => item.idCategory.toString()}
      />
    </SafeAreaView>
  );
};

export default Categories;
