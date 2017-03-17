import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


// MENU
//----------------------------------------------------------

const Menu = ({items, callback}) => {

  console.log(items)

  let menuItems = [];

    if( items.length ) {
      menuItems = items.map( (item, i) => {
        return (
          <TouchableOpacity key={i} onPress={callback.bind(this, item.name)}>
            <Icon style={styles.icon} name={item.icon} size={item.size} color="#1e8cbe"></Icon>
            <Text style={styles.menuItem}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )
      })
    }

    return (
      <View style={styles.container}>
        {menuItems}
      </View>
    )
}

Menu.PropTypes = {
  items: React.PropTypes.array,
  callback: React.PropTypes.func
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#EEE',
    alignItems: 'center',
    padding:10

  },
  menuItem: {
    color: '#444',
    padding:0,
    paddingTop:5,
    paddingBottom:0,
    marginBottom:30,
    textAlign: 'center'
  },
  icon: {
    textAlign:'center'
  }
})
