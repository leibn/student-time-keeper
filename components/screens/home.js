import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { StyleSheet, View } from 'react-native';
import {
  Avatar, Icon, MenuItem, OverflowMenu, Divider, Layout, Text, TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import { Text } from 'react-native-svg';
import { styles, } from "../style/styles";
import { TopNavigationImageTitleShowcase } from './elements/header'





const MenuIcon = (props) => (
  <Icon {...props} name='menu-outline' />
);

export const HomeScreen = (props) => {

  // console.log('navigation home screen');
  // console.log(navigation);
  React.useEffect(() => {

    const unsubscribe = props.navigation.addListener('focus', () => {
      console.log('Refreshed!');
    });

    return unsubscribe;
  }, [(props)]);





  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={() => props.navigation.openDrawer()} />
    // navigation.openDrawer()
  );

  const renderOverflowMenuAction = () => (
    <React.Fragment>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
      </OverflowMenu>
    </React.Fragment>
  );
  const renderTitle = () => (
    <View style={styles.titleContainer}>
      <Avatar
        style={styles.logo}
        source={require('../../images/Sullivan.jpg')}
      />
      <View style={{ alignment: 'center', textAlign: 'center', alignItems: 'center', alignSelf: 'center' }}>
        <Text  style={{fontSize: 25,  fontWeight: 'bold'
        }}>StudentHelper</Text>
      </View>
    </View>
  );
  // console.log('beforeRander')
  // console.log(props.navigation)
  return (

    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopNavigationImageTitleShowcase /> */}
      {/* <TopNavigation title='StudentHelper' alignment='center'
        accessoryRight={renderOverflowMenuAction} /> */}
      <TopNavigation
        title={renderTitle}
        accessoryRight={renderOverflowMenuAction}
      />

      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ marginBottom:100, flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text} category='h4'>שלום וברוכים הבאים ל:</Text>
        <Text style={styles.text} category='h1'>Student Helper</Text>
        <Text style={styles.text} category='h4'>אפלקצית בינה מלאכותית  </Text>
        <Text style={styles.text} category='h4'> שתעשה את החיים שלכם</Text>
        <Text style={styles.bold}>(הסטודנטים)</Text>
        <Text style={styles.text} category='h4'>טיפה יותר קלים </Text>
        </View>


        <View style={{padding:5},styles.row} >

          {/* <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('explanation')}>
            <Text style={styles.txtStyle}>איך מתחילים?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('learning')}>
            <Text style={styles.txtStyle}>התחל ללמוד</Text>
          </TouchableOpacity>

         */}

          
          <View style={{ margin: 7 }}>
            <Button

              icon={
                <Ionicons
                  name="information-circle-outline"
                  size={20}
                  color="#51A0D5"
                />
              }
              iconRight
              title="איך מתחילים?"
              type="outline"
              color="#51A0D5"
              onPress={() => props.navigation.navigate('learning')}
            />
          </View>

          <View style={{ margin: 7 }}>
            <Button
              icon={
                <Ionicons
                  name="school-outline"
                  size={20}
                  color="#51A0D5"
                />
              }
              iconRight
              title="התחל ללמוד"
              type="outline"
              color="#51A0D5"
              onPress={() => props.navigation.navigate('learning')}
            />
          </View>

          <View style={{ margin: 7 }}>
            <Button
              icon={
                <Ionicons
                  name="bug-outline"
                  size={20}
                  color="#51A0D5"
                />
              }
              iconRight
              title="דיווח על באג"
              type="outline"
              color="#51A0D5"
              onPress={() => props.navigation.navigate('about')}
            />
          </View>
        </View>

        <Divider />
      </Layout>
    </SafeAreaView>
  );
};

