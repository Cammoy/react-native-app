// Setup Application VARS
//------------------------------

let env = 'PROD',
    base = '';
    root = '';

if( env == 'DEV') {
  base = '';
  root = '';
}

       let    API             = "http://0.0.0.0:3000/api"
export const  MOCK_DATA       = "../mock/data.json"

// Users
export const  API_USERS       = API + "/Users"
export const  API_USER_LOGIN  = API_USERS + "/login"
export const  API_USER_REG    = API_USERS + "/register"
export const  API_USER_LOGOUT = API_USERS + "/logout"
export const  API_USER_RESET  = API_USERS + "/reset"
export const  API_USER_UPDATE = API_USERS + "/update"

// Listings
//---------------------------------------------------

export const  API_LISTING     = API + "/Events"

// Custom Error Codes - ( Need to organise error code by actions )
//----------------------------------------------------------------

export const ERROR_CODES = [
  {
    code: 400,
    message: 'Please ensure your email is in the correct format'
  },
  {
    code: 401,
    message: 'Please check your username and password and try again'
  },
  {
    code: 403,
    message: 'Resource forbidden'
  },
  {
    code: 404,
    message: 'Resource not found'
  },
  {
    code: 409,
    message: 'Duplicate'
  },
  {
    code: 500,
    message: 'Unfortunately there was a server error, we have been notified.'
  }
];

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
