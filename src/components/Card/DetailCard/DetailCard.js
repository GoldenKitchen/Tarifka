import React from 'react';
import styles from './DetailCard.styles';
import {Image, View, Text, SafeAreaView, Button, Linking, TouchableOpacity} from 'react-native';

const DetailCard = ({details}) => {

    const openYouTube = () => {
        const url = 'https://www.youtube.com/';
        Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
      };

  return (
    <SafeAreaView>
      <Image style={styles.image} source={{uri: details.strMealThumb}} />
      <View style={styles.container}>
        <Text style={styles.meal_title}>{details.strMeal}</Text>
        <Text style={styles.meal_area}>{details.strArea}</Text>
        <Text style={styles.meal_int}>{details.strInstructions}</Text>
      </View>
      <TouchableOpacity onPress={openYouTube}>
      <View style={styles.button_container}>
        <Text 
        style={{
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold'
        }}
        >Watch on YouTube</Text>
      </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailCard;
