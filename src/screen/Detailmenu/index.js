/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

function Detailmenu({navigation}) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
          marginLeft: 20,
        }}>
        <FontAwesome
          name="chevron-left"
          size={30}
          color="#8C8C8C"
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={{color: '#EEC302', fontSize: 30, marginLeft: 60}}>
          Popular Menu
        </Text>
      </View>
      <View style={{marginLeft: 20, flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../../image/pizzamini.jpeg')}
          style={{width: 80, height: 80}}
        />
        <View style={{marginLeft: 20}}>
          <Text
            style={{color: '#18172B', fontSize: 18}}
            onPress={() => navigation.navigate('Detailinggrediens')}>
            Pizza Mini
          </Text>
          <Text style={{color: '#6E80B0', marginVertical: 5}}>
            In Veg Pizza
          </Text>
          <Text style={{color: '#18172B', fontSize: 14}}>Spicy</Text>
        </View>
        <View style={{marginLeft: 70, flexDirection: 'row', marginTop: 25}}>
          <FontAwesome name="bookmark" size={30} color="#EEC302" />
          <FontAwesome
            style={{marginLeft: 20}}
            name="thumbs-up"
            size={30}
            color="#EEC302"
          />
        </View>
      </View>
      <View style={{marginLeft: 20, flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../../image/pizzamini.jpeg')}
          style={{width: 80, height: 80}}
        />
        <View style={{marginLeft: 20}}>
          <Text style={{color: '#18172B', fontSize: 18}}>Veg Loaded</Text>
          <Text style={{color: '#6E80B0', marginVertical: 5}}>
            In Veg Pizza
          </Text>
          <Text style={{color: '#18172B', fontSize: 14}}>Spicy</Text>
        </View>
        <View style={{marginLeft: 65, flexDirection: 'row', marginTop: 25}}>
          <FontAwesome name="bookmark" size={30} color="#EEC302" />
          <FontAwesome
            style={{marginLeft: 20}}
            name="thumbs-up"
            size={30}
            color="#EEC302"
          />
        </View>
      </View>
      <View style={{marginLeft: 20, flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../../image/pizzamini.jpeg')}
          style={{width: 80, height: 80}}
        />
        <View style={{marginLeft: 20}}>
          <Text style={{color: '#18172B', fontSize: 18}}>Fresh Veggie</Text>
          <Text style={{color: '#6E80B0', marginVertical: 5}}>
            In Veg Pizza
          </Text>
          <Text style={{color: '#18172B', fontSize: 14}}>Spicy</Text>
        </View>
        <View style={{marginLeft: 54, flexDirection: 'row', marginTop: 25}}>
          <FontAwesome name="bookmark" size={30} color="#EEC302" />
          <FontAwesome
            style={{marginLeft: 20}}
            name="thumbs-up"
            size={30}
            color="#EEC302"
          />
        </View>
      </View>
      <View style={{marginLeft: 20, flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../../image/pizzamini.jpeg')}
          style={{width: 80, height: 80}}
        />
        <View style={{marginLeft: 20}}>
          <Text style={{color: '#18172B', fontSize: 18}}>Tomato</Text>
          <Text style={{color: '#6E80B0', marginVertical: 5}}>
            In Veg Pizza
          </Text>
          <Text style={{color: '#18172B', fontSize: 14}}>Spicy</Text>
        </View>
        <View style={{marginLeft: 80, flexDirection: 'row', marginTop: 25}}>
          <FontAwesome name="bookmark" size={30} color="#EEC302" />
          <FontAwesome
            style={{marginLeft: 20}}
            name="thumbs-up"
            size={30}
            color="#EEC302"
          />
        </View>
      </View>
      <View style={{marginLeft: 20, flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../../image/pizzamini.jpeg')}
          style={{width: 80, height: 80}}
        />
        <View style={{marginLeft: 20}}>
          <Text style={{color: '#18172B', fontSize: 18}}>Veg Loaded</Text>
          <Text style={{color: '#6E80B0', marginVertical: 5}}>
            In Veg Pizza
          </Text>
          <Text style={{color: '#18172B', fontSize: 14}}>Spicy</Text>
        </View>
        <View style={{marginLeft: 60, flexDirection: 'row', marginTop: 25}}>
          <FontAwesome name="bookmark" size={30} color="#EEC302" />
          <FontAwesome
            style={{marginLeft: 20}}
            name="thumbs-up"
            size={30}
            color="#EEC302"
          />
        </View>
      </View>
      <View style={{marginLeft: 20, flexDirection: 'row', marginTop: 20}}>
        <Image
          source={require('../../image/pizzamini.jpeg')}
          style={{width: 80, height: 80}}
        />
        <View style={{marginLeft: 20}}>
          <Text style={{color: '#18172B', fontSize: 18}}>Farm House</Text>
          <Text style={{color: '#6E80B0', marginVertical: 5}}>
            In Veg Pizza
          </Text>
          <Text style={{color: '#18172B', fontSize: 14}}>Spicy</Text>
        </View>
        <View style={{marginLeft: 54, flexDirection: 'row', marginTop: 25}}>
          <FontAwesome name="bookmark" size={30} color="#EEC302" />
          <FontAwesome
            style={{marginLeft: 20}}
            name="thumbs-up"
            size={30}
            color="#EEC302"
          />
        </View>
      </View>
    </View>
  );
}

export default Detailmenu;
