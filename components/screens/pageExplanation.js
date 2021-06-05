import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppNavigator} from '../navigation';

export const explanationScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='explanationScreen' alignment='center' />
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>explanationScreen</Text>
      </Layout>
    </SafeAreaView>
  );
};