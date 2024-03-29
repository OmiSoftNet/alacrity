import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Routes} from './routes';
import {NavigationTheme} from '~config/theme';
import Menu from '~screens/Menu';
import MoveBox from '~screens/MoveBox';
import Cards from '~screens/Cards';
import ExpandHeader from '~screens/ExpandHeader';
import AnimatedSearch from '~screens/AnimatedSearch';
import SlideToHeader from '~screens/SlideToHeader';
import IosWidget from '~screens/IosWidget';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.Menu} component={Menu} />
        <Stack.Screen name={Routes.MoveBox} component={MoveBox} />
        <Stack.Screen name={Routes.Cards} component={Cards} />
        <Stack.Screen name={Routes.ExpandHeader} component={ExpandHeader} />
        <Stack.Screen name={Routes.AnimatedSearch} component={AnimatedSearch} />
        <Stack.Screen name={Routes.SlideToHeader} component={SlideToHeader} />
        <Stack.Screen name={Routes.IosWidget} component={IosWidget} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
