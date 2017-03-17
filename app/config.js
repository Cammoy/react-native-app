// Setup Application VARS
//------------------------------

let env = 'prod',
    base = '';
    root = '';

if( env == 'dev') {
  base = '';
  root = '';
}

export default {
  TITLE: {
    HOME:'Kwasi RN App'
  },
  API: {
      ROOT:     root,
      BASE:     base,
      LOGIN:    root + 'login',
      REGISTER: root + 'register',
  },
  COLOR: {
    g1: '#114998',
    g2: '#111',
    g3: '#222',
    g4: '#FFFFFF',
    g5: '#111',
    g6: '#FF0'
  }
}

// APP DASHBOARD CONFIGURATION
//--------------------------------------------------------------

export const DASHBOARD = {
  MENU:[
    {
      id:   'switch',
      name: 'Switch',
      icon: 'user',
      size: 22
    },
    {
      id:   'invites',
      name: 'My Invites',
      icon: 'envelope',
      size: 22
    },
    {
      id:   'settings',
      name: 'Settings',
      icon: 'cog',
      size: 22
    },
    {
      id:   'legal',
      name: 'Info',
      icon: 'info',
      size: 22
    }
  ]
}

// APP DEFAULT AVATAR
//--------------------------------------------------------------
export const DEFAULT_AVATAR =  'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y&s='





export const DICTIONARY = {
  INACTIVE:         'Your account is now inactive!',
  STATUS_TOGGLE:    'Availability'
}


// APP ICONS
//--------------------------------------------------------------

export const ICONS = {
  cousine:          'cutlery',
  time:             'clock-o',
  payment:          'credit-card',
  participants:     'user'

}



// TODO
//--------------------------------------------------------------

// react-native-gifted-chat
// react-native-share https://github.com/EstebanFuentealba/react-native-share
// react-native-communications
// layout details page
// Allow user to set location or choose current location
// Full Screen background image on welcome screen
// Forgot Password form
