import { StackActions } from '@react-navigation/native';
import * as React from 'react';import { Homepage } from './pages/';
import Router from './Router';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return(
    // <Homepage />
    // <StackActions.Container>
    //   <Router />
    // </StackActions.Container>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    
    
  );
};

export default App;