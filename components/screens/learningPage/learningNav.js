import React, { Component } from 'react';
import {
  View, ScrollView, Animated, SafeAreaView, Alert,
  Image, StyleSheet, TextInput, AsyncStorage
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { mapStateToProps, mapDispatchToProps } from '../../data/storgeApi'
import { connect } from 'react-redux';
import StopwatchContainer from '../stopwatch/stopwatch.container';
import { Button, Divider, Icon, Layout, Text,} from '@ui-kitten/components';

//import subjectsData from "../data/subjectsData";
import { Card } from 'react-native-shadow-cards';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from "../../style/styles";
import LerningPage from './learningPage';
import { object } from '../../data/subjectData';
import EnterToLearnPage from './EnterToLearn';





const Stack = createStackNavigator();


class ToLearnFunc extends Component {

  render() {

    return (
      <NavigationContainer independent={true} >
        <Stack.Navigator>
          <Stack.Screen
            name="EnterToLearnPage"
            component={EnterToLearnPage}
            options={{
              headerShown: false
            }
           }
          />
          <Stack.Screen
            name="LerningPage"
            component={LerningPage}
            options={{
              headerShown: false
             
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToLearnFunc)

