import CONFIG from '../../config';
import React, {Component} from "react";
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, TouchableHighlight, Text, AsyncStorage, Alert } from 'react-native';
import AppIntro from 'react-native-app-intro';

export default class Intro extends Component {

  onSkipBtnHandle = (index) => {
  }
  doneBtnHandle = () => {
    //Actions.tabbar();
    AsyncStorage.setItem('intro', 'yes');
    Actions.unauth({type:'reset'});
  }
  nextBtnHandle = (index) => {
    Alert.alert('Next');
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }
  render() {
    const pageArray = [{
      title: 'Welcome',
      description: 'This is just sample text and will be replaced with real text.',
      img: 'https://www.iconfinder.com/icons/37861/download/png/128',
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Eat',
      description: 'This is just sample text and will be replaced with real text.',
      img: 'https://www.iconfinder.com/icons/37853/download/png/128',
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    },
    {
      title: 'Have Fun!',
      description: 'This is just sample text and will be replaced with real text.',
      img: 'https://www.iconfinder.com/icons/37854/download/png/128',
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#000',
      fontColor: '#fff',
      level: 10,
    }

  ];
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle.bind(this)}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    );
  }
}
