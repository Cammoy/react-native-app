import CONFIG from '../../config';
import React, {Component} from "react";
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, TouchableHighlight, Text, AsyncStorage } from 'react-native';
import styles from './style';
import t from 'tcomb-form-native';
var Form = t.form.Form;

var Type = t.struct({
  name:           t.String,
  surname:        t.maybe(t.String),
  email:          t.String,
  birthDate:      t.maybe(t.Date)
});

var options = {
  auto: 'placeholders',
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    },
    occupation: {
      item: { // <= options applied to each item in the list
        label: 'Student',
        value: 'stu'
      }
    }
  }
};

export default class Profile extends Component {

  onPress() {

    var value = this.refs.form.getValue();
    if (value) {

        // Update current record by email
        //---------------------------------------------------

        Actions.dashboard();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Type}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={Actions.dashboard} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Dashboard</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
