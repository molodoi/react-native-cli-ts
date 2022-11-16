import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const SearchScreen = () => {

    const search = () => {
        console.log('search');
    };

    return (
        <View className="flex flex-1 p-4 bg-sky-100">
            <TextInput
                className="w-full appearance-none text-base bg-white rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Paris"
                autoCapitalize="none"
            />
            <TouchableOpacity
                className="flex w-full items-center mt-3 rounded-md border border-transparent bg-indigo-600 p-4 focus:outline-none"
                onPress={search}
            >
                <Text className="text-white text-lg font-bold">Search</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SearchScreen;