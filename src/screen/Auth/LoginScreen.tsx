import React from 'react';
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import VanSvg from '../../image/van.svg';

import type { StackScreenProps } from '@react-navigation/stack';
import RootStackParamList from '../../types/types';

import { useAuth } from '../../context/Auth';

type LoginProps = StackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation } : LoginProps) => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    const auth = useAuth();
    const signIn = () => {
        auth.signIn();
    };

    return (
        <View className='flex flex-1 justify-center items-center p-4 bg-sky-100'>
            <VanSvg width={128} height={128} />            
            <Text className="mt-3 mb-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
            </Text>
            <TextInput
                className="w-full appearance-none text-base bg-white mb-1 rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Email address"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                className="w-full appearance-none text-base bg-white rounded-md border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
            />
            <TouchableOpacity
                className="flex w-full items-center mt-3 rounded-md border border-transparent bg-indigo-600 p-4 focus:outline-none"
                onPress={signIn}
            >
                <Text className="text-white text-lg font-bold">Log me in</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex w-full items-end rounded-md mt-2 focus:outline-none"
                onPress={() => navigation.navigate('ForgetPassword')}
            >
                <Text className="text-dark font-bold">Forget Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="absolute bottom-0 mb-2 flex w-full items-center"
                onPress={() => navigation.navigate('Register')}
            >
                <Text className="text-indigo-600 text-lg font-bold underline">You don't have an account?</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;