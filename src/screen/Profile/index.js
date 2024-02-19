/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

function Profile({navigation}) {
  return (
    <View>
      <View style={{backgroundColor: '#EEC302', width: 375, height: 250}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}>
          <Image
            source={require('../../image/pizzamini.jpeg')}
            style={{width: 84, height: 84, borderRadius: 60}}
          />
          <Text style={{fontSize: 16}}>Abdul Naim</Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          height: 500,
          width: 330,
          marginHorizontal: 20,
          borderRadius: 15,
          marginTop: 200,
        }}>
        <View
          style={{
            borderRadius: 15,
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 10,
          }}>
          <FontAwesome name="user" size={30} color="#EEC302" />
          <Text
            style={{
              color: '#000000B2',
              fontSize: 20,
              marginLeft: 5,
              flex: 0.9,
            }}>
            Edit Profile
          </Text>
          <FontAwesome
            name="chevron-right"
            size={30}
            color="#8C8C8C"
            onPress={() => navigation.navigate('Editprofile')}
          />
        </View>
        <View
          style={{
            borderRadius: 10,
            flexDirection: 'row',
            marginVertical: 15,
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <FontAwesome name="award" size={30} color="#EEC302" />
          <Text
            style={{
              color: '#000000B2',
              fontSize: 20,
              marginLeft: 5,
              flex: 0.9,
            }}>
            My Recipe
          </Text>
          <FontAwesome
            name="chevron-right"
            size={30}
            color="#8C8C8C"
            onPress={() => navigation.navigate('Myrecipe')}
          />
        </View>
        <View
          style={{
            marginVertical: 10,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <FontAwesome name="bookmark" size={30} color="#EEC302" />
          <Text
            style={{
              color: '#000000B2',
              fontSize: 20,
              marginLeft: 5,
              flex: 0.9,
            }}>
            Save Recipe
          </Text>
          <FontAwesome name="chevron-right" size={30} color="#8C8C8C" />
        </View>
        <View
          style={{
            marginVertical: 10,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <FontAwesome name="thumbs-up" size={30} color="#EEC302" />
          <Text
            style={{
              color: '#000000B2',
              fontSize: 20,
              marginLeft: 5,
              flex: 0.9,
            }}>
            Like Recipe
          </Text>
          <FontAwesome name="chevron-right" size={30} color="#8C8C8C" />
        </View>
      </View>
    </View>
  );
}

export default Profile;
