import React, {Component} from "react";
import { Actions } from 'react-native-router-flux';
import { Image, StyleSheet, View, TouchableHighlight, Text, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

export default Front = ({items, onPress}) => {

 if(items) {
   items = items.map( (item, i) => {
     return (
        <TouchableHighlight key={i} style={styles.summary} underlayColor="#EEE" onPress={onPress.bind(this, item)}>
           <View style={styles.flexcontainer}>
             <Image style={styles.image} source={{uri: item.image}} />
             <View style={styles.summaryContent}>
               <Text>Name: {item.fname} {item.lname}</Text>
               <Text>Location: {item.location}</Text>
               <Text>Occupation: {item.occupation}</Text>
             </View>
           </View>
         </TouchableHighlight>)
   })
 }

 return (
    <View style={styles.container}>
        {items? items : null}
    </View>
  )
}
