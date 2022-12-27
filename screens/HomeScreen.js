import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { mainImage } from '../assets';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  const navigation = useNavigation();

useLayoutEffect(() => {
navigation.setOptions({
  headerShown:false,
});
}, []);

  return (
    <SafeAreaView className="bg-purple-600 flex-1 relative">
    <View className="flex-row px-6 mt-8 items-center space-x-2">
      <View className="w-16 h-16 bg-black rounded-full items-center justify-center ">
<Text className="text-blue-900 text-3xl font-semibold">Go</Text>
      </View>
    <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
    </View>
    <View className="px-6 mt-8 space-y-3">
      <Text className="text-yellow-50 text-[42px]">Enjoy the trip with</Text>
      <Text className="text-blue-900 text-[38px] font-semibold">Good Moments</Text>
    <Text className="text-gray-100 text-base">
    lorem ipsum   lorem ipsum   lorem ipsum  
    </Text>
    </View>
    <View className="w-[400px] h-[400px] bg-slate-400 rounded-full absolute bottom-36 -right-36"></View>
    <View className="w-[400px] h-[400px] bg-orange-400 rounded-full absolute -bottom-28 -left-36"></View>
    <View className="flex-1 relative items-center justify-center">
      <Animatable.Image
      animation="fadeIn"
      easing="ease-in-out"
      source={mainImage} 
      className="w-80 h-80 object-cover mt-20" 
      />
    
    
    
      <TouchableOpacity 
      onPress={() => navigation.navigate("Discover")}
      className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-purple-900 rounded-full justify-center items-center">
      <Animatable.View 
      animation={"pulse"}
      easing="ease-in-out"
      iterationCount={"infinite"}
      className="w-20 h-20 items-center justify-center rounded-full bg-purple-400">
        <Text className="text-gray-50 text-[40px] font-semibold">GO</Text>
      </Animatable.View>
      </TouchableOpacity>
    
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen