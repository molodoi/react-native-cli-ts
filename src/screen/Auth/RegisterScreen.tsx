import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import VanSvg from '../../image/van.svg';
import type { StackScreenProps } from '@react-navigation/stack';
import RootStackParamList from '../../types/types';

type RegisterProps = StackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen = ({ navigation } : RegisterProps) => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return (
        <View className='flex flex-1 justify-center items-center p-4 bg-sky-100'>   
            <VanSvg width={128} height={128} />
            <Text className="mb-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register</Text>
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
            <TextInput
                className="w-full appearance-none text-base bg-white mb-2 rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
            />
            <TextInput
                className="w-full appearance-none text-base bg-white rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Confirm password"
                secureTextEntry={true}
                autoCapitalize="none"
            />
            <TouchableOpacity
                className="flex w-full items-center mt-3 rounded-md border border-transparent bg-indigo-600 p-4 focus:outline-none"
                onPress={onPress}
            >
                <Text className="text-white text-lg font-bold">Register Me</Text>
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

export default RegisterScreen;