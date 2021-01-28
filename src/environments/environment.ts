// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from '../app/shared/type/environment.interface'

export const environment: Environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA0zc1pFXzw72R4AIvjEPB5cQbt5t_j09o',
    authDomain: 'banderol-5150d.firebaseapp.com',
    databaseURL: 'https://banderol-5150d-default-rtdb.firebaseio.com',
    projectId: 'banderol-5150d',
    storageBucket: 'banderol-5150d.appspot.com',
    messagingSenderId: '841555142722',
    appId: '1:841555142722:web:89b6ef93a91ab503f165db',
  },
  fbDbUrl: 'https://banderol-5150d-default-rtdb.firebaseio.com/',
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
