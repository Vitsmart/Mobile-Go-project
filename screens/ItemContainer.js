import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const ItemContainer = ({imageSrc, title, location}) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 py-2 px-3 shadow-md bg-white w-[152px] my-2">
      <Image
      source={{uri: imageSrc}}
      className="w-full h-40 rounded-md object-cover"
      />
      <Text className="text-blue-500 texl-[24px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}..`: title}
      </Text>

      <View className="flex-row items-center space-x-1">
<FontAwesome5 name="map-marker-alt" size={20} color="black" />
      <Text className="text-blue-300 texl-[14px] font-bold">
        {location?.length > 18 ? `${title.slice(0, 18)}..`: location}
      </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemContainer