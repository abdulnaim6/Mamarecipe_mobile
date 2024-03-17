/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Detailinggrediens({navigation, route}) {
  const {recipeId} = route.params;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClick = recipeId => {
    navigation.navigate('DetailVideo', {recipeId});
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://be-recipe-two.vercel.app/recipe/${recipeId}`,
        );
        console.log('Recipe Data:', response.data);
        setRecipe(response.data);
      } catch (error) {
        console.error('Failed to fetch recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    if (recipeId) {
      fetchRecipe();
    }
  }, [recipeId]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!recipe) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Error loading recipe</Text>
      </View>
    );
  }

  return (
    <View key={recipe?.recipe_id}>
      <View style={{position: 'relative'}}>
        <Image
          style={{width: 400, height: 400}}
          source={{uri: recipe?.data[0]?.picture}}
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

        <View style={{position: 'absolute', top: 180, left: 30, width: 340}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 45}}>
            {recipe?.data[0]?.name_food}
          </Text>
          <Text style={{color: '#B0B0B0 ', fontWeight: 'bold', fontSize: 16}}>
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
          {recipe?.data[0]?.ingrediens}
        </Text>
      </View>
    </View>
  );
}

export default Detailinggrediens;
