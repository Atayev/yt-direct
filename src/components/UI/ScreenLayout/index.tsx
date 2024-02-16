import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ScreenLayout = ({children}: Props) => {
  return (
    <SafeAreaView className="p-6 bg-[#282828] w-full h-full">
      {children}
    </SafeAreaView>
  );
};

export default ScreenLayout;
