import React from 'react';
import { Button, SafeAreaView } from 'react-native';


import { constants } from '../../constants';
import { social, storage } from '../../utils';


const MainScreen = () => {

  const SignInBtn = () => {
    social.googleSignIn().then(res => {
      storage.storeDataObj(constants.keyAsyncStore.userInfo, {
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL
      })
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <SafeAreaView>
      <Button
        title={'Sign In with Google'}
        onPress={() => SignInBtn()}
      />
    </SafeAreaView>
  );
};



export default MainScreen;
