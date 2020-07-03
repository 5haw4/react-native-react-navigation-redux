# React Native Boilerplate - Expo, React Navigation (Tabs & Stack) and Redux
React Native boilerplate using Expo, React Navigation (with tabs navigation and nested stack navigation) and Redux already set with Redux-thunk.

## Libraries:
- [react-native](https://reactnative.dev/)
- [expo](https://expo.io/) - wrapper for React Native for even faster and easier development process
- [react-navigation](https://reactnavigation.org/) - routing and navigation (in this project it's used for tabs & stack navigation)
- [redux](https://www.npmjs.com/package/redux) - state container
- [react-redux](https://www.npmjs.com/package/react-redux) - binder for react and redux
- [redux-thunk](https://www.npmjs.com/package/redux-thunk) - async actions for redux (redux middleware)

## Project Structure:
    .
    ├── ...
    ├── src
    │   ├── components                  //reusable components
    │   ├── navigation                  //navigtors
    │   │   ├── TabNavigator.js         //the root tab navigator
    │   │   └── StackNavigators.js      //the nested stack navigators
    │   ├── screens                     //all the screens of the web app
    │   ├── store                       //redux state management
    │   │   ├── actions
    │   │   ├── reducers
    │   │   └── types
    │   └── styles
    │   │   ├── components              //component specific styles
    │   │   └── screens                 //screen specific styles
    │   └── utils                       //utilities
    ├── App.js                          //root file from which the app starts
    └── ...

## Quick Start
1. If you don't have Expo install it globaly ```npm install expo-cli --global```
2. Run ```expo install``` to install the dependencies
3. Run ```expo start``` to start the development server
4. Scan the QR in the console to open the project in the Expo app on your phone
5. Start developing!