import AsyncStorage from '@react-native-async-storage/async-storage';

const storeDataObj = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@' + key, jsonValue)
  } catch (e) {
    console.log(e);
  }
}


const getDataObj = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem('@' + key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
}


export default {
  storeDataObj,
  getDataObj
}