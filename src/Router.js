import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories/Categories';
import FoodList from './pages/FoodList/FoodList';
import FoodDetail from './pages/FoodDetail/FoodDetail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            title: 'Categories',
            headerTitleStyle: {color: '#ffa500'},
          }}
        />
        <Stack.Screen
          name="FoodListPage"
          component={FoodList}
          options={{
            title: 'Categories',
            headerTitleStyle: {color: '#ffa500'},
          }}
        />
        <Stack.Screen name="FoodDetailPage" component={FoodDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
