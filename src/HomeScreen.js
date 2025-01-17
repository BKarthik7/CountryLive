import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind';
import Header from './components/Header';

const HomeScreen = () => {
  return (
    <View style={tw`flex-1`}>
      <Header />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})