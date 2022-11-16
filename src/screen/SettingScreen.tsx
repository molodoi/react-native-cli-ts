import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import ProfileSvg from '../image/profile.svg';
import RigtArrowSvg from '../image/right-arrow.svg';
import AddPlusSvg from '../image/add-plus.svg';
import SettingSvg from '../image/settings.svg';

import { useAuth } from '../context/Auth';
import { useNavigation } from '@react-navigation/native';

// import { SettingStackParamList } from '../types/types';

const SettingScreen = ({navigation}) => {
    // const navigation = useNavigation<SettingStackParamList>();
    const auth = useAuth();
    const signOut = () => {
        auth.signOut();
    };
    const onPress = (value: string) => {
        return console.log(value);
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
            <View className="flex flex-1 p-4 bg-sky-100">
                <TouchableOpacity
                    className="flex flex-row w-full items-center justify-between mt-3 rounded-md border border-transparent bg-slate-50 p-4 focus:outline-none"
                    onPress={() => navigation.navigate('Profile')}
                >
                    <View className='flex flex-row items-center'>
                        <ProfileSvg width={24} height={24} fill="#4f46e5" />
                        <Text className="text-dark ml-3 text-lg font-bold">My Account</Text>
                    </View>
                    <RigtArrowSvg width={24} height={24} fill="#4f46e5" />
                </TouchableOpacity>

                <TouchableOpacity
                    className="flex flex-row w-full items-center justify-between mt-3 rounded-md border border-transparent bg-slate-50 p-4 focus:outline-none"
                    onPress={() => onPress('Add spot')}
                >
                    <View className='flex flex-row items-center'>
                        <AddPlusSvg width={24} height={24} fill="#4f46e5"/>
                        <Text className="text-dark ml-3 text-lg font-bold">Add a spot</Text>
                    </View>
                    <RigtArrowSvg width={24} height={24} fill="#4f46e5" />
                </TouchableOpacity>
                <TouchableOpacity
                    className="flex flex-row w-full items-center justify-between mt-3 rounded-md border border-transparent bg-slate-50 p-4 focus:outline-none"
                    onPress={() => onPress('settings')}
                >
                    <View className='flex flex-row items-center'>
                        <SettingSvg width={24} height={24} fill="#4f46e5"/>
                        <Text className="text-dark ml-3 text-lg font-bold">Settings</Text>
                    </View>
                    <RigtArrowSvg width={24} height={24} fill="#4f46e5" />
                </TouchableOpacity>

                <TouchableOpacity
                    className="flex w-full items-center mt-3 rounded-md border border-transparent bg-red-600 p-4 focus:outline-none"
                    onPress={signOut}
                >
                    <Text className="text-white text-lg font-bold">Logout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default SettingScreen;