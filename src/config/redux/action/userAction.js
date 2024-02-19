import api from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const login = data => async dispatch => {
//   try {
//     dispatch({type: 'LOGIN_REQUEST'});
//     const response = await api.post('/login', data);
//     const user = response.data;
//     await AsyncStorage.setItem('token', user.token);
//     dispatch({type: 'LOGIN_SUCCESS', payload: user});
//     return user;
//   } catch (error) {
//     dispatch({type: 'LOGIN_FAILURE', payload: error.response.data.message});
//     throw error.response;
//   }
// };

export const login = data => async dispatch => {
  try {
    dispatch({type: 'LOGIN_REQUEST'});
    const response = await api.post('/login', data);
    const user = response.data;

    await AsyncStorage.setItem('token', user.token);

    dispatch({type: 'LOGIN_SUCCESS', payload: user});
    return user;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : 'An error occurred';
    dispatch({type: 'LOGIN_FAILURE', payload: errorMessage});
    throw error;
  }
};

export const Regis = data => async dispatch => {
  try {
    dispatch({type: 'REGISTER_REQUEST'});
    const response = await api.post('/adduser', data);
    const user = response.data;
    dispatch({type: 'REGISTER_SUCCESS', payload: user});
    return user;
  } catch (error) {
    dispatch({
      type: 'REGISTER_FAILURE',
      payload: error.response.data.message,
    });
    throw error.response;
  }
};
