import { connect, useDispatch } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from "../data/storgeApi";
import React, { useState, useEffect, Component } from 'react';
import {
    SafeAreaView, View, Text, ScrollView, Alert, AsyncStorage,
    TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image,
    StyleSheet, TextInput
} from 'react-native';
import {
    Avatar, MenuItem, OverflowMenu, Divider, Layout,
    TopNavigation, Icon, TopNavigationAction
} from '@ui-kitten/components';
import { Button } from 'react-native-elements';
import { addNewSubject, deleteSubject } from '../data/action/subject';
import { NavigationRouteContext } from '@react-navigation/native';


//import { Text } from 'react-native-svg';
import { styles, } from "../style/styles";
import { TopNavigationImageTitleShowcase } from './elements/header'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { Card, Input } from 'react-native-elements';




let fuc1 = true
let fuc2 = false


const butoonallert = (navigation) =>
    Alert.alert(
        // `${subjectName}`
        'הוזן בהצלחה',
        'צעד קטן לאדם צעד גדול לתואר',
        [
            {
                text: 'להתחיל ללמוד',
                onPress: () => navigation.navigation.navigate('learning')
            },
            // props.navigation.navigate('learning')navigation.navigate
            {
                text: 'לניתוח נתונים',
                onPress: () => navigation.navigation.navigate('analize')

            },
            { text: 'הוסף עוד קורס', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
    );




const SubjectAnalyzeScreen = (navigation) => {
    const [subjectName, setSubjectName] = useState('');
    const [subjectTime, setSubjectTime] = useState('');
    const [subjectNumWeeks, setsubjectNumWeeks] = useState('');
    const [specificLearningTime, setspecificLearningTime] = useState('');

    const dispatch = useDispatch();

    const submitSubject = (subjectName, subjectTime, specificLearningTime, subjectNumWeeks) => dispatch(addNewSubject(subjectName, subjectTime, specificLearningTime,subjectNumWeeks))
    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };


    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={() => navigation.navigation.openDrawer()} />
        // navigation.openDrawer()console.log(navigation)navigation.navigate.openDrawer()console.log(navigation.navigation.openDrawer()) 
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
            <View style={{ alignment: 'center', textAlign: 'center', alignItems: 'center', alignSelf: 'center' }}>
                <Text  {...props} style={{
                    alignment: 'center', textAlign: 'center', alignItems: 'center', fontSize: 25, alignSelf: 'center',
                    fontWeight: 'bold'
                }}>הזן מקצוע חדש</Text>
            </View>
        </View>
    );


    const MenuIcon = (props) => (
        <Icon {...props} name='menu-outline' />
    );


    return (


        //     {/* <TopNavigationImageTitleShowcase /> */}
        //     {/* <TopNavigation title='StudentHelper' alignment='center'
        // accessoryRight={renderOverflowMenuAction} /> */}

        <SafeAreaView style={{ flex: 1 }}>
            <DismissKeyboardView>
                {/* <Text> <myInputLine /> </Text> */}
                <TopNavigation
                    title={renderTitle}
                    accessoryRight={renderOverflowMenuAction}
                />
                <Divider />
                <ScrollView>
                    <Image
                        source={require('../../images/setSubject.jpg')}
                        style={{ width: '100%', height: 200, }}
                        resizeMode="stretch"
                    />
                    <Layout style={{ flex: 1, marginTop: 10, alignItems: 'center', backgroundColor: "#f5f5f5", }}>
                        <View style={{ width: '90%', marginTop: 15 }} >

                            <Input
                                placeholder='  שם הקורס'
                                rightIcon={
                                    <FontAwesome
                                        name='graduation-cap'
                                        size={24}
                                        color='black'
                                    />
                                }
                                value={subjectName}
                                onChangeText={(subjectName) => setSubjectName(subjectName)}
                                textAlign={'right'}

                            />

                            <Input
                                placeholder='  מספר שבועות לימוד (ללא מרתון)'
                                rightIcon={
                                    <FontAwesome
                                        name='calendar'
                                        size={28}
                                        color='black'
                                    />
                                }
                                onChangeText={(numWeeks) => setsubjectNumWeeks(numWeeks)}
                                value={subjectNumWeeks}
                                keyboardType={'decimal-pad'}
                            />
                            <Input
                                placeholder='  מספר שעות שבועיות בקורס'
                                rightIcon={
                                    <FontAwesome
                                        name='clock-o'
                                        size={28}
                                        color='black'
                                    />
                                }
                                onChangeText={(Time) => setSubjectTime(Time)}
                                value={subjectTime}
                                keyboardType={'decimal-pad'}
                            />
                            <Input
                                placeholder="מספר דקות ברצף שאפשר ללמוד בקורס"
                                rightIcon={
                                    <Entypo
                                        name='stopwatch'
                                        size={26}
                                        color='black'
                                    />
                                }
                                value={specificLearningTime}
                                keyboardType={'decimal-pad'}
                                onChangeText={(specificTime) => setspecificLearningTime(specificTime)}
                            />
                        </View>
                        {/* <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                autoFocus={fuc2}
                                placeholder="מספר שעות שצריך בשבוע"
                                placeholderTextColor="#003f5c"
                                onChangeText={(Time) => setSubjectTime(Time)}
                                value={subjectTime}
                                keyboardType={'decimal-pad'}
                                disableFullscreenUI={true}
                            />
                        </View>
                        </View>

                        <View style={styles.inputView}>
                            <Input
                                placeholder="Comment"
                                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                                style={styles}
                                onChangeText={value => this.setState({ comment: value })}
                            />
                        </View>
                        <View style={styles.inputView}>

                            <TextInput
                                style={styles.TextInput}
                                placeholder="שם הקורס"
                                placeholderTextColor="#003f5c"
                                value={subjectName}
                                onChangeText={(subjectName) => setSubjectName(subjectName)}
                                autoFocus={fuc1}
                                disableFullscreenUI={true}
                                onEndEditing={() => { fuc1 = false, fuc2 = true }}
                                textAlign={'right'}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                autoFocus={fuc2}
                                placeholder="מספר שעות שצריך בשבוע"
                                value={subjectTime}
                                placeholderTextColor="#003f5c"
                                onChangeText={(Time) => setSubjectTime(Time)}
                                disableFullscreenUI={true}
                                keyboardType={'decimal-pad'}
                            />
                        </View>

                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                autoFocus={fuc2}
                                placeholder=' כמה זמן רצוף ללמידה  (בדקות)'
                                value={specificLearningTime}
                                placeholderTextColor="#003f5c"
                                onChangeText={(specificTime) => setspecificLearningTime(specificTime)}
                                disableFullscreenUI={true}
                                keyboardType={'decimal-pad'}
                            />
                        </View> */}

                        <View style={{ margin: 20 }} >
                            <TouchableOpacity
                            // onPress={() => {
                            //     console.log('subjectNumWeeks'),
                            //         console.log(subjectNumWeeks),
                            //         submitSubject(subjectName, subjectTime, specificLearningTime),
                            //          setSubjectName(''), setSubjectTime(''), setspecificLearningTime('')
                            //         , butoonallert(navigation)

                            // }}
                            >
                                <Button
                                    icon={
                                        <FontAwesome
                                            name='save'
                                            size={40}
                                            color="black"
                                        />
                                    }
                                    iconRight
                                    title="     שמור    "
                                    titleStyle={{ fontSize: 20, color: 'black' }}
                                    type="outline"
                                    containerStyle={{
                                        borderWidth: 1,
                                        borderColor: "#20232a",
                                        borderRadius: 6,
                                    }}
                                    color="black"
                                    onPress={() => {
                                        console.log('subjectNumWeeks'),
                                            console.log(subjectNumWeeks),
                                            submitSubject(subjectName, subjectTime, specificLearningTime,subjectNumWeeks),
                                            setSubjectName(''), setSubjectTime(''),
                                            setspecificLearningTime(''), setsubjectNumWeeks(''),
                                            butoonallert(navigation)
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        {/* <View style={styles.container}>

                            <TouchableOpacity style={styles.btnStyle}
                                onPress={() => {
                                    submitSubject(subjectName, subjectTime, specificLearningTime), setSubjectName(''), setSubjectTime(''), setspecificLearningTime('')
                                        , butoonallert(navigation)
                                }}>
                                <Text style={styles.txtStyle}>שמור</Text>
                            </TouchableOpacity> */}
                        {/* <TouchableOpacity style={styles.btnStyle} onPress={()=>{this.readStorage(locals.cursename)}}>
                    <Text style={styles.txtStyle}>קרא מידע</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>{this.removeStorage(locals.cursename)}}>
                    <Text style={styles.txtStyle}>מחק</Text>
                </TouchableOpacity>
                 </View>
                */}
                        <Divider />
                    </Layout>
                </ScrollView>
            </DismissKeyboardView>
        </SafeAreaView>

    )
};

const DismissKeyboardHOC = (Comp) => {
    return ({ children, ...props }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Comp {...props}>
                {children}
            </Comp>
        </TouchableWithoutFeedback>
    );
};
const DismissKeyboardView = DismissKeyboardHOC(View)


export default connect(mapStateToProps, mapDispatchToProps)(SubjectAnalyzeScreen)





// setItemStorage = async (key, value) => {
//     try {
//         await AsyncStorage.setItem(key, JSON.stringify(value))
//     } catch (err) {
//         console.log("setItemStorage eror")
//     }
// };

// removeItemStorage = async (key) => {
//     try {
//         await AsyncStorage.removeItem(key)
//     } catch (err) {
//         console.log("removeitemstorge eror")
//     }
// };
// getItemStorage = async (key) => {
//     try {
//         const value = await AsyncStorage.getItem(key);
//         if (value !== null) {
//             // We have data!!
//             return value;
//         } else {
//             console.log("getItemStorage eror")
//         }
//     } catch (err) {
//         console.log("getItemStorage2 eror")
//     }
// };
// saveStorage = (key,value) => {
//     if (key != null & value!=null){
//         this.setItemStorage( key, { curseTime: value ,data:{} })
//         Alert.alert('הידיד','המידע נשמר בהצלחה')
//     }else{
//         alert('המידע לא נקלט')
//     }
// }
// readStorage = (key) => {
//     this.getItemStorage(key).then(result => {
//         let jsonObject = JSON.parse(result)
//         alert("שם הקורס:" + jsonObject.key + 'שעות שבועיות:' + jsonObject.curseTime )
//     })

// }
// removeStorage = (key) => {
//     this.removeItemStorage(key)
//     alert('המידע נמחק')
// };
