import VARS from '../../vars';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
import EStyleSheet from 'react-native-extended-stylesheet';


var styles = EStyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    marginTop:63,
    marginBottom:28,
  },
  appWrap: {
    flex:1,
    flexDirection: 'column',
    padding:0,
    margin:0,
  },

})

export default styles;
