//import all components needed
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Import all screens
import APIscreen from './src/screens/APIscreen';
import { LogIn } from './src/screens/LogInScreen';
import { LogOut } from './src/screens/LogOutScreen';
import { Splash } from './src/screens/SplashScreen';
import { LineKit } from './src/screens/BezierChart';

import { AuthContext } from './src/Context';

//initialize the two navigators
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

//bottom tab navigator with 3 tabs
const AppStack = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="API"
        component={APIscreen}
        options={{
          tabBarLabel: 'API',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={ color } size={size} />
          ),
          avtiveTintColor: '#45aaf2',
        }}
      />
      <Tab.Screen
        name="Graph"
        component={LineKit}
        options={{
          tabBarLabel: 'Graph',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-line" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Log Out"
        component={LogOut}
        options={{
          tabBarLabel: 'Log Out',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
);

//creating the stack navigator that contains
//the authentication flow logic.
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false
  }}>
    {userToken ? (   //if userToken -> go the app will load the bottom tab navigator screen
      <RootStack.Screen
        name="App"
        component={AppStack}
      />
  ) : ( //if userToken -> null the app will load the login screen
      <RootStack.Screen
        name="Login Form"
        component={LogIn}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  //this function changes the state of the four variables above,
  //with the help of login and logout screens
  const authContext = React.useMemo(() => {
    return {
      logIn: () => {
        setIsLoading(false);
        setUserToken("go");
      },
      logOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  //virtual loading effect
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  //something like a splash screen
  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value = { authContext }>
      <NavigationContainer>
        <RootStackScreen userToken = { userToken }/>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
