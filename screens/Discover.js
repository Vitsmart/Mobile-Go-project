import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { attractions, avatar, hotel, restaurant } from '../assets';
import MenuContainer from './MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemContainer from './ItemContainer';


const Discover = () => {
    const navigation = useNavigation();
const [type, setType] = useState("hotels");
useLayoutEffect(() => {
navigation.setOptions({
  headerShown:false,
});
}, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
     <View className="flex-row items-center justify-between px-8">
        <View>
      <Text className="text-[40px] text-blue-900 font-bold">Discover</Text>
      <Text className="text-blue-600 text-[35px]">the beauty today</Text>
     </View>
     <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
<Image 
source={avatar} 
className="w-full h-full rounded-md object-cover"/>
     </View>
     </View>
     <View className="flex-row items-center bg-gray-100 mx-2 rounded-xl py-1 px-2 shadow-xl">
     <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />
     </View>
     <ScrollView>
        <View className="flex-row px-8 mt-8 items-center justify-between">
        <MenuContainer 
        key={"hotel"}
        title="Hotels"
        imageSrc={hotel}
        type={type}
        setType={setType}
        />
        <MenuContainer 
        key={"attraction"}
        title="Attractions"
        imageSrc={attractions}
        type={type}
        setType={setType}
        />
        <MenuContainer 
        key={"restaurant"}
        title="Restaurants"
        imageSrc={restaurant}
        type={type}
        setType={setType}
        />
        </View>
        <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
                <Text className="text-blue-900 text-[28px] font-bold">Top Tips</Text>
                <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                    <Text className="text-blue-600 text-[20px] font-bold">Explore</Text>
                    <FontAwesome name="long-arrow-right" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View className="flex-row px-4 mt-8 justify-evenly items-center flex-wrap">
                <ItemContainer key={101} imageSrc={"https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"} title="Garden hotel" location="Nigeria"/>
                <ItemContainer key={102} imageSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL11fk_sy-xXhiy2Z-a7CoUSew7TCV6PwUdw&usqp=CAU"} title="Spring hotel" location="Abuja"/>

            </View>
        </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default Discover