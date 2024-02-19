/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {GetRecipe, DeleteRecipe} from '../../config/redux/action/recipeAction';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';
import axios from 'axios';

function Myrecipe({navigation}) {
  const {loading, recipe} = useSelector(state => state.recipe);
  const dispatch = useDispatch();
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState('ASC');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = () => {
    dispatch(GetRecipe({sort, keyword: searchQuery}));
  };

  const handleSort = () => {
    setSort(prevSort => (prevSort === 'ASC' ? 'DESC' : 'ASC'));
  };

  useEffect(() => {
    dispatch(GetRecipe({sort, keyword: searchQuery}));
  }, [dispatch, sort, searchQuery]);

  const handleDelete = async recipeId => {
    try {
      await axios.delete(`${process.env.API_URL}/deleterecipe/${recipeId}`);
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Recipe has been deleted successfully!',
      });

      setRecipes(prevRecipes =>
        prevRecipes.filter(recipe => recipe.recipe_id !== recipeId),
      );
      dispatch(GetRecipe({sort, keyword: searchQuery}));
    } catch (error) {
      console.log(error);

      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Failed to delete recipe!',
      });
    }
  };

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
          onPress={() => navigation.navigate('Profile')}
        />
        <Text style={{color: '#EEC302', fontSize: 30, marginLeft: 60}}>
          My Recipe
        </Text>
      </View>
      <ScrollView vertical={true}>
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
              <FontAwesome
                name="edit"
                size={30}
                color="#EEC302"
                onPress={() =>
                  navigation.navigate('Updaterecipe', {
                    recipeId: recipeItem.recipe_id,
                  })
                }
              />
              <MaterialIcons
                style={{marginLeft: 20}}
                name="delete"
                size={30}
                color="#EEC302"
                onPress={() => handleDelete(recipeItem.recipe_id)}
              />
            </View>
          </View>
        ))}
      </ScrollView>
      {/* Toast container */}
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
}

export default Myrecipe;
