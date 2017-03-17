import CONFIG from '../../config';
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import styles from './style';

const ACCESS_TOKEN = 'access_token';

const BackgroundImage = ({image, children}) => {

  console.log(image);

  return (
    <Image source={require('../../assets/general/background.png')}
      style={styles.backgroundImage}>
      {children}
    </Image>
  )

}

export default BackgroundImage;
