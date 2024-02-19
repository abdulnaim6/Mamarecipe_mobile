/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
  Modal,
  RefreshControl,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Editprofile = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Open Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            style={styles.back}
          />
        </TouchableOpacity>
        <Text style={styles.editProfile}>Edit Profile</Text>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionName}>Change Profile Picture</Text>
        </TouchableOpacity>
        <>
          <Image style={{width: 100, height: 100}} />
          <TouchableOpacity>
            <Text style={styles.optionName}>Apply Profile Picture</Text>
          </TouchableOpacity>
        </>
        <View style={styles.optionItem}>
          <Text style={styles.optionName}>Change Password</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingLeft: 24,
  },
  editProfile: {
    marginLeft: 88,
    color: '#EEC302',
    fontSize: 20,
    fontWeight: 'bold',
  },
  back: {
    backgroundColor: 'lightgrey',
    borderRadius: 16,
  },
  option: {
    padding: 28,
    gap: 22,
  },
  optionItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#E7E7E7',
  },
  optionName: {
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    padding: 35,
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 40,
    marginTop: 10,
  },
  buttonCancel: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 40,
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Editprofile;
