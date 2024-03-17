import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import Toast from 'react-native-toast-message';

function Updaterecipe({route, navigation}) {
  const {recipeId} = route.params;
  // console.log('Recipe ID:', recipeId);
  const [recipe, setRecipe] = useState({
    name_food: '',
    ingrediens: '',
    picture: '',
    video: '',
    users_id: '',
  });

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (recipeId) {
      axios
        .get(`${process.env.API_URL}/recipe/${recipeId}`)
        .then(response => {
          console.log('Recipe Data:', response.data);
          setRecipe(response.data);
        })
        .catch(err => {
          console.log(err.message);
          setIsError(true);
          setErrorMessage('Failed to fetch recipe data');
        });
    }
  }, [recipeId]);

  const handleChange = (name, value) => {
    console.log('handleChange', name, value);
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleUpload = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel) {
        console.log(response.assets[0]);
        setRecipe({
          ...recipe,
          picture: response.assets[0].uri,
        });
      }
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name_food', recipe.name_food);
    formData.append('picture', {
      uri: recipe.picture,
      type: 'image/jpeg',
      name: 'recipe_image.jpg',
    });
    formData.append('ingrediens', recipe.ingrediens);
    formData.append('video', recipe.video);
    console.log(formData);
    try {
      await axios.put(
        `${process.env.API_URL}/updaterecipe/${recipeId}`,
        formData,
        {
          headers: {
            // Authorization: token,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Recipe has been uploaded successfully!',
      });
      navigation.navigate('Myrecipe');
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Failed to upload recipe!',
      });
    }
  };

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
      <View>
        <Text style={{color: '#EFC81A', fontSize: 24}}>Update Your Recipe</Text>
      </View>
      <ScrollView>
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
            <FontAwesome name="book-open" size={30} color="#999" />
          </View>
          <TextInput
            style={{
              color: '#999',
              flex: 1,
            }}
            placeholder="Title"
            placeholderTextColor={'#C4C4C4'}
            value={recipe.name_food}
            onChangeText={text => handleChange('name_food', text)}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            borderColor: '#999',
            borderWidth: 1,
            marginHorizontal: 20,
            height: 300,
            borderRadius: 15,
          }}>
          <TextInput
            style={{
              color: '#999',
              flex: 1,
              marginBottom: 250,
              marginLeft: 10,
            }}
            placeholder="Description"
            placeholderTextColor={'#C4C4C4'}
            value={recipe.ingrediens}
            onChangeText={text => handleChange('ingrediens', text)}
          />
        </View>

        <TouchableOpacity
          style={{
            height: 60,
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 10,
            paddingVertical: 20,
            paddingHorizontal: 40,
            margin: 12,
          }}
          onPress={handleUpload}>
          <Text style={{color: '#ababab'}}>Add Image</Text>
        </TouchableOpacity>
        {recipe.picture && (
          <View style={{marginTop: 10}}>
            <Image
              style={{width: 120, height: 120}}
              resizeMode="cover"
              source={{uri: recipe.picture}}
            />
          </View>
        )}

        <View
          style={{
            marginTop: 15,
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
            <FontAwesome name="video" size={30} color="#999" />
          </View>
          <TextInput
            style={{
              color: '#999',
              flex: 1,
            }}
            placeholder="Link Video YT"
            placeholderTextColor={'#C4C4C4'}
            value={recipe.video}
            onChangeText={text => handleChange('video', text)}
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
          onPress={handleSubmit}>
          <Text style={{textAlign: 'center'}}>POST</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Updaterecipe;
