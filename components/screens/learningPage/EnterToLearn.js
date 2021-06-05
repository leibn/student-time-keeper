import { connect, useDispatch } from 'react-redux';
import React, { useState, Component } from 'react';
import { SafeAreaView, View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
}
from "react-native-chart-kit";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Avatar, MenuItem, OverflowMenu, Button, Divider, Layout, Text, TopNavigation, Icon, TopNavigationAction } from '@ui-kitten/components';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { data, contributionData, pieChartData, progressChartData } from '../../data/data';

import { object } from "../../data/subjectData";
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Card } from 'react-native-shadow-cards';
import { CurrentRenderContext } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from "../../style/styles";
import { mapStateToProps, mapDispatchToProps } from "../../data/storgeApi";
import { addNewSubject, deleteSubject, subjectChangeKey } from '../../data/action/subject';



const MenuIcon = (props) => (
  <Icon {...props} name='menu-outline' />
);


const EnterToLearnPage = (props, navigation) => {


  console.log(navigation);

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  const renderMenuAction = () => (
    <TopNavigationAction />
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
  const renderTitle = (props) => (
    <View style={styles.titleContainer}>
      <Avatar
        style={styles.logo}
        source={require('../../../images/Sullivan.jpg')}
      />

      <View style={{ alignment: 'center', textAlign: 'center', alignItems: 'center', alignSelf: 'center' }}>
        <Text  {...props} style={{
          alignment: 'center', textAlign: 'center', alignItems: 'center', fontSize: 25, alignSelf: 'center',
          fontWeight: 'bold'
        }}>בחר נושא</Text>
      </View>
    </View>
  );



  function rendor() {
    if (props.subject) {
      return (
        <View style={{ flex: 1, padding: 20 }}>

        </View>

      )
    }
  }
  rendor();
  const [key, setKey] = useState('')

  const dispatch = useDispatch();
  const submitChangeObject = (objkey) => dispatch(subjectChangeKey(objkey))
  console.log(props)
  //  submitChangeObject(props.subject[0].key)
  // console.log('this: ' + this.state)
  // return(
  //   <View>
  //     <Text>
  //       Hello World
  //     </Text>
  //   </View>
  //   )

  // console.log('enterToLearn:' + this.subject)
  var listedSubject =
    props.subject.length > 0 ?
      (
        props.subject.map((subjectObj, i) => {
          //      console.log( "in render"+ subjectObj);
          return (
            <TouchableOpacity key={i} onPress={() => {
              setKey(subjectObj.key)
              console.log('subject object key: ' + subjectObj.key)
              submitChangeObject(key),
                console.log("key:  " + key),
                setKey(''),
                props.navigation.navigate('LerningPage', {
                  itemId: subjectObj.key,
                  itemName: subjectObj.name,
                  wantedTime: subjectObj.specificLearningTime,
                  prop:props,
                })
            }}>

              <View>
                <Card style={styles.card}>
                  <Text style={labelStyle}>{subjectObj.name}</Text>
                  <Text style={childStyle}>
                    ל "
                    {subjectObj.specificLearningTime}
                     " דקות של למידה.
                    </Text>
                </Card>
              </View>
            </TouchableOpacity>

          );

        }))
      : (
        <TouchableOpacity onPress={() =>
          console.log(props)
          // props.navigation.navigate('homePage', { screen: 'newSubject' })
          // props.navigation.navigate('DrawerNavigator', { screen: 'enterNewSub' })
          // props.navigation.navigate('')
        }
        >
          <View>
            <Card style={styles.card}>
              <Text style={labelStyle }> {
              `עוד לא הוזנו קורסי לימוד...
              
              15 שניות והקורס ישמר...`
              }</Text>
              {/* להוסיף הפניה להוספת נושא חדש. */}
            </Card>
          </View>
        </TouchableOpacity>

      )
  return (
    <SafeAreaView >
      <TopNavigation
        title={renderTitle}
        accessoryRight={renderOverflowMenuAction}
      />
      <Divider />
      <ScrollView>
        <View style={styles.container}>
          {/* <Text style={styles.title}>{this.props.subjects.name}</Text>
          <View>
            <Card style={styles.card}>
              <Text style={labelStyle}>{this.props.subjects.name}</Text>
              <LineChart
                data={{ labels:this.props.subjects.labels, datasets: this.props.subjects.datasets }}
                width={width}
                height={height}
                chartConfig={chartConfig}
                bezier
                style={graphStyle}
              />
            </Card>
          </View> */}


          {listedSubject}
          {/* ) } */}
        </View>
      </ScrollView>
    </SafeAreaView >

  )

}
const height = 220
const width = Dimensions.get('window').width - 60


const chartConfig =

{
  backgroundGradientFromOpacity: 100,
  backgroundGradientToOpacity: 0.5,
  backgroundColor: '#24FF00',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#0050FF',
  //barPercentage: 0,
  useShadowColorFromDataset: false,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  decimalPlaces: 1, // optional, defaults to 2d
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726"
  }
};
const labelStyle = {
  color: chartConfig.color(),
  marginVertical: 2,
  textAlign: 'right' ,
  marginRight: 15,
  fontSize: 25,
  fontWeight: 'bold'
};

const childStyle = {
  color: chartConfig.color(),
  marginVertical: 2,
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'normal'
};

const graphStyle = {
  marginVertical: 2,
  ...chartConfig.style
}



export default connect(mapStateToProps, mapDispatchToProps)(EnterToLearnPage);





// const chartConfig =
// // {
// //   backgroundColor: '#ff3e03',
// //   backgroundGradientFromOpacity: 300,
// //   backgroundGradientTo: "#08130D",
// //   backgroundGradientToOpacity: 0.5,
// //   color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
// //   strokeWidth: 2, // optional, default 3
// //   barPercentage: 0.5,
// //   useShadowColorFromDataset: false // optional
// // };

// {
//   backgroundGradientFromOpacity: 100,
//   backgroundGradientToOpacity: 0.5,
//   backgroundColor: '#24FF00',
//   backgroundGradientFrom: '#ffffff',
//   backgroundGradientTo: '#0050FF',
//   //barPercentage: 0,
//   useShadowColorFromDataset: false,
//   color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//   decimalPlaces: 1, // optional, defaults to 2d
//   labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//   style: {
//     borderRadius: 16
//   },
//   propsForDots: {
//     r: "6",
//     strokeWidth: "2",
//     stroke: "#ffa726"
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//   },
//   scrollView: {
//     //backgroundColor: 'green',
//     marginHorizontal: 0,
//   },
//   text: {
//     fontSize: 42,
//   },
// });



// import React, { Component } from 'react';
// import {
//   View, ScrollView, Animated, SafeAreaView, Alert,
//   Image, StyleSheet, TextInput, AsyncStorage, TouchableOpacity
// } from 'react-native';

// import { Button, Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
// //import { Text } from 'react-native-svg';
// import { mapStateToProps, mapDispatchToProps } from '../data/storgeApi'
// import { connect } from 'react-redux';
// import { Card } from 'react-native-shadow-cards';
// import { styles } from "../style/styles";
// import { useRoute } from '@react-navigation/native';
// import { object } from '../data/subjectData';


// function navigateTo() {
//   console.log("1")
//   console.log("name: " + subjectObj.name)
//   console.log("this: " + this.props)
//   console.log("pressd " + object.key)
// }

// const listedSubject = this.props.subject.map((subjectObj, i) => {
//   const name = (subjectObj.name)
//   return (
//     <TouchableOpacity key={i} onPress={() => {
//       navigateTo(),
//       navigation.navigate('LerningPage', {
//         itemId: i,
//         subjectName: name,
//         wantedTime: subjectObj.specificLearningTime,
//       },
//       )
//     }
//     } >





//       function EnterToLearnPage({ route, navigation}) {



//         <View>
//           <Card style={styles.card}>
//             <Text style={styles.labelStyle}>{subjectObj.name}</Text>

//           </Card>
//         </View>
//       </TouchableOpacity >
//   )
// });
// return (
//   <SafeAreaView >
//     <Divider />
//     <ScrollView>
//       <View style={styles.container}>
//         {listedSubject}


//         <Text>Hello World</Text>
//         <TouchableOpacity onPress={
//           navigateTo()
//           // () => {
//           // navigation.navigate('NewSubject', {
//           //   itemId: 1,
//           //   subjectName: "name",
//           //   wantedTime: 10,
//           // })

//           // }
//         }>
//           <View>
//             <Card style={styles.card}>
//               <Text style={styles.labelStyle}>הכנס נושא חדש</Text>
//             </Card>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </ScrollView >
//   </SafeAreaView >

// )
// }

// export default connect(mapStateToProps, mapDispatchToProps)(EnterToLearnPage)