import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuContainer = ({title, imageSrc, type, setType}) => {

    const handlePress = () =>{
        setType(title.toLowerCase());
    }
  return (
    <TouchableOpacity className="items-center justify-center space-y-2"
    onPress={handlePress}>
    <View className={`w-28 h-28 p-2 shadow-sm  ${ type === title.toLowerCase() ? "bg-gray-300" : ""}`
    } >
        <Image 
        source={imageSrc}
        className="w-full h-full object-contain"
        />

    </View>
    <Text className="text-blue-900 text-xl font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer