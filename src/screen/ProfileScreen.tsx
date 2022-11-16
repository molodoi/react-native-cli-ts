import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

export default function ProfileScreen() {
  const onPress = () => {
    console.log('Save');
  };
  return (
    <View className='flex flex-1 p-4 bg-sky-100'>
      <View className='flex flex-row w-full items-center h-40 p-4 mb-3 rounded-lg bg-white'  style={styles.shadow}>
          <Image source={require('../image/profile.jpg')} style={{ width:110,height:110, borderRadius: 110/2 }}/>
          <View className='p-4'>
            <Text className='text-dark text-lg font-bold'>Jane Doe</Text>
            <Text className='text-dark'>jane.doe@gmail.com</Text>
          </View>          
      </View> 
      <TextInput
          className="w-full appearance-none text-base bg-white mb-1 rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          placeholder="Username"
          autoCapitalize="none"
      />
      <TextInput
          className="w-full appearance-none text-base bg-white mb-1 rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          placeholder="Email address"
          keyboardType="email-address"
          autoCapitalize="none"
      />
      <TouchableOpacity
          className="flex w-full items-center mt-3 rounded-md border border-transparent bg-indigo-600 p-4 focus:outline-none"
          onPress={onPress}
      >
          <Text className="text-white text-lg font-bold">Save</Text>
      </TouchableOpacity>       
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 4,
  }
})