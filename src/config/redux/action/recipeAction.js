import api from '../../api';

export const InputRecipe = data => async dispatch => {
  try {
    dispatch({type: 'CREATE_RECIPE_REQUEST'});
    const response = await api.post('/addrecipe', data);
    const recipe = response.data;
    dispatch({type: 'CREATE_RECIPE_SUCCESS', payload: recipe});
    return recipe;
  } catch (error) {
    dispatch({
      type: 'CREATE_RECIPE_FAILURE',
      payload: error.response.data.message,
    });
    throw error.response;
  }
};

export const GetRecipe =
  ({sort, keyword}) =>
  async dispatch => {
    try {
      dispatch({type: 'GET_RECIPE_REQUEST'});
      const response = await api.get(`/search?sort=${sort}&keyword=${keyword}`);
      const recipe = response.data;
      dispatch({type: 'GET_RECIPE_SUCCESS', payload: recipe});
      return recipe;
    } catch (error) {
      dispatch({
        type: 'GET_RECIPE_FAILURE',
        payload: error.response.data.message,
      });
      throw error.response;
    }
  };

export const GetRecipeByID =
  ({recipe_id}) =>
  async dispatch => {
    try {
      dispatch({type: 'GET_RECIPE_REQUEST'});
      const response = await api.get(`/recipe/${recipe_id}`);
      const recipe = response.data;
      dispatch({type: 'GET_RECIPE_SUCCESS', payload: recipe});
      return recipe;
    } catch (error) {
      dispatch({
        type: 'GET_RECIPE_FAILURE',
        payload: error.response.data.message,
      });
      throw error.response;
    }
  };

export const Update = recipe_id => async dispatch => {
  try {
    dispatch({type: 'UPDATE_RECIPE_REQUEST'});
    const response = await api.put(`/updaterecipe/${recipe_id}`);
    const recipe = response.data;
    dispatch({type: 'UPDATE_RECIPE_SUCCESS', payload: recipe});
    return recipe;
  } catch (error) {
    dispatch({
      type: 'UPDATE_RECIPE_FAILURE',
      payload: error.response.data.message,
    });
    throw error.response;
  }
};

export const Delete =
  ({recipe_id}) =>
  async dispatch => {
    try {
      dispatch({type: 'DELETE_RECIPE_REQUEST'});
      const response = await api.delete(`/deleterecipe/${recipe_id}`);
      const recipe = response.data;
      dispatch({type: 'DELETE_RECIPE_SUCCESS', payload: recipe});
      return recipe;
    } catch (error) {
      dispatch({
        type: 'DELETE_RECIPE_FAILURE',
        payload: error.response.data.message,
      });
      throw error.response;
    }
  };
