import React from 'react';
import { StyleSheet, Text, View,Alert} from 'react-native';
import { Component } from 'react';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState={
  count :0
} 

const reducer=(state=initialState,action )=>{
  switch(action.type){
case 'Increase_Counter':
return {count:state.count+1}
case 'Dicrease_Counter':
return {count:state.count-1}

  }
 return state
}

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Counter />
      </Provider>
    );
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
    fontSize: 50,
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

