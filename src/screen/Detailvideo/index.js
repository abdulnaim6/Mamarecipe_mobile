import * as React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function DetailVideo({navigation}) {
  return (
    <View>
      <View>
        <Image
          style={{width: 400, height: 400}}
          source={require('../../image/pizzamini.jpeg')}
        />

        <Text
          style={{
            position: 'absolute',
            top: 180,
            left: 30,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 45,
          }}>
          Pizza Mini
        </Text>
        <Text
          style={{
            position: 'absolute',
            top: 250,
            left: 30,
            color: '#B0B0B0 ',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          By Chef Ronald Humson
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          height: 500,
          width: 360,
          borderRadius: 15,
          marginTop: 300,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{color: '#18172B', marginLeft: 20, marginTop: 20}}
            onPress={() => navigation.navigate('Detailinggrediens')}>
            Ingrediens
          </Text>
          <Text
            style={{color: '#666666', marginLeft: 20, marginTop: 20}}
            onPress={() => navigation.navigate('DetailVideo')}>
            Video Step
          </Text>
        </View>
        {/* <View style={{backgroundColor: '#EEC302', width: 30, marginLeft: 20}}>
          <FontAwesome
            style={{
              marginLeft: 20,
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            name="play"
            size={20}
            color="#999"
          />
        </View> */}
        <View style={{marginLeft: 20, marginTop: 20, flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#EEC302',
              width: 40,
              height: 40,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome name="play" size={20} color="#fff" />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#18172B', fontSize: 18}}>Pizza Mini</Text>
            <Text style={{color: '#6E80B0', marginVertical: 5}}>
              cooking pizzamini
            </Text>
          </View>
        </View>
        <View style={{marginLeft: 20, marginTop: 20, flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#EEC302',
              width: 40,
              height: 40,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome name="play" size={20} color="#fff" />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#18172B', fontSize: 18}}>Pizza Mini</Text>
            <Text style={{color: '#6E80B0', marginVertical: 5}}>
              cooking pizzamini
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default DetailVideo;
