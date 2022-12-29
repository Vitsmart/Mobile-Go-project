import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const ItemScreen = ({ route}) => {
    const navigation = useNavigation();
    
useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    });
    }, []);

    const data = route?.params?.param;
    
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="bg-white relative shadow-lg">
          <Image 
          source={
            {uri:
              data?.photo?.images?.large?.url ? 
              data?.photo?.images?.large?.url :
              "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
}
          }
          className="w-full h-72 object-cover rounded-2xl"/>
          <View className="flex-row absolute inset-x-0 top-5 px-6 justify-between ">
<TouchableOpacity 
 onPress={() => navigation.navigate("Discover")}
className="w-10 h-10 items-center justify-center bg-white rounded-md">
<Entypo name="chevron-left" size={24} color="blue" />
</TouchableOpacity>
<TouchableOpacity className="w-10 h-10 items-center justify-center bg-blue-400 rounded-md">
<FontAwesome name="heartbeat" size={24} color="white" />
</TouchableOpacity>
          </View>
          <View className="flex-row absolute inset-x-0 bottom-5 px-6 justify-between">
            <View className="flex-row items-center space-x-2">
<Text className="text-[12px] text-gray-100 font-bold">
  {data?.price_level}
</Text>
<Text className="text-[12px] text-gray-100 font-bold">
  {data?.price}
</Text>
            </View>
<View className="px-2 py-1 rounded-md bg-gray-100">
  <Text>{data?.open_now_text}</Text>
</View>
          </View>
        </View>

<View className="mt-6">
  <Text className="text-[24px] text-blue-400 font-bold">
{data?.name}
  </Text>
  <View className="flex-row mt-2 space-x-2 items-center">
  <FontAwesome name="map-marker" size={24} color="blue" />
    <Text>{data?.location_string}</Text>
  </View>
</View>
<View className="flex-row items-center justify-between mt-4">
  {data?.rating && (
    <View className="flex-row items-center space-x-2">
<View>
<Entypo name="star" size={24} color="pink" />
</View>
<View>
  <Text className="text-blue-300">{data?.rating}</Text>
  <Text className="text-blue-300">Ratings</Text>
</View>

    </View>
  )}
   {data?.price_level && (
    <View className="flex-row items-center space-x-2">
<View>
<FontAwesome5 name="money-bill-alt" size={24} color="black" />
</View>
<View>
  <Text className="text-blue-300">{data?.price_level}</Text>
  <Text className="text-blue-300">Price level</Text>
</View>

    </View>
  )}
  {data?.bearing && (
    <View className="flex-row items-center space-x-2">
<View>
<FontAwesome5 name="map-signs" size={24} color="black" />
</View>
<View>
  <Text className="text-blue-300 capitalize">{data?.bearing}</Text>
  <Text className="text-blue-300">Bearing</Text>
</View>

    </View>
  )}

{data?.description && ( 
  <Text className="text-[16px] mt-4 tracking-wide font-semibold text-blue-50">{data?.description}</Text>
  )}


</View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default ItemScreen