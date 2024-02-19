/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Detailinggrediens({navigation}) {
  return (
    <View>
      <View style={{position: 'relative'}}>
        <Image
          style={{width: 400, height: 400}}
          source={require('../../image/pizzamini.jpeg')}
        />

        <View
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="chevron-left"
            size={30}
            color="#8C8C8C"
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={{color: '#EEC302', fontSize: 30, marginLeft: 10}}>
            Recipe
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            top: 180,
            left: 30,
            width: 340,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 45,
            }}>
            Pizza Mini
          </Text>
          <Text
            style={{
              color: '#B0B0B0 ',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            By Chef Ronald Humson
          </Text>
        </View>
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
          <Text style={{color: '#18172B', marginLeft: 20, marginTop: 20}}>
            Ingredients
          </Text>
          <Text
            style={{color: '#666666', marginLeft: 20, marginTop: 20}}
            onPress={() => navigation.navigate('DetailVideo')}>
            Video Step
          </Text>
        </View>
        <Text style={{color: '#666', marginHorizontal: 20, marginTop: 20}}>
          - Terigu protein tinggi: 200 gram, - Ragi instant: 1/2 sdt, - Gula
          pasir: 1 sdm, - Minyak goreng: 2 sdm, - Garam: 1/2 sdt.
        </Text>
      </View>
    </View>
  );
}

export default Detailinggrediens;
