import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddSpotScreen = () => {

    const addSpot = () => {
        console.log('addSpot');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View className='flex flex-1 justify-center items-center p-4 bg-sky-100'> 
                <Text className="mt-3 mb-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Add spot
                </Text>
                <TextInput
                    className="w-full appearance-none text-base bg-white mb-2 rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    placeholder="Latitude"
                    autoCapitalize="none"
                />
                <TextInput
                    className="w-full appearance-none text-base bg-white mb-2 rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    placeholder="Longitude"
                    autoCapitalize="none"
                />
                <TextInput
                    className="w-full appearance-none text-base bg-white mb-2 rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    placeholder="Adresse: 1 avenue de la Liberté"
                    autoCapitalize="none"
                />
                <TextInput
                    className="w-full appearance-none text-base bg-white mb-2 rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    placeholder="Adresse: 1 avenue de la Liberté"
                    autoCapitalize="none"
                />
                <TextInput
                    className="w-full appearance-none text-base bg-white mb-2 rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    placeholder="Adresse: 1 avenue de la Liberté"
                    autoCapitalize="none"
                />
                <TextInput
                    className="w-full appearance-none text-base bg-white mb-2 rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    placeholder="Adresse: 1 avenue de la Liberté"
                    autoCapitalize="none"
                />
                <TextInput
                    className="w-full appearance-none text-base bg-white mb-2 rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    placeholder="Ville"
                    autoCapitalize="none"
                />
                <TextInput
                    className="w-full appearance-none text-base bg-white mb-2 rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    placeholder="Code Postal"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    className="flex w-full items-center mt-3 rounded-md border border-transparent bg-green-600 p-4 focus:outline-none"
                    onPress={addSpot}
                >
                    <Text className="text-white text-lg font-bold">Locate</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="flex w-full items-center mt-3 rounded-md border border-transparent bg-indigo-600 p-4 focus:outline-none"
                    onPress={addSpot}
                >
                    <Text className="text-white text-lg font-bold">Add Spot</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default AddSpotScreen;

const styles = StyleSheet.create({
    scrollView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})