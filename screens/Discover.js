import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { attractions, avatar, hotel, NotFound, restaurant } from '../assets';
import MenuContainer from './MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemContainer from './ItemContainer';
import { getPlacesData } from '../components/api';


const Discover = () => {
    const navigation = useNavigation();
const [type, setType] = useState("hotels");
const [isLoading, setIsLoading] = useState(false);
const [mainData, setMainData] = useState([]);
const [bl_lat, setBl_lat] = useState(null)
const [bl_lng, setBl_lng] = useState(null)
const [tr_lat, setTr_lat] = useState(null)
const [tr_lng, setTr_lng] = useState(null)


useLayoutEffect(() => {
navigation.setOptions({
  headerShown:false,
});
}, []);

useEffect(() =>{
  setIsLoading(true)
  getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
    setMainData(data);
    setInterval(() => {
      setIsLoading(false)
    }, 2000);
  })
}, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

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
     GooglePlacesDetailsQuery={{fields: "geometry"}}
      placeholder='Search'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details?.geometry?.viewport);
        setBl_lat(details?.geometry?.viewport?.southwest.lat)
        setBl_lng(details?.geometry?.viewport?.southwest.lng)
        setTr_lat(details?.geometry?.viewport?.northeast.lat)
        setTr_lng(details?.geometry?.viewport?.northeast.lng)
      }}
      query={{
        key: 'AIzaSyBJiFdK0nReK_23jSlPha3mQ3h1rXCIA1c',
        language: 'en',
      }}
    />
     </View>
{isLoading ? <View className="flex-1 items-center justify-center"><ActivityIndicator size="large" color="#00ff00" /></View> : 
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
                    <FontAwesome name="long-arrow-right" size={24} color="blue" />
                </TouchableOpacity>
            </View>
            <View className="flex-row px-4 mt-8 justify-evenly items-center flex-wrap">
              {mainData?.length > 0 ? 
              (<>
             {mainData?.map((data, i) => (
              <ItemContainer 
              key={i}
              imageSrc={
                data?.photo?.images?.medium?.url ? 
                data?.photo?.images?.medium?.url :
                "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"

              }
              title={data?.name} 
              location={data?.location_string}
              data={data}
              />
             ))}
            
                </>) : (
                  <>
                  <View className="w-full h-[300px] items-center justify-center space-y-4">
                    <Image 
                    source={NotFound}
                    className="w-32 h-32 object-cover"/>
                    <Text className="text-2xl font-semibold text-gray-900">
                      Ooops... No Data Found!!
                      
                    </Text>

                  </View>
                  </>
                )}
            </View>
        </View>
     </ScrollView>
}
    </SafeAreaView>
  )
}

export default Discover