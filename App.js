
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import MainNavigation from './src/navigations/MainNavigation';
import React from 'react';
import Login from './src/components/formlogin'
import MainMenu from './src/components/MainMenu'
const Appstack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Appstack.Navigator initialRouteName="Login">
          <Appstack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Appstack.Screen
            name="Menu"
            component={MainMenu}
            options={{ headerShown: false }}
          />
        </Appstack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
