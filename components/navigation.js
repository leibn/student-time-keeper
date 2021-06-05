import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, Layout, Text, IndexPath,Divider, Icon } from '@ui-kitten/components';
import { HomeScreen } from './screens/home';
import DetailsScreen from './screens/details';
import { explanationScreen } from './screens/pageExplanation';
import { targetSetPage } from './screens/tips/targetSet';
import AnalizeMainScreen from './screens/analizepage/AnalizeScreen';
import { EnterToLearnPage } from './screens/learningPage/EnterToLearn';
import enterNewSub from './screens/enterNewSub';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ToLearnFunc from './screens/learningPage/learningNav';
import configureStore from './data/store';
import store from './data/store'
import {analizeStacNavigetor} from './screens/analizepage/analizeStack'


const { Navigator, Screen } = createDrawerNavigator();

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);
const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);
const BookOpenIcon = (props) => (
  <Icon {...props} name='book-open-outline'/>
);

const InfoIcon = (props) => (
  <Icon {...props} name='info-outline'/>
);

const ArchiveIcon = (props) => (
  <Icon {...props} name='archive-outline'/>
);
const ForwardIcon = (props) => (
  <Icon {...props} name='arrow-ios-back-outline'/>
);
const DrawerContent = ({ navigation, state }) => (
  <Drawer

    selectedIndex={new IndexPath(state.index)}
    onSelect={index => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title='מסך הבית'
      accessoryRight={HomeIcon}
      accessoryLeft={ForwardIcon} />
    <DrawerItem title='התחל ללמוד'  accessoryRight={BookOpenIcon}
      accessoryLeft={ForwardIcon} />
    <DrawerItem title='אודות' accessoryRight={InfoIcon}
      accessoryLeft={ForwardIcon}/>
    <DrawerItem title='הסבר על האפליקציה' accessoryRight={BookOpenIcon}
      accessoryLeft={ForwardIcon}/>
    <DrawerItem title='הצבת יעדים' accessoryRight={BookOpenIcon}
      accessoryLeft={ForwardIcon}/>
    <DrawerItem title='איך הלמידה שלי?!?' accessoryRight={PersonIcon}
      accessoryLeft={ForwardIcon}/>
    <DrawerItem title='הכנס קורס חדש' accessoryRight={ArchiveIcon}
      accessoryLeft={ForwardIcon}/>

  </Drawer>
);

export const DrawerNavigator = () => (
  <Navigator drawerPosition={'right'} drawerContent={props => <DrawerContent {...props} />}>
    <Screen name='homePage'
    options={{ headerTitle: props => <sub {...props} /> }}
    component={HomeScreen} />
    <Screen name='learning' component={ToLearnFunc} />
    <Screen name='about' component={DetailsScreen} />
    <Screen name='explanation' component={explanationScreen} />
    <Screen name='targetTipsSet' component={targetSetPage} />
    <Screen name='analize' component={analizeStacNavigetor} />
    {/* <Screen name='analize' component={AnalizeMainScreen} /> */}
    <Screen name='newSubject' component={enterNewSub} />

  </Navigator>
);



export class AppNavigator extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

