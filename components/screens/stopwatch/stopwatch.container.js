import  React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import ListComponent from "./list.component";
import { styles } from "../../style/styles";

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

class StopwatchContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            min: 0,
            sec: 0,
            msec: 0
        }

        this.lapArr = [];

        this.interval = null;
    }

    handleToggle = () => {
        this.setState(
            {
                start: !this.state.start
            },
            () => this.handleStart()
        );
    };

    handleLap = (min, sec, msec) => {
        this.lapArr = [
            ...this.lapArr,
            {min, sec, msec}
        ]

    };

    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 99) {
                    this.setState({
                        msec: this.state.msec + 1
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec
                    });
                } else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }
            }, 1);

        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
        this.setState({
            min: 0,
            sec: 0,
            msec: 0,

            start: false
        });

        clearInterval(this.interval);

        this.lapArr = [];
    };


    render(){
        return(
            <SafeAreaView>
            <View style={{alignItems:"center"}}>
                <View style={styles.parent}>
                    <Text style={styles.child}>{'  '+ padToTwo(this.state.min) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.sec) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.msec)}</Text>
                </View>

                <View style={styles.buttonParent}>
                    <TouchableOpacity style={styles.btnStyle} onPress={this.handleReset}><Text style={styles.txtStyle}>Reset</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle} onPress={this.handleToggle}><Text style={styles.txtStyle}>{!this.state.start? 'Start': 'Stop'}</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle} onPress={()=>this.handleLap(this.state.min, this.state.sec, this.state.msec)} disabled={!this.state.start}><Text style={styles.txtStyle}>Lap</Text></TouchableOpacity>
                </View>

                <ListComponent lap={this.lapArr} />

            </View>
            </SafeAreaView>
        );
    }


}


export default StopwatchContainer;