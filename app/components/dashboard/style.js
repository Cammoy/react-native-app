import CONFIG from '../../config';
import EStyleSheet from 'react-native-extended-stylesheet';

var styles = EStyleSheet.create({

  container: {
    backgroundColor:'black',
    marginTop:20,
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap: 'wrap',
  },
  tile: {
    justifyContent:'center',
    backgroundColor:'#CCC',
    padding:15,
    width:'50%',
    height:'33.3333333333%',
    alignItems:'center',
    borderColor:'#EEE',
    borderWidth:1
  },
  icon: {
    textAlign: 'center',
  },
  title: {
    color:'#FFF',
    textAlign: 'center',
  },
  desc: {
    alignItems:'center'
  },
  descText: {
    color:'#EEE',
    alignItems:'center'
  },
  richBlack: {
    backgroundColor:'#0D0221',
    justifyContent:'center',
    padding:15,
    width:'50%',
    height:'33.3333333333%',
    alignItems:'center',
    borderColor:'#EEE',
    borderWidth:1
  },
  seaBlue: {
    backgroundColor: '#006494',
    justifyContent:'center',
    padding:15,
    width:'50%',
    height:'33.3333333333%',
    alignItems:'center',
    borderColor:'#EEE',
    borderWidth:1
  },
  blue: {
    backgroundColor: '#0090C1',
    justifyContent:'center',
    padding:15,
    width:'50%',
    height:'33.3333333333%',
    alignItems:'center',
    borderColor:'#EEE',
    borderWidth:1
  },
  vivid_crerulean: {
    backgroundColor: '#00A7E1',
    justifyContent:'center',
    padding:15,
    width:'50%',
    height:'33.3333333333%',
    alignItems:'center',
    borderColor:'#EEE',
    borderWidth:1
  },
  crimson: {
    backgroundColor: '#DB162F',
    justifyContent:'center',
    padding:15,
    width:'50%',
    height:'33.3333333333%',
    alignItems:'center',
    borderColor:'#EEE',
    borderWidth:1
  },
  controlText: {
    color: 'red',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }

})

export default styles;
