import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawer from './src/navigation/HomeDrawer';
import Home from './src/screens/Home';

const App = () => {
  return (
    <Home/>
    // <NavigationContainer>
    //   <HomeDrawer/>  
    // </NavigationContainer>
  );
};

export default App;
