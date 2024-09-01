import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './ListCard.styles';

const ListCard = ({meals, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: meals.strMealThumb}} /> 
        <View style={styles.overlay}>
        <Text style={styles.list_title}>{meals.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListCard;
