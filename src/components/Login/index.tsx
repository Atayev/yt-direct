import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {storeData} from '../../helpers';
type Props = {};

GoogleSignin.configure({
  webClientId:
    '699051939051-pm40qedsgdt0omeiijpvs1c6m18ullch.apps.googleusercontent.com',
});

const Signin = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async (e: GestureResponderEvent) => {
    setLoading(true);
    try {
      GoogleSignin.signIn().then(res => {
        if (res) {
          storeData('token', JSON.stringify(res.idToken));
          storeData('user', JSON.stringify(res.user));
        }
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <TouchableOpacity
      onPress={(event: GestureResponderEvent) => handleClick(event)}
      className="rounded-xl p-4 border-2 border-white justify-center items-center flex-row gap-2 ">
      {loading ? (
        <Text> loading ... </Text>
      ) : (
        <Text className="text-white text-xl">Login with google</Text>
      )}
    </TouchableOpacity>
  );
};

export default Signin;
