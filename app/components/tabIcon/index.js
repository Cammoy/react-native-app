import CONFIG from '../../config';
import React, {Component} from "react";
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, TouchableHighlight, Text, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const TabIcon = ({selected, title, otherProps}) => {

  return (

    <View style={{alignItems:'center', 'justifyContent': 'center'}}>
        <Icon name={otherProps.icon} size={18} color={CONFIG.COLOR.g4}></Icon>
        <Text style={{color: selected ? CONFIG.COLOR.g6: CONFIG.COLOR.g4}}>{title}</Text>
    </View>
  )
}
export default TabIcon;
