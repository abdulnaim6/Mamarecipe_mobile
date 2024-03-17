/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Editprofile({navigation}) {
  const [user, setUser] = useState({name: ''});
  const [saveImage, setSaveImage] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        const response = await axios.get(
          `https://be-recipe-two.vercel.app/redis/${userId}`,
        );
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    fetchUser();
  }, []);

  const handleChangeName = text => {
    setUser({...user, name: text});
  };

  const handleUpload = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel) {
        setSaveImage(response.uri);
      }
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', user.name);
    if (saveImage) {
      const uriParts = saveImage.split('.');
      const fileType = uriParts[uriParts.length - 1];
      formData.append('picture', {
        uri: saveImage,
        name: `user_image.${fileType}`,
        type: `image/${fileType}`,
      });
    }

    try {
      const userId = await AsyncStorage.getItem('userId');
      await axios.put(
        `https://be-recipe-two.vercel.app/updateuser/${userId}`,
        formData,
      );
      navigation.goBack();
    } catch (error) {
      console.error('Failed to update user:', error);
      Alert.alert('Error', 'Failed to update user. Please try again later.');
    }
  };

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
      <View>
        <Text style={{color: '#EFC81A', fontSize: 24}}>Edit Profile</Text>
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
            placeholder="Edit Name"
            placeholderTextColor={'#C4C4C4'}
            value={user.name}
            onChangeText={handleChangeName}
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

export default Editprofile;
