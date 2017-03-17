import React, {Component} from "react";
import { Actions } from 'react-native-router-flux';
import { Image, StyleSheet, View, TouchableHighlight, Text, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const Back = ({items, onPress}) => {

 if(items) {
   items = items.map( (item, i) => {
     return (<View key={i} style={styles.container} onPress={onPress}>
         <View style={styles.front}>
           <Image style={styles.image} source={{uri: item.image}} />
           <Text>BACK Name: {item.fname} {item.lname}</Text>
           <Text>Location: {item.location}</Text>
           <Text>Occupation: {item.occupation}</Text>
         </View>
     </View>)
   })
 }

  return (
    <View style={styles.container}>
        {items? items : null}
    </View>
  )
}
export default Back;
