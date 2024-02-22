/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import {InputRecipe} from '../../config/redux/action/recipeAction';
import {useDispatch} from 'react-redux';
import axios from 'axios';

function Uploadrecipe({navigation}) {
  const [data, setData] = useState({
    name_food: '',
    picture: '',
    ingredients: '',
    video: '',
  });

  const handleChange = (value, field) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  const handleUpload = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel) {
        setData({
          ...data,
          picture: response.uri,
        });
      }
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name_food', data.name_food);
    formData.append('picture', {
      uri: data.picture,
      type: 'image/jpeg',
      name: 'recipe_image.jpg',
    });
    formData.append('ingredients', data.ingredients);
    formData.append('video', data.video);

    try {
      await axios.post(`${process.env.API_URL}/addrecipe`, formData);
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Recipe has been uploaded successfully!',
      });
      navigation.navigate('Homepage');
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Failed to update recipe!',
      });
    }
  };

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
      <View>
        <Text style={{color: '#EFC81A', fontSize: 24}}>Add Your Recipe</Text>
      </View>
      <ScrollView vertical={true}>
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
            onChangeText={value => handleChange(value, 'name_food')}
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
            onChangeText={value => handleChange(value, 'ingredients')}
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
        {/* <View style={{marginTop: 10}}>
          <Image
            style={{width: 120, height: 120}}
            resizeMode="cover"
            source={{uri: response.uri}}
          />
        </View> */}

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
            placeholder="Video"
            placeholderTextColor={'#C4C4C4'}
            onChangeText={value => handleChange(value, 'video')}
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
            marginBottom: 30,
          }}
          onPress={handleSubmit}>
          <Text style={{textAlign: 'center'}}>POST</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Uploadrecipe;
