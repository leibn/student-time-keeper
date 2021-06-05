
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Dimensions, Alert, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
}
  from "react-native-chart-kit";
import { Divider, Icon, Avatar, OverflowMenu, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { data, contributionData, pieChartData, progressChartData } from '../data/data';

import { object } from "../data/subjectData";
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Card } from 'react-native-shadow-cards';
import { CurrentRenderContext } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from "../style/styles";
import { mapStateToProps, mapDispatchToProps } from "../data/storgeApi";



const AnalizeMainScreen = (props) => {
  React.useEffect(() => {

    const unsubscribe = props.navigation.addListener('focus', () => {
      console.log('Refreshed!');
    });

    return unsubscribe;
  }, [(props)]);
  console.log('props');
  console.log(props);

  // React.useEffect(() => {

  //   const unsubscribe = props.navigation.addListener('focus', () => {
  //     console.log('Refreshed!');
  //   });

  //   return unsubscribe;
  // }, [props.navigation]);


  const [data, setData] = useState(props.subject);
  const [menuVisible, setmenuVisible] = useState(false);






  console.log('Data');
  console.log(data);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: this.props.subject,
  //     reload: false,
  //     menuVisible: false,
  //     toggleMenu: false,
  //   }

  // }

  // shouldReload() {
  //   this.setState({
  //     reload: !this.state.reload,
  //   })
  // }

  // GetData = () => {
  //   const self = this;
  //   return () => {
  //     try {
  //       this.setState({
  //         data: this.props.subject,
  //       });

  //     }
  //     catch (error) {
  //       console.error(error);
  //     }


  //   }
  // }



  // render() {

  // const onRefresh = () => {
  //   wait(2000).then(() => {
  const height = 220
  const width = Dimensions.get('window').width - 60
  // console.log('width' + width)
  // console.log('this.state')
  // console.log(this.state)
  // //console.log(this.state.dataThis)
  // console.log('this.props.subject')
  // console.log(this.props.subject)

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
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  };

  const graphStyle = {
    marginVertical: 2,
    ...chartConfig.style
  }

  // <Icon {...props} name='menu-outline'/>

  const toggleMenu = () => {
    setState({ toggleMenu: !menuVisible });
  };


  const MenuIcon = (props) => (
    <Icon {...props} name='menu-outline' />
  );


  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={() => props.navigation.openDrawer()} />
  );
  // this.navigat.openDrawer()
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
      <Text {...props} style={{
        fontSize: 25, fontWeight: 'bold'
      }}>ניתוח נתונים</Text>
    </View>
  );

  // function dataForV(subjectObj) {
  //   return
  //   {
  //     labels: subjectObj.labels
  //     datasets: [
  //       {
  //         data: subjectObj.datasets
  //       },
  //     ]
  //   }

  // }
  // 
  // if (this.state.isLoading) {
  //   return (
  //     <View style={{ flex: 1, padding: 20 }}>
  //       <ActivityIndicator />
  //     </View>

  //   )
  // }
  // console.log("this.state.data");
  // console.log(this.state.data);





  var listedSubject = (
    // console.log('this.state.datasets')
    // console.log(this.state.data)


    (data.length == 0) ?
      (
        <TouchableOpacity onPress={() => {
          console.log('this'),
            console.log(props.navigation),
            props.navigation.navigate('learning')
        }
          // props.navigation.navigate('DrawerNavigator', { screen: 'enterNewSub' }),

        }
        >

          <Card style={styles.card}>
            <Text style={styles.card, { margin: 100 }}> עוד לא למדת מספיק בשביך שיהיה מה לנתח.... לחץ פה בשביל להתחיל ללמוד </Text>
          </Card>

        </TouchableOpacity>

      ) : (
        data.map((subjectObj, i) => {
          console.log("in render");
          console.log(subjectObj);
          console.log(subjectObj.data);


          return (
            <ScrollView>
              <TouchableOpacity key={subjectObj.key} onPress={() => {
                // console.log("pressd " + object.key);
                props.navigation.navigate('Home Screen')
              }} >
                <View>
                  <Card style={styles.card}>
                    <Text style={labelStyle}>{subjectObj.name}</Text>
                    <LineChart
                      data={{ labels: subjectObj.labels, datasets: subjectObj.datasets }}
                      // .concat({ data: [6, 6,], "color": (opacity = 1) => `rgba(100, 40, 0, ${2})` })
                      width={width}
                      height={height}
                      chartConfig={chartConfig}
                      bezier
                      style={graphStyle}
                    />
                  </Card>
                </View>
              </TouchableOpacity>
            </ScrollView>
          )
        }
        )
      )
  )
  return (
    <SafeAreaView >
      <TopNavigation
        title={renderTitle}
        accessoryRight={renderOverflowMenuAction} />
      <Divider />
      <ScrollView>
        <View style={styles.container}>





          {listedSubject}
          {/* ) } */}
        </View>
      </ScrollView>
    </SafeAreaView >
  )

}




// }

export default connect(mapStateToProps, mapDispatchToProps)(AnalizeMainScreen)

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

            // });


            // var listedSubject =
            //   (
            //     // this.props.subject
            //     // 
            //     // this.state.data
            //     this.props.subject.map((subjectObj, i) => {
            //       console.log("subjectObj");
            //       console.log(subjectObj);
            //       // Alert.alert('dataset', subjectObj.datasets)
            //       // Alert.alert('labels', subjectObj.labels)
            //       var dataS = {
            //         labels: subjectObj.labels,
            //         datasets: [
            //           {
            //             data: subjectObj.datasets
            //           },
            //         ]
            //       }
            //     return (
            //     <TouchableOpacity>
            //       <View>
            //         <Card style={styles.card}>
            //           <Text style={labelStyle}>{subjectObj.name}</Text>
            //           <LineChart
            //             data={dataS}
            //             // { labels: subjectObj.labels, datasets: [{ data: subjectObj.datasets }] }
            //             width={width}
            //             height={height}
            //             chartConfig={chartConfig}
            //             bezier
            //             style={graphStyle}
            //           />)
            //             </Card>
            //       </View>
            //     </TouchableOpacity >
            //   )
            // }
            //   )
            // );




            // (this.state.data) ? (
            //   :
            //         return 
            //   console.log('אין קורסי לימוד'),
            //   <View>

            //     <Text style={styles.card, { margin: 100 }}> עוד לא הוזנו קורסי לימוד...</Text>

            //   </View>)



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