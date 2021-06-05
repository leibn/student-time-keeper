import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Icon, OverflowMenu, TopNavigationAction, MenuItem, Text,
     TopNavigation } from '@ui-kitten/components';


const MenuIcon = (props) => (
  <Icon {...props} name='menu-outline'/>
);



export const TopNavigationImageTitleShowcase = (props) => {

 

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={navigation.openDrawer()}/>
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

  const renderTitle = (props) => (
    <View style={styles.titleContainer}>
      <Avatar
        style={styles.logo}
        source={require('../../../images/Sullivan.jpg')}
      />
      <Text {...props}>{props.title}</Text>
    </View>
  );

  return (
    <TopNavigation
      title={renderTitle}
      

    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 16,
  },
});