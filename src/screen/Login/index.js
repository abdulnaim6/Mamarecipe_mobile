import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Toast from 'react-native-toast-message';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../../config/redux/action/userAction';
import {useDispatch, useSelector} from 'react-redux';

function Login({navigation}) {
  const {loading} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email_address: '',
    verify_password: '',
  });

  const handleChange = (name, value) => {
    console.log('handleChange', name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const user = await dispatch(login(form));
      console.log('data user', user);
      if (user !== null) {
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Login Successful',
        });
        console.log('Navigating to Home');
        navigation.navigate('Homepage');
      } else {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Login Failed',
          text2: 'Invalid user data received',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Login Failed',
        text2: error.message,
      });
      console.log(error.message);
    }
  };
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
      <View
        style={{backgroundColor: '#C4C4C4', borderRadius: 60, marginTop: 30}}>
        <Feather name="user" size={123} />
      </View>
      <Text style={{fontSize: 30, marginBottom: 5, color: '#EFC81A'}}>
        Welcome !
      </Text>
      <Text style={{color: '#C4C4C4', marginBottom: 10}}>
        Log in to your existing account.
      </Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          borderColor: '#999',
          borderWidth: 1,
          marginHorizontal: 20,
          borderRadius: 15,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <Feather name="user" size={30} color="#999" />
        </View>
        <TextInput
          style={{color: '#EFC81A', flex: 1}}
          placeholder="examplexxx@gmail.com"
          placeholderTextColor={'#999'}
          value={form.email_address}
          onChangeText={text => handleChange('email_address', text)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderColor: '#999',
          borderWidth: 1,
          marginHorizontal: 20,
          borderRadius: 15,
          marginTop: 20,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <FontAwesome name="lock" size={30} color="#999" />
        </View>
        <TextInput
          style={{color: '#EFC81A', flex: 1}}
          placeholder="Password"
          placeholderTextColor={'#999'}
          secureTextEntry={true}
          value={form.verify_password}
          onChangeText={text => handleChange('verify_password', text)}
        />
      </View>
      <Text
        style={{color: '#999', marginBottom: 30, marginLeft: 190}}
        onPress={() => navigation.navigate('Splash')}>
        Forgot Password ?
      </Text>
      <TouchableOpacity
        style={{
          width: 300,
          backgroundColor: '#EFC81A',
          marginHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 15,
        }}
        onPress={handleLogin}>
        <Text style={{textAlign: 'center'}}>LOG IN</Text>
      </TouchableOpacity>
      <Text style={{color: '#999', marginTop: 10}}>
        Don’t have an account?{' '}
        <Text
          style={{color: '#EFC81A'}}
          onPress={() => navigation.navigate('Register')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

export default Login;
