/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {Regis} from '../../config/redux/action/userAction';

function Register({navigation}) {
  const {loading} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    email_address: '',
    phone: '',
    password: '',
    verify_password: '',
  });

  const handleChange = (name, value) => {
    console.log('handleChange', name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log(form);

  const handleRegister = async () => {
    try {
      const user = await dispatch(Regis(form));
      console.log('data user', user);
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Register Successful',
      });
      console.log('Navigating to Login');
      navigation.navigate('Login');
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Register Failed',
        text2: error.message,
      });
    }
  };

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 5,
          color: '#EFC81A',
          fontWeight: 300,
        }}>
        Let’s Get Started !
      </Text>
      <Text style={{color: '#C4C4C4'}}>
        Create new account to access all feautures
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
          <Feather name="user" size={20} color="#999" />
        </View>
        <TextInput
          style={{
            color: '#EFC81A',
            flex: 1,
          }}
          placeholder="Name"
          placeholderTextColor={'#999'}
          value={form.name}
          onChangeText={text => handleChange('name', text)}
        />
      </View>
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
          <FontAwesome name="envelope" size={20} color="#999" />
        </View>
        <TextInput
          style={{
            color: '#EFC81A',
            flex: 1,
          }}
          placeholder="E-mail"
          placeholderTextColor={'#999'}
          value={form.email_address}
          onChangeText={text => handleChange('email_address', text)}
        />
      </View>
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
          <FontAwesome name="phone" size={20} color="#999" />
        </View>
        <TextInput
          style={{
            color: '#EFC81A',
            flex: 1,
          }}
          placeholder="Phone Number"
          placeholderTextColor={'#999'}
          value={form.phone}
          onChangeText={text => handleChange('phone', text)}
        />
      </View>
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
          <FontAwesome name="lock" size={20} color="#999" />
        </View>
        <TextInput
          style={{
            color: '#EFC81A',
            flex: 1,
          }}
          placeholder="Create New Password"
          placeholderTextColor={'#999'}
          secureTextEntry={true}
          value={form.verify_password}
          onChangeText={text => handleChange('verify_password', text)}
        />
      </View>
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
          <FontAwesome name="unlock" size={20} color="#999" />
        </View>
        <TextInput
          style={{
            color: '#EFC81A',
            flex: 1,
          }}
          placeholder="New Password"
          placeholderTextColor={'#999'}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={{
          width: 300,
          backgroundColor: '#EFC81A',
          marginHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 15,
          marginTop: 20,
        }}
        onPress={handleRegister}>
        <Text style={{textAlign: 'center'}}>Create</Text>
      </TouchableOpacity>
      <Text style={{color: '#999', marginTop: 10}}>
        Already have account?{' '}
        <Text
          style={{color: '#EFC81A'}}
          onPress={() => navigation.navigate('Login')}
          // onPress={'Register'}
        >
          Log in Here
        </Text>
      </Text>
    </View>
  );
}

export default Register;
