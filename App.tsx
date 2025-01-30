import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import './global.css';
import AppLogin from './src/screens/login/AppLogin';
import AppRegister from './src/screens/register/AppRegister';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppTodo from './src/screens/todo/AppTodo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <Stack.Navigator
              initialRouteName="AppTodo"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="AppTodo" component={AppTodo} />
              <Stack.Screen name="Register" component={AppRegister} />
              <Stack.Screen name="Login" component={AppLogin} />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
