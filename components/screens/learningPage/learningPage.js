import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, View, Text, ScrollView, Alert, AsyncStorage, TouchableWithoutFeedback, Keyboard,
  Animated, Image, StyleSheet, TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { mapStateToProps, mapDispatchToProps } from '../../data/storgeApi'
import StopwatchContainer from '../stopwatch/stopwatch.container';
import { Card, Divider, Icon, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { styles } from "../../style/styles";
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { connect, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import { addNewSubject, deleteSubject, addLearningTime, addLearningTimeDay } from '../../data/action/subject';



var getCurrentDate = () => {

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
  return date + '.' + month;//format: dd-mm-yyyy;
}

const LerningPage = ({ route, navigation }) => {

  const { itemId, itemName, wantedTime, prop } = route.params;

  const [props, setprops] = useState(route.params.props);
  const [data, setData] = useState([]);
  // console.log('route');
  // console.log(route);

  React.useEffect(() => {
    setprops(route.params.props);
    setData(route.params.prop.subject);


    console.log("route");
    console.log(route);
    console.log("route.subject");
    console.log(route.params.prop.subject);
    console.log('Refreshed!');
  })



  const [labels, setLabels] = useState('')
  const [key, setKey] = useState('')
  const [daata, setDaata] = useState('')
  // const { itemId } = props.params;

  const dispatch = useDispatch();
  //console.log(route)


  const submitLearning = (key, labels, daata) => dispatch(addLearningTime(key, labels, daata))
  const submitLearningDay = (key, labels, daata) => dispatch(addLearningTimeDay(key, labels, daata))




  function submitSelector(key, labels, daata, data) {

    console.log("here i stop. this is on the learning page in the submitSelector the problem is that the map function below that aim to not label twice date. until now i gust make the function and not set them to fire the right thing. need to edit the ADD_LEARNING_TIME_DAY in subject reducer. so on.  hello to you my biger my! god lack");
    console.log("data:   ");
    console.log(data);
    data.map((subjectObj, i) => {
      console.log("in render");
      console.log(subjectObj);
      console.log(subjectObj.data);

      subjectObj.datasets.map((datasetsArray) => {

        datasetsArray.key == key ?
          (datasetsArray =>
            datasetsArray.labels[datasetsArray.labels.length - 1] == labels ?
              (
                submitLearning(key, labels, daata)
              ) : (
                submitLearningDay(key, labels, daata)
              )
          ) : (
            console.log('not the key')
          )

      })

    })


  }





  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  useEffect(() => {
    let isCancelled = false;
    setDaata((time.seconds / 60) + (time.hours * 60) + time.minutes);
    const advanceTime = () => {
      setTimeout(() => {
        let nSeconds = time.seconds;
        let nMinutes = time.minutes;
        let nHours = time.hours;

        nSeconds++;

        if (nSeconds > 59) {
          nMinutes++;
          nSeconds = 0;
        }
        if (nMinutes > 59) {
          nHours++;
          nMinutes = 0;
        }
        if (nHours > 24) {
          nHours = 0;
        }

        !isCancelled && setTime({ seconds: nSeconds, minutes: nMinutes, hours: nHours });
      }, 1000);
    };

    advanceTime();

    return () => {
      //final time:
      // console.log(time);
      isCancelled = true;
    };
  }, [time]);


  useEffect(() => {
    setLabels(() => getCurrentDate());
    setKey(itemId);


  }, []
  );


  //alert(time.minutes+(time.hours * 60))
  //alert(route.params)

  // route.subject.map((subjectObj, i) => {
  //   console.log("labels")
  //   console.log(subjectObj.labels)
  // });

  //alert(itemId)

  //console.log('learniningPage:' + this.props)
  //  labels != getCurrentDate ? (
  //   setLabels(getCurrentDate)
  //  ) : (console.log(getCurrentDate)
  //  key != itemId ? (

  //  ) : (
  // console.log(datasets);
  //  )



  return (
    console.log('daata'),
    console.log(daata),
    <View style={{ padding: 15 }}>
      <View style={styles.title}>
        {/* <Text style={styles.title}> {itemId}</Text> */}
        {/* <Text style={styles.bold}> למשך  {wantedTime} דקות </Text>  */}
        <Text style={styles.title, { fontSize: 50 }}>
          {`${itemName} `}
        </Text>
        <Text style={styles.title, { fontSize: 25 }} >
          {`למשך ${wantedTime} דקות`}
        </Text>


      </View>
      <View style={styles.parent}>
        {/* <Text style={styles.title}> {itemId}</Text> */}
        {/* <Text style={styles.bold}> למשך  {wantedTime} דקות </Text>  */}
        <Text style={{ fontSize: 50 }, styles.title}>
          {`
          ${time.hours < 10 ? '0' + time.hours : time.hours} : ${time.minutes < 10 ? '0' + time.minutes : time.minutes} : ${time.seconds < 10 ? '0' + time.seconds : time.seconds}
        `}
        </Text>


      </View>
      <View style={{ padding: 10 }}>
        <View style={styles.clockS, { color: '#51A0D5' }}>

          <Card >
            <Text style={{ fontSize: 20 }} >האם הלימוד היה מוצלח? </Text>
            <AirbnbRating
              count={5}
              reviews={["בזבזתי את הזמן", "למדתי בקושי", "למדתי אבל הייתי יכול יותר", "לא בזבזתי דקה.", "אחת השעות המנוצלות שלי ביותר"]}
              defaultRating={2}
              size={30}

            />
          </Card>


          <View style={{ margin: 20 }} >
            <TouchableOpacity onPress={() => (
              submitLearning(key, labels, daata, data),
              console.log('labels'),
              console.log(labels),
              navigation.navigate('EnterToLearnPage'))
            }>
              <Button
                icon={
                  <Ionicons
                    name="cafe-outline"
                    size={40}
                    color="#51A0D5"
                  />
                }
                iconRight
                title="התחל הפסקה עכשיו"
                titleStyle={{ fontSize: 20 }}
                type="outline"
                color="#51A0D5"
                onPress={() => (
                  submitLearning(key, labels, daata),
                  console.log('labels'),
                  console.log(labels),
                  navigation.navigate('EnterToLearnPage'))
                }
              />
            </TouchableOpacity>
          </View>





          {/* <TouchableOpacity style={styles.btnStyle}
            onPress={() => (
              setDatasets(() => ((((time.seconds) / 60) + (time.minutes)) + ((time.hours) * 60))),
              submitLearning(key, labels, datasets),
              console.log('labels'),
              console.log(labels),
              navigation.navigate('EnterToLearnPage'))
            }>
            <View style={{ padding: 5 }}>
              <Text style={styles.txtStyle}>שמור</Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    </View >
  );
};








// function LerningPage({ route, navigation }) {
//     const { itemId, subjectName, wantedTime } = route.params;

//     return (
//       <SafeAreaView>
//         <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5 }}>
//           {/* <TopNavigation title={JSON.stringify(subjectName)} alignment='center' /> */}
//           <Text style={styles.title}> {subjectName}</Text>
//           <Text style={styles.bold}> למשך  {wantedTime} דקות </Text>
//           {/* <Text>LerningPage screen</Text>
//         <Button title="Go back" onPress={() => navigation.goBack()} /> */}
//         </View>
//         <View style={{ marginTop: 60, justifyContent: 'center', alignItems: 'center' }}>
//           <StopwatchContainer />
//         </View>
//       </SafeAreaView>
//     );
//   }

export default connect(mapStateToProps, mapDispatchToProps)(LerningPage)