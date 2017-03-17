/**
  @author Kwasi Brown
  @desc   Host or guest summary components
  @usage  { time: , payment: , cousine: , participants }
**/

import { ICONS } from '../../config'
import React  from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon   from 'react-native-vector-icons/FontAwesome'


const Summary = ({item, invitee}) => {

  const size = 18;

  // Participants calulated by the number of accepted invites
  //---------------------------------------------------------

  const _participants = () => {
    participants = 3 // temporary value in development mode
    return (
      <Icon style={styles.icon} name={ICONS.participants} size={size}>
        <Text style={styles.iconText}> {participants}</Text>
      </Icon>
    )

  }

  return(
    <View style={styles.container}>
      <Icon style={styles.icon} name={ICONS.time} size={size}>
        <Text style={styles.iconText}> {item.time}</Text>
      </Icon>
      <Icon style={styles.icon} name={ICONS.payment} size={size}>
          <Text style={styles.iconText}> {item.budget}</Text>
      </Icon>
      <Icon style={styles.icon} name={ICONS.cousine} size={size}>
        <Text style={styles.iconText}> {item.cousine}</Text>
      </Icon>
      {!invitee ? _participants() : null}
    </View>
  )
}
Summary.PropTypes = {
  item: React.PropTypes.obj,
  invitee: React.PropTypes.bool
};
export default Summary;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:10,
    justifyContent: 'space-between'

  },
  menuItem: {
    color: '#444',
    padding:0,
    paddingTop:5,
    paddingBottom:0,
    marginBottom:30,
    textAlign: 'center',
  },
  icon: {
    textAlign:'center',
    color:'#1e8cbe'
  },
  iconText: {
    color: '#666',
  }
})
