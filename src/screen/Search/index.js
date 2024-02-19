/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {GetRecipe} from '../../config/redux/action/recipeAction';

function Chat({navigation}) {
  const {loading, recipe} = useSelector(state => state.recipe);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState('ASC');

  const handleSearch = () => {
    dispatch(GetRecipe({sort, keyword: searchQuery}));
  };

  const handleSort = () => {
    setSort(prevSort => (prevSort === 'ASC' ? 'DESC' : 'ASC'));
  };

  useEffect(() => {
    dispatch(GetRecipe({sort, keyword: searchQuery}));
  }, [dispatch, sort, searchQuery]);

  return (
    <View>
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
          <FontAwesome name="search" size={30} color="#999" />
        </View>
        <TextInput
          style={{
            color: '#EFC81A',
            flex: 1,
          }}
          placeholder="Search Pasta, Bread, etc"
          placeholderTextColor={'#999'}
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
          onEndEditing={handleSearch}
        />
      </View>
      <ScrollView vertical={true} style={{marginBottom: 100}}>
        {recipe?.rows?.map(recipeItem => (
          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            key={recipeItem.recipe_id}>
            <Image
              source={{uri: recipeItem.picture}}
              style={{width: 80, height: 80}}
            />
            <View style={{marginLeft: 20, flex: 1}}>
              <Text
                style={{color: '#18172B', fontSize: 18}}
                onPress={() => navigation.navigate('Detailinggrediens')}>
                {recipeItem.name_food}
              </Text>
              <Text style={{color: '#6E80B0', marginVertical: 5}}>Food</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome name="bookmark" size={30} color="#EEC302" />
              <FontAwesome
                style={{marginLeft: 20}}
                name="thumbs-up"
                size={30}
                color="#EEC302"
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Chat;
