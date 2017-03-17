import React, {Component} from "react";
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const Errors = ({errors}) => {

  const listErrors = errors.map( (item, i) => {
    return <Icon name="times" size={18} key={'error' + i} style={styles.errorItem}> {item}</Icon>
  });

return (
    <View style={styles.errors}>
      { errors.length > 0 ? listErrors : null }
    </View>
  )
}

export default Errors;
