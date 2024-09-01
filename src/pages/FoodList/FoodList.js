import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import Config from 'react-native-config';
import ListCard from '../../components/Card/ListCard';

const FoodList = ({route, navigation}) => {
  const {strCategory} = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchListData();
  }, []);  

  const fetchListData = async () => {
    try {
      const { data: listData } = await axios.get(`${Config.ANOTHER_API_URL}filter.php?c=${strCategory}`);
      setData(listData.meals);
    } catch (error) {
      console.error(error);
    }
  };

  const handleListSelect = idMeal => {
    navigation.navigate('FoodDetailPage', {idMeal});
  }

  const renderFoodList = ({ item }) => (
    <ListCard meals={item} 
    onSelect={() => handleListSelect (item.idMeal)}/>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffa500'}}>
      <FlatList
        data={data}
        renderItem={renderFoodList}
        keyExtractor={item => item.idMeal.toString()}
      />
    </SafeAreaView>
  );
};

export default FoodList;
