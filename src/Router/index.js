import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Destinasi, Destinasidetail, Homepage, Splash } from '../pages';
import React from 'react';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator initialRouteName='Homepage'>
      {/* <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} /> */}
      <Stack.Screen name="Homepage" component={Homepage} options={{headerShown: false}} />
      <Stack.Screen name="Destinasi" component={Destinasi} options={{headerShown: false}} />
      <Stack.Screen name="Destinasidetail" component={Destinasidetail} options={{headerShown: false}} />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default Router;