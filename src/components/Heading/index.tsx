import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {removeData} from '../../helpers/index';
type Props = {
  title: string;
  style?: object;
  children?: React.ReactNode;
  user?: {
    name: string;
    photo: string;
  };
};

const Heading = ({title, style, children, user}: Props) => {
  const handleSignout = async () => {
    await GoogleSignin.signOut().then(() => {
      removeData('token');
      removeData('user');
    });
  };
  return (
    <View className="min-h-[50px] flex gap-2 flex-row items-center justify-between">
      <View className="flex flex-row items-center gap-2">
        <FontAwesomeIcon icon={faYoutube} color="red" size={36} />
        <Text
          className="text-2xl text-white font-bold
      ">
          {title}
        </Text>
      </View>
      {user && (
        <TouchableOpacity
          onPress={handleSignout}
          className="flex flex-row  gap-2 items-center">
          <Text className="text-white">{user.name}</Text>
          <Image src={user.photo} className="w-8 h-8 rounded-full" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Heading;
