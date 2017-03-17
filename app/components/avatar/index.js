import { DEFAULT_AVATAR } from '../../config'
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

// GET AVATAR IF IT EXIST AND MAKE IT CIRCULAR

const Avatar = ({src = DEFAULT_AVATAR + 90, size = 90, name}) => {

  return <View>
          <Image style={{width: size, height: size, borderRadius: size/2}} source={{uri:src}} />
          {name ?<Text style={styles.name}>{name}</Text>: null}
        </View>

}

Avatar.PropTypes = {
  image: React.PropTypes.obj
}
export default Avatar;

const styles = StyleSheet.create({
  name:{
    paddingTop:5,
    paddingBottom:10,
    textAlign:'center'
  }
})
