import React, {useState, useEffect} from "react";
import {Text, FlatList, SafeAreaView} from 'react-native';
import axios from "axios";
import Config from "react-native-config";
import DetailCard from "../../components/Card/DetailCard/DetailCard";

const FoodDetail = ({route}) => {
    const {idMeal} = route.params;
    console.log(idMeal);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchDetailData();
    }, []);

    const fetchDetailData = async () => {
        const {data: detailData} = await axios.get(`${Config.ANOTHER_API_URL}lookup.php?i=${idMeal}`)
        //console.log(`${Config.ANOTHER_API_URL}lookup.php?i=${idMeal}`)
        setData(detailData.meals);
        //console.log(detailData.meals);
    };

    const renderDetailItem = ({item}) => {
       return(
         <DetailCard details={item}/>
       )
        
    }
    return(
        <SafeAreaView>
            <FlatList 
            data={data}
            renderItem={renderDetailItem}
            keyExtractor={item => item.idMeal.toString()}
            />
        </SafeAreaView>
    )
}

export default FoodDetail;