import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { constants } from '../constants'

GoogleSignin.configure({
  webClientId: constants.firebaseWebID,
});

async function googleSignIn() {
  const { idToken } = await GoogleSignin.signIn();

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
}

export default {
  googleSignIn
}