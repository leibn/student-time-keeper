import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import {
  Avatar, MenuItem, OverflowMenu, Button, Divider, Layout,
  TopNavigation, Icon, TopNavigationAction
} from '@ui-kitten/components';


//import { Text } from 'react-native-svg';
import { styles, } from "../style/styles";
import { TopNavigationImageTitleShowcase } from './elements/header'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { email } from 'react-native-communications';
import DeviceInfo from 'react-native-device-info';


const MenuIcon = (props) => (
  <Icon {...props} name='menu-outline' />
);



export default function DetailsScreen(navigation) {

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={() =>navigation.navigation.openDrawer() } />
    // navigation.openDrawer()navigation.openDrawer()
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
        source={require('../../images/Sullivan.jpg')}
      />
      <View style={{ alignment: 'center', textAlign: 'center', 
      alignItems: 'center', alignSelf: 'center' }}>
        <Text  {...props} style={{
           textAlign: 'center', alignItems: 'center', 
          fontSize: 25, alignSelf: 'center',
          fontWeight: 'bold'
        }}>אודות  / עזרה</Text>
      </View>
    </View>
  );







  const [size, setSize] = useState(25)
  const [viewHeight, setViewHeight] = useState(0)
  const [textHeight, setTextHeight] = useState(0)

  useEffect(() => {
    if (textHeight > viewHeight) {
      setSize(size - 1) // <<< You may adjust value 1 to a smaller value so the text can be shrink more precisely
    }
  }, [textHeight])

  return (

    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopNavigationImageTitleShowcase /> */}
      {/* <TopNavigation title='StudentHelper' alignment='center'
          accessoryRight={renderOverflowMenuAction} /> */}
      <TopNavigation
        title={renderTitle}
        accessoryRight={renderOverflowMenuAction}
      />
      {/* 
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='אודות' alignment='center' /> */}
      <Divider />
      <Layout style={{ flex: 0.95, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.container}>
          <View
            style={{
              marginTop: 20,
              // backgroundColor: 'pink',

            }}
            onLayout={(event) => {
              var { x, y, width, height } = event.nativeEvent.layout;
              setViewHeight(height)
            }}
          >
            <Text
              style={{width:300 , height:200,
                fontSize: size,
                marginBottom:10,
              }}
              onLayout={(event) => {
                var { x, y, width, height } = event.nativeEvent.layout;
                setTextHeight(height)
              }}
            > האפליקציה <Text style={{fontStyle:'italic', fontWeight:'bold',textAlign: 'center'}}>{`\nSTUDENT HELPER\n`} </Text>  נוצרה במטרה לעזור לסטודנטים
              ותלמידים להציב לעצמם יעדים ושיוכלו לעקוב אחרי הביצוע שלהם.
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              // backgroundColor: 'yellow',

            }}
          >
            <Text
              style={{
                fontSize: size,
              }}
              onLayout={(event) => {
                var { x, y, width, height } = event.nativeEvent.layout;
                setTextHeight(height)
              }}
            >
            </Text>
          </View>

          <View
            style={{
              margin: 20,
              // backgroundColor: 'yellow',
           }}>
            <Text
              style={{
                fontWeight:'bold' ,
                fontSize: 27,
                marginBottom: 20,
              }}
            > אשמח למשוב ממך
            
             </Text>
            </View>
            <View
            style={{
              marginBottom: 30,
              // backgroundColor: 'yellow',

            }}
          >
             <Text
              style={{marginLeft:15,
                fontSize: size,
              }}
              onLayout={(event) => {
                var { x, y, width, height } = event.nativeEvent.layout;
                setTextHeight(height)
              }}
            >
              דניאל לייבנר:
              
              
        </Text>
              
              
             
              <Text
              style={{
                marginRight: 70,
                fontSize: size,
              }}
              onLayout={(event) => {
                var { x, y, width, height } = event.nativeEvent.layout;
                setTextHeight(height)
              }}
            >
Da.Leibner@gmail.com
              </Text>
             
          </View>
          <TouchableOpacity style={styles.btnStyle2} onPress={() => email(
            ['da.leibner@gmail.com'],
             null,
            null,
            'באג/ שיפור לאפליקציה StudentHelper',
           `\n\n\n
             לומד/ת יקר/ה בהזדמנות זו אגיד לך תודה רבה על המשוב,\n
            בזכותך אוכל לשפר את האפלקציה ולהתאים אותה יותר.
            \n\n
            לנוחיתך צירפתי תבנית בסיס למייל זה. \n
             \n
            תודה,\n
                  דניאל לייבנר \n
                  da.leibner@gmail.com \n
                  \n
                  \n
                  \n
                  \n
                  \n
                  \n
           שלום דניאל,\n
           \n
           שמי:___________ \n
           ואני משתמש באפליקציה Student Helper שיצרת\n
           עם מערכת הפעלה:  `+ Platform.OS +  ` \n
           ומודל בניה: `+   DeviceInfo.getModel()   +` \n
           גרסת חומרה:    `+  DeviceInfo.getSystemVersion()  +` \n
           וגרסת אפלקציה: `+   DeviceInfo.getVersion()+ ` \n
           \n
           \n
            במהלך השימוש באפליקציה נתקלתי ב_______________ \n  
            חשבתי שכדאי להוסיף לאפליקציה___________________ \n
            \n\n
            בברכה _______________\n
            EMAIL: _______________\n
            טלפון נייד:________________\n
            \n
            \n
            \n
            `)}>

            <Text style={styles.txtStyle}>דיווח על באג / הצעות לשיפור</Text>
          </TouchableOpacity>
        </View>
      </Layout>
    </SafeAreaView >
  );
}
{/* 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
}); */}
{/* 
// import React from 'react';
// import { SafeAreaView } from 'react-native';
// import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
// import { AppNavigator } from '../navigation';
// import { styles } from '../style/styles';

// export const DetailsScreen = ({ navigation }) => {
//   const width= Dimensions.get('window').width

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <TopNavigation title='אודות' alignment='center' />
//       <Divider />
//       <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text category='h1'>STUDENT HELPER </Text>
//         <Text style={{
//           text: {
//           fontSize:0.05*width
//   }
// }}>
//   {`

//          האפליקציה נוצרה בשבוע פנוי לפני תחילת הסמסטר
//          לפני שהתחלתי את האפליקציה 
//          הזו לא ידעתי בכלל javaScript/react
//            ואחרי שבוע של למידה זו התוצאה. 
//           תאמינו שאתם מסוגלים 
//           ואתם כבר באמצע הדרך. 
//            אשמח למשוב ממך: 
//          דניאל לייבנר
//          Da.Leibner@gmail.com 
//           `}</Text>
//       </Layout>
//     </SafeAreaView >
//   );
// }; */}