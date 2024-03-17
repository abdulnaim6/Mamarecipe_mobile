/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import icon from '../../image/iconrecipe.png';

function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);
  return (
    <View style={{backgroundColor: '#EFC81A'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 500,
        }}>
        <Image source={icon} style={{marginBottom: 2000}} />
      </View>
    </View>
  );
}

export default Splash;
