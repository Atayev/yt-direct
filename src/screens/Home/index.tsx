import Heading from '@components/Heading';
import Signin from '@components/Login';
import {ScreenLayout} from '@components/index';
import {getData} from '../../helpers/index';
import React, {useEffect, useState} from 'react';
import {
  Button,
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Home(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({} as any);
  const getUserInfo = async () => {
    const tkn = await getData('token');
    const usr = await getData('user');
    usr && setUser(JSON.parse(usr));
    tkn && setToken(tkn);
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <ScreenLayout>
      <Heading title="Youtube direct" user={user && user} />
      {!token && (
        <View className="h-full flex justify-center">
          <Signin />
        </View>
      )}
    </ScreenLayout>
  );
}

export default Home;
