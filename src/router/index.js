import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Register from '../screen/Register';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Uploadrecipe from '../screen/Uploadrecipe';
import HomeScreen from '../screen/Home';
import Detailmenu from '../screen/Detailmenu';
import Detailinggrediens from '../screen/Detailinggrediens';
import DetailVideo from '../screen/Detailvideo';
import Editprofile from '../screen/Editprofile';
import Search from '../screen/Search';
import Profile from '../screen/Profile';
import Myrecipe from '../screen/Myrecipe';
import Updaterecipe from '../screen/Updaterecipe';
import Video from '../screen/Video';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
          // tabBarActiveBackgroundColor: 'yellow',
          tabBarInactiveBackgroundColor: 'white',
          tabBarActiveTintColor: '#EEC302',
          headerStyle: {
            backgroundColor: '#000080',
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Upload"
        component={Uploadrecipe}
        options={{
          tabBarIcon: ({color, size}) => (
            <Octicons name="diff-added" color={color} size={size} />
          ),
          tabBarActiveTintColor: '#EEC302',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="search" color={color} size={size} />
          ),
          tabBarActiveTintColor: '#EEC302',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
          tabBarActiveTintColor: '#EEC302',
        }}
      />
    </Tab.Navigator>
  );
}

function MainRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Homepage"
          component={HomeTabs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detailmenu"
          component={Detailmenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detailinggrediens"
          component={Detailinggrediens}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailVideo"
          component={DetailVideo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Editprofile"
          component={Editprofile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Myrecipe"
          component={Myrecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Updaterecipe"
          component={Updaterecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Video"
          component={Video}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainRoute;
