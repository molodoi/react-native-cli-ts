import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const Loading = () => {
  return (
    <View className="flex flex-1 bg-neutral-100 justify-center">
      <ActivityIndicator color="#0000ff" size="large" />
    </View>
  );
};