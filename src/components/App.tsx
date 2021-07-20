import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../navigators/DrawerNavigator';


// linking both stack navigators into bottom nav adn adding bottom nav to the home portion of drawer
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;