import CONFIG from '../../config';
import EStyleSheet from 'react-native-extended-stylesheet';

var styles = EStyleSheet.create({

  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    marginTop:'25%',
    padding: 20,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
    color: '#0D0221'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#006494',
    borderColor: '#006494',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  wrapControls: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    position:'absolute',
    bottom:50,
    width: '100%',
    padding: 20,
    justifyContent: 'center'
  }

});

export default styles;
