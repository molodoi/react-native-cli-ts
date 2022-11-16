import React from 'react';
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import VanSvg from '../../image/van.svg';
import type { StackScreenProps } from '@react-navigation/stack';
import RootStackParamList from '../../types/types';

type ForgetPasswordProps = StackScreenProps<RootStackParamList, 'ForgetPassword'>;

const ForgetPasswordScreen = ({ navigation } : ForgetPasswordProps) => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    return (
        <View className='flex flex-1 justify-center items-center p-4 bg-sky-100'>
            <VanSvg width={128} height={128} />
            <Text className="mt-3 mb-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Forget Password
            </Text>
            <TextInput
                className="w-full appearance-none text-base bg-white rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Email address"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TouchableOpacity
                className="flex w-full items-center mt-3 rounded-md border border-transparent bg-indigo-600 p-4 focus:outline-none"
                onPress={onPress}
            >
                <Text className="text-white text-lg font-bold">Reset Password</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
                className="flex w-full items-center mt-3 rounded-md border p-4 focus:outline-none bg-slate-50"
                onPress={() => navigation.navigate('Login')}
            >
                <Text className="text-dark text-lg font-bold">Back to Login</Text>
            </TouchableOpacity> */}
        </View>
    );
}

export default ForgetPasswordScreen;