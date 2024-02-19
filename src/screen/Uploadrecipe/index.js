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

function Uploadrecipe({navigation}) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name_food: '',
    picture: '',
    ingrediens: '',
    video: '',
  });
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleUpload = e => {
    const uploader = e.target.files[0];
    setData({
      ...data,
      picture: uploader,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const productData = new FormData();
    productData.append('name_food', data.name_food);
    productData.append('picture', data.picture);
    productData.append('ingrediens', data.ingrediens);
    productData.append('video', data.video);

    try {
      await dispatch(InputRecipe(productData));
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Recipe has been upload successfully!',
      });
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage('Data Error');
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
          }}>
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
          }}>
          <Text style={{textAlign: 'center'}}>POST</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Uploadrecipe;
