import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import tw from '../lib/tailwind';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 3000);
  }, [])
  return (
    <View style={tw`flex-1 justify-center items-center bg-redprimary`}>
      <Animatable.Text 
        style={tw`text-4xl text-white font-bold`}
        animation="fadeInDownBig"
        duration={2000}
      >
          Country Live
      </Animatable.Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})