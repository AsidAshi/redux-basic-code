import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View ,Alert} from 'react-native';
import { Component } from 'react';
import { connect } from 'react-redux'

const Counter =(props)=>{
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>{props.count}</Text>
                <View style={styles.container1}>
                    <Button style={styles.buttonStyle}
                        title="increase"
                        onPress={() => { 
                            props.increaseCounter()
                        }}
                    >
                        +
                    </Button>
                    <Button style={styles.buttonStyle}
                        onPress={() => { props.dicreaseCounter()}}
                        >
                        -
                    </Button></View>
            </View>
        );
}

const mapStateToProps=(state)=> {
    return({
         count: state.count
         })
}

const mapDispatchToProps=(dispatch)=>{
    return {
        increaseCounter: () => dispatch({ type:'Increase_Counter' }),
        dicreaseCounter: () => dispatch({ type:'Dicrease_Counter' }),
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbcfaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        width: 30,
        // fontSize: 12,
        height: 40,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10
    },
    buttonStyle1: {
        width: 100,
        height: 50,
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    container1: {
        marginTop: 200,
        flexDirection: 'row',
        backgroundColor: '#fbccaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 200,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)