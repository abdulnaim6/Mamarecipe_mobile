// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   ScrollView,
//   ActivityIndicator,
// } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome5';
// import axios from 'axios';

// function Chat({navigation}) {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [limit] = useState(6);
//   const [loadingMore, setLoadingMore] = useState(false);

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   const fetchRecipes = async () => {
//     try {
//       const response = await axios.get(
//         `https://be-recipe-two.vercel.app/paginate?page=${page}&limit=${limit}`,
//       );
//       if (
//         response.data &&
//         response.data.result &&
//         response.data.result.result &&
//         Array.isArray(response.data.result.result.rows)
//       ) {
//         if (page === 1) {
//           setRecipes(response.data.result.result.rows);
//         } else {
//           setRecipes(prevRecipes => [
//             ...prevRecipes,
//             ...response.data.result.result.rows,
//           ]);
//         }
//       } else {
//         console.error('Invalid response format: Data is not an array');
//       }
//     } catch (error) {
//       console.error('Error fetching recipes:', error.message);
//     } finally {
//       setLoading(false);
//       setLoadingMore(false);
//     }
//   };

//   const handleScroll = event => {
//     const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
//     const isCloseToBottom =
//       layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
//     if (isCloseToBottom && !loadingMore) {
//       setLoadingMore(true);
//       setPage(prevPage => prevPage + 1);
//     }
//   };

//   return (
//     <View style={{flex: 1}}>
//       <View
//         style={{
//           marginTop: 20,
//           flexDirection: 'row',
//           borderColor: '#999',
//           borderWidth: 1,
//           marginHorizontal: 20,
//           borderRadius: 15,
//           alignItems: 'center',
//         }}>
//         <FontAwesome
//           name="search"
//           size={30}
//           color="#999"
//           style={{marginLeft: 10}}
//         />
//         <TextInput
//           style={{
//             color: '#EFC81A',
//             flex: 1,
//             marginLeft: 10,
//           }}
//           placeholder="Search Pasta, Bread, etc"
//           placeholderTextColor={'#999'}
//           // Add search function
//         />
//         <FontAwesome
//           name="sort"
//           size={30}
//           color="#EEC302"
//           // Add sort function
//           style={{marginRight: 10}}
//         />
//       </View>
//       <ScrollView
//         style={{flex: 1}}
//         contentContainerStyle={{paddingVertical: 20}}
//         onScroll={handleScroll}
//         scrollEventThrottle={16} // Adjust scroll event frequency
//       >
//         {loading ? (
//           <ActivityIndicator
//             size="large"
//             style={{marginTop: 20}}
//             color="#EEC302"
//           />
//         ) : (
//           recipes.map((recipeItem, index) => (
//             <View
//               style={{
//                 flexDirection: 'row',
//                 marginHorizontal: 20,
//                 marginVertical: 10,
//                 alignItems: 'center',
//               }}
//               key={index}>
//               <Image
//                 source={{uri: recipeItem.picture}}
//                 style={{width: 80, height: 80, borderRadius: 10}}
//               />
//               <View style={{marginLeft: 20, flex: 1}}>
//                 <Text
//                   style={{color: '#18172B', fontSize: 18}}
//                   onPress={() => navigation.navigate('Detailinggrediens')}>
//                   {recipeItem.name_food}
//                 </Text>
//                 <Text style={{color: '#6E80B0', marginVertical: 5}}>Food</Text>
//               </View>
//               <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <FontAwesome name="bookmark" size={30} color="#EEC302" />
//                 <FontAwesome
//                   name="thumbs-up"
//                   size={30}
//                   color="#EEC302"
//                   style={{marginLeft: 20}}
//                 />
//               </View>
//             </View>
//           ))
//         )}
//         {loadingMore && <ActivityIndicator size="small" color="#EEC302" />}
//       </ScrollView>
//     </View>
//   );
// }

// export default Chat;

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

function Chat({navigation}) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    fetchRecipes();
  }, [page]); // Update effect when page changes

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://be-recipe-two.vercel.app/paginate?page=${page}&limit=${limit}`,
      );
      if (
        response.data &&
        response.data.result &&
        response.data.result.result &&
        Array.isArray(response.data.result.result.rows)
      ) {
        if (page === 1) {
          setRecipes(response.data.result.result.rows);
        } else {
          setRecipes(prevRecipes => [
            ...prevRecipes,
            ...response.data.result.result.rows,
          ]);
        }
      } else {
        console.error('Invalid response format: Data is not an array');
      }
    } catch (error) {
      console.error('Error fetching recipes:', error.message);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleScroll = event => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    if (isCloseToBottom && !loadingMore) {
      setLoadingMore(true);
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          borderColor: '#999',
          borderWidth: 1,
          marginHorizontal: 20,
          borderRadius: 15,
          alignItems: 'center',
        }}>
        <FontAwesome
          name="search"
          size={30}
          color="#999"
          style={{marginLeft: 10}}
        />
        <TextInput
          style={{
            color: '#EFC81A',
            flex: 1,
            marginLeft: 10,
          }}
          placeholder="Search Pasta, Bread, etc"
          placeholderTextColor={'#999'}
          // Add search function
        />
        <FontAwesome
          name="sort"
          size={30}
          color="#EEC302"
          // Add sort function
          style={{marginRight: 10}}
        />
      </View>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingVertical: 20}}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Adjust scroll event frequency
      >
        {loading ? (
          <ActivityIndicator
            size="large"
            style={{marginTop: 20}}
            color="#EEC302"
          />
        ) : (
          recipes.map((recipeItem, index) => (
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                marginVertical: 10,
                alignItems: 'center',
              }}
              key={index}>
              <Image
                source={{uri: recipeItem.picture}}
                style={{width: 80, height: 80, borderRadius: 10}}
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
                  name="thumbs-up"
                  size={30}
                  color="#EEC302"
                  style={{marginLeft: 20}}
                />
              </View>
            </View>
          ))
        )}
        {loadingMore && <ActivityIndicator size="small" color="#EEC302" />}
      </ScrollView>
    </View>
  );
}

export default Chat;
