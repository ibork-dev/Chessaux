import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { Link, router } from "expo-router";
import Spacer from '../components/Spacer';
import Button from '../components/Button';

const HomeScreen = () => {
  return (
    <ImageBackground
    source={require('../assets//backgrounds/background01.png')} // Path to your background image
    style={{ flex: 1, justifyContent: 'center' }}
    imageStyle={{ resizeMode: 'cover' }} // Use imageStyle for resizeMode
  >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Image
          source={require('../assets/logos/Chessaux02.png')}
          style={{ width: 200, height: 200 }}
        />

        <Spacer height={80} />

        <Button
          title="Vs. Human Player"
          onPress={() => router.push("/gamescreen")}
          width="200"
        />

        <Spacer height={20} />

        <Button
          title="Vs. AI"
          onPress={() => router.push("/gamescreen")}
        />

      </View>
      </ImageBackground>
  );
}

export default HomeScreen;