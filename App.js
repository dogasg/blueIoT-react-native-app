import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import InitialAPIscreen from './src/screens/InitialAPIscreen';
import GraphScreen from './src/screens/GraphScreen';
import { LogIn } from './src/screens/LogInScreen';
import { LogOut } from './src/screens/LogOutScreen';
import { Splash } from './src/screens/SplashScreen';

import { AuthContext } from './src/Context';

import { LineKit } from './src/screens/TestGraphKit';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="API"
        component={InitialAPIscreen}
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

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false
  }}>
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={AppStack}
      />
    ) : (
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

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

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
