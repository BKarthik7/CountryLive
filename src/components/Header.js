import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';

const Header = ({navigation}) => {
  return (
    <View style={tw`flex-row px-4 py-2 justify-between items-center bg-white shadow-lg`}>
      <Text style={tw`text-base font-semibold text-redprimary`}>Country Live</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <MagnifyingGlassIcon color="#000" size={20} />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})