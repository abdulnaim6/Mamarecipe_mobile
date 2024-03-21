import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GetRecipe} from '../../config/redux/action/recipeAction';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {SvgXml} from 'react-native-svg';

const Icon43 = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
<rect width="64" height="64" rx="16" fill="#FDE901"/>
<path d="M32 52C43.0457 52 52 43.0457 52 32C52 20.9543 43.0457 12 32 12C20.9543 12 12 20.9543 12 32C12 43.0457 20.9543 52 32 52Z" fill="white"/>
<mask id="mask0_10_277" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="12" width="40" height="40">
<path d="M32 52C43.0457 52 52 43.0457 52 32C52 20.9543 43.0457 12 32 12C20.9543 12 12 20.9543 12 32C12 43.0457 20.9543 52 32 52Z" fill="#333333"/>
</mask>
<g mask="url(#mask0_10_277)">
<path d="M30.7336 20.8666C30.4002 20.8666 30.0669 21.1332 30.0669 21.5332V31.6666C30.0669 31.9999 29.8669 32.3332 29.5336 32.3999C29.1336 32.4666 28.7336 32.1332 28.7336 31.7332V21.5332C28.7336 21.1999 28.4669 20.8666 28.0669 20.8666H28.0002C27.6669 20.8666 27.3336 21.1332 27.3336 21.5332V31.6666C27.3336 31.9999 27.1336 32.3332 26.8002 32.3999C26.4002 32.4666 26.0002 32.1332 26.0002 31.7332V21.5332C26.0002 21.1999 25.7336 20.8666 25.3336 20.8666C25.0002 20.8666 24.6669 21.1332 24.6669 21.5332V31.7332C24.6669 32.0666 24.4669 32.3999 24.1336 32.4666C23.7336 32.5332 23.3336 32.1999 23.3336 31.7999V21.5332C23.3336 21.1999 23.0669 20.8666 22.6669 20.8666C22.3336 20.8666 22.0002 21.1332 22.0002 21.4666C21.9336 24.2666 21.6002 35.4666 22.0669 36.2666C22.9336 37.7999 24.0669 37.8666 24.8669 39.5332C25.6669 41.1999 25.8669 44.3999 25.6002 47.9999C25.1336 54.9332 23.2669 62.9332 23.9336 64.4666C24.8002 66.3999 26.2002 66.4666 26.6002 66.4666C27.0002 66.4666 28.4002 66.3332 29.2669 64.4666C30.0002 62.9332 28.1336 54.9332 27.6002 47.9999C27.3336 44.3999 27.5336 41.1332 28.3336 39.5332C29.1336 37.8666 30.3336 37.7999 31.1336 36.2666C31.5336 35.4666 31.2669 24.2666 31.2002 21.4666C31.3336 21.1332 31.0669 20.8666 30.7336 20.8666Z" fill="#211F21"/>
<path d="M41.3335 20.0666C41.3335 19.3999 40.5335 19.1333 40.1335 19.5333C39.1335 20.5999 37.7335 22.4666 36.7335 25.5333C35.5335 29.3333 35.2001 40.1999 36.0001 42.1999C36.7335 43.9999 37.3335 43.3333 37.8668 44.1333C38.6668 45.4666 38.4001 46.9999 38.1335 50.5999C37.6668 57.5333 35.8668 62.9999 36.5335 64.5333C37.4001 66.4666 38.8001 66.5333 39.2001 66.5333C39.6001 66.5333 41.0001 66.3999 41.8668 64.5333C42.6001 62.9999 40.5335 46.3333 40.8001 42.3333C41.0668 40.5999 41.4668 24.8666 41.3335 20.0666Z" fill="#211F21"/>
</g>
</svg>`;
const Icon44 = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
<rect width="64" height="64" rx="16" fill="#57CE96"/>
<path d="M51.1837 34.8716L46.1897 36.1681C46.1417 34.5835 46.1417 33.431 46.1417 33.431H32.3121H32.2641H31.7839H31.7359H17.9064C17.9064 33.431 17.8583 34.5835 17.8583 36.2161L12.8163 34.8716C12.2401 34.7275 11.6639 36.8404 12.2881 36.9845L17.8583 38.425C17.8583 40.4899 17.8583 42.7468 18.0024 44.0913C18.2905 47.2125 19.0588 49.0373 23.3325 49.7095C27.03 50.2858 30.9676 50.2377 32.024 50.2377C33.0804 50.2858 37.018 50.2858 40.7155 49.7095C45.0372 49.0373 45.7575 47.1645 46.0456 44.0913C46.1897 42.6987 46.1897 40.4899 46.1897 38.377L51.7119 36.9364C52.3361 36.8404 51.7599 34.7275 51.1837 34.8716Z" fill="#01246B"/>
<path d="M18.6267 31.6063C19.9712 29.6855 19.539 27.5247 17.3302 26.1321C15.1213 24.7396 14.9292 22.1465 16.946 19.3134C18.2905 17.3446 17.7623 15.1357 15.5534 13.7432" stroke="white" stroke-opacity="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M20.7395 23.443C19.2989 22.1465 19.443 20.3218 21.3157 18.449C22.6602 17.1045 22.4682 15.5679 21.0276 14.2714" stroke="white" stroke-opacity="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M35.0012 27.1885L35.3854 26.3242C34.521 26.0361 33.9928 25.5559 34.0408 25.0757C34.1369 24.4995 35.2413 24.1633 36.5378 24.3554C37.8343 24.5475 38.7467 25.2198 38.6507 25.796C38.5546 26.2762 37.8824 26.5643 36.97 26.5643L37.066 27.4767C44.2689 28.7732 49.7911 30.9821 49.503 32.5667L21.5078 27.9568C21.7959 26.4683 27.7503 26.1321 35.0012 27.1885Z" fill="#01246B"/>
<path d="M27.03 28.1969L23.5246 27.6207C24.2449 26.9484 27.1741 26.8044 30.9196 27.1885C27.03 27.1405 26.934 27.9088 27.03 28.1969Z" fill="white"/>
<path d="M34.8091 25.7479C34.665 25.6039 34.665 25.4598 34.7131 25.2678C34.8091 24.7876 35.6734 24.4995 36.6819 24.5955C36.6338 24.5955 36.5858 24.5475 36.5378 24.5475C35.4334 24.3554 34.521 24.6435 34.4249 25.1237C34.3769 25.3638 34.569 25.5559 34.8091 25.7479Z" fill="white"/>
<path d="M28.2785 48.8452C24.2449 48.2209 23.5726 46.5403 23.2845 43.7071C23.0444 41.2581 23.1885 35.832 23.2365 34.3434H18.9628C18.9147 35.784 18.8187 41.3062 19.0108 43.7551C19.2989 46.5883 19.9712 48.2689 24.0048 48.8932C27.4622 49.4214 31.1116 49.3734 32.12 49.3734C32.5522 49.3734 30.7275 49.2293 28.2785 48.8452Z" fill="white"/>
</svg>`;
const Icon45 = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
<rect width="64" height="64" rx="16" fill="#000001"/>
<path d="M37.0938 40.6141C33.469 39.676 29.4179 40.4862 26.3902 43.1728C25.9211 43.5992 25.4946 44.0256 25.1108 44.4947C27.9253 42.7037 31.2516 42.2346 34.3219 43.0448C34.7057 46.2005 33.8102 49.4414 31.678 52.0001C32.1897 51.6589 32.6588 51.3178 33.1279 50.8913C36.1556 48.2048 37.5202 44.3242 37.0938 40.6141Z" fill="white"/>
<path d="M32.0191 28.0768C32.872 28.3326 33.7249 28.5458 34.6204 28.6738C33.7675 28.8017 32.9146 28.887 32.0618 28.887H32.0191C31.8912 28.887 31.7632 28.887 31.6353 28.887C24.9402 28.887 19.098 25.5181 15.6012 20.4435C19.098 15.3689 24.9402 12 31.5927 12C31.7206 12 31.8485 12 31.9765 12H32.0191C32.872 12 33.7675 12.0853 34.5777 12.2132C33.6822 12.3412 32.8293 12.5544 31.9765 12.8102C27.7121 14.0896 24.0447 16.8188 21.5713 20.4435C24.0873 24.0256 27.7121 26.7548 32.0191 28.0768Z" fill="white"/>
<path d="M37.7334 12.7676C37.7334 12.7676 48.1385 15.4541 48.3944 24.9637C48.6502 34.4733 37.7334 39.2921 37.7334 39.2921C37.7334 39.2921 42.5522 32.1279 37.7334 29.4414C37.7334 29.4414 41.7846 29.1855 42.8933 31.1471C42.8933 31.1471 50.953 21.3816 37.7334 12.7676Z" fill="white"/>
<path d="M30.7824 22.6184C30.7824 23.4286 30.1001 24.1109 29.2899 24.1109C28.4797 24.1109 27.7974 23.4286 27.7974 22.6184C27.7974 21.8082 28.4797 21.1259 29.2899 21.1259C30.1001 21.1685 30.7824 21.8082 30.7824 22.6184Z" fill="white"/>
</svg>`;
const star = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M10.9735 4.58951C10.9421 4.49694 10.8842 4.4156 10.8071 4.35554C10.73 4.29547 10.637 4.25931 10.5395 4.25151L7.68901 4.02501L6.45551 1.29451C6.41623 1.20656 6.35233 1.13187 6.27154 1.07944C6.19074 1.027 6.09649 0.999076 6.00018 0.999024C5.90386 0.998971 5.80958 1.02679 5.72873 1.07914C5.64787 1.13148 5.58389 1.20611 5.54451 1.29401L4.31101 4.02501L1.46051 4.25151C1.36474 4.25909 1.27318 4.29411 1.19679 4.35237C1.1204 4.41063 1.06241 4.48967 1.02976 4.58002C0.99711 4.67038 0.991182 4.76822 1.01269 4.86186C1.03419 4.95549 1.08221 5.04095 1.15101 5.10801L3.25751 7.16151L2.51251 10.3875C2.48989 10.4852 2.49714 10.5874 2.53332 10.6808C2.5695 10.7743 2.63295 10.8548 2.71541 10.9117C2.79788 10.9687 2.89557 10.9996 2.99581 11.0003C3.09604 11.0011 3.19419 10.9717 3.27751 10.916L6.00001 9.10101L8.72251 10.916C8.80768 10.9726 8.90812 11.0017 9.01033 10.9994C9.11254 10.9972 9.2116 10.9637 9.29421 10.9035C9.37682 10.8432 9.439 10.7592 9.4724 10.6625C9.50579 10.5659 9.5088 10.4614 9.48101 10.363L8.56651 7.16301L10.8345 5.12201C10.983 4.98801 11.0375 4.77901 10.9735 4.58951Z" fill="#FFB200"/>
</svg>`;

function HomeScreen({route}) {
  const {loading, recipe} = useSelector(state => state.recipe);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState('ASC');
  const navigation = useNavigation();

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
        <FontAwesome
          name="sort"
          size={30}
          color="#EEC302"
          onPress={handleSort}
          style={{marginRight: 10}}
        />
      </View>
      <Text
        style={{color: '#3F3A3A', fontSize: 20, marginTop: 20, marginLeft: 20}}>
        New Recipes
      </Text>
      <ScrollView horizontal={true} scrollEventThrottle={400}>
        {recipe?.rows?.map(recipeItem => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detailinggrediens', {
                recipeId: recipeItem.recipe_id,
              })
            }
            key={recipeItem.recipe_id}>
            <View>
              <Image
                source={{uri: recipeItem.picture}}
                style={{
                  width: 130,
                  height: 160,
                  borderRadius: 15,
                  marginLeft: 20,
                  marginTop: 10,
                }}
              />
              <Text
                style={{
                  position: 'absolute',
                  top: 120,
                  left: 30,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                {recipeItem.name_food}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text
        style={{color: '#18172B', marginLeft: 20, marginTop: 20, fontSize: 20}}>
        Popular Recepies
      </Text>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <SvgXml
            xml={Icon43}
            width={50}
            height={50}
            marginLeft={20}
            marginTop={10}
          />
          <View style={{marginLeft: 30}}>
            <Text style={{color: '#18172B', fontSize: 16, fontWeight: 500}}>
              Orange La Pasta
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SvgXml xml={star} width={20} height={20} />
              <Text style={{color: '#18172B'}}>
                <Text style={{marginRight: 20}}>
                  4.6<Text style={{color: '#6E80B0'}}>Pasta</Text>
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <SvgXml
            xml={Icon44}
            width={50}
            height={50}
            marginLeft={20}
            marginTop={10}
          />
          <View style={{marginLeft: 30}}>
            <Text style={{color: '#18172B', fontSize: 16, fontWeight: 500}}>
              Spicy Ramenyu
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SvgXml xml={star} width={20} height={20} />
              <Text style={{color: '#18172B'}}>
                <Text style={{marginRight: 20}}>
                  4.3
                  <Text style={{color: '#6E80B0', marginRight: 10}}>
                    Korean
                  </Text>
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <SvgXml
            xml={Icon45}
            width={50}
            height={50}
            marginLeft={20}
            marginTop={10}
          />
          <View style={{marginLeft: 30}}>
            <Text style={{color: '#18172B', fontSize: 16, fontWeight: 500}}>
              Lobster Toast
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SvgXml xml={star} width={20} height={20} />
              <Text style={{color: '#18172B'}}>
                <Text style={{marginRight: 20}}>
                  4.0<Text style={{color: '#6E80B0'}}>Seafood</Text>
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
