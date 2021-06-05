import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppNavigator} from '../navigation';

export const SubjectAnalyzeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center' />
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>subject Analyze Screen</Text>
      </Layout>
    </SafeAreaView>
  );
};