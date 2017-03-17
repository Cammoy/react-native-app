/**
 * Custom App Wrapper with header and footer
*/
import CONFIG from '../../config';
import React from 'react';
import Welcome from '../../components/root/';
import { Actions } from 'react-native-router-flux';
import {
  Text, View
} from 'react-native';
import styles from './style';


const AppWrap = () => {
  return (
    <View style={styles.appWrap}>
       <View style={styles.container}>

         {/* Render Application Scene Content */}
         {this.props.children}

       </View>
    </View>
  )
}
export default AppWrap
