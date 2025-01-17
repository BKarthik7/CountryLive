import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind';
import { ArrowRightIcon } from 'react-native-heroicons/solid';

const Card = ({item, navigation}) => {
  const publishedDate = item.publishedAt ? new Date(item.publishedAt).toLocaleString('en-GB', { timeZone: 'UTC' }) : '';
  return (
    <View style={tw`px-4 py-4 mb-4`}>
      <Image 
        source={{uri: item.urlToImage || "https://imgs.search.brave.com/2YVY-2tHcQDlTOL6w5jw7GAyCjlip3Hu4hzpXutwfhM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzU0LzA0LzM3/LzM2MF9GXzI1NDA0/MzczNl9uQ0FNTFNY/Y3Iya2VYc2JiclQ2/NHoxVndlcUV2YWZC/RC5qcGc"}} 
        style={tw`h-52 w-full rounded-md`} 
        resizeMethod='resize'
      />
      <View style={tw`px-2 my-2`}>
        <Text style={tw`text-sm text-gray-700 font-semibold`}>{item.title}</Text>
        <Text style={tw`text-xs my-2`}>{item.description}</Text>
        <View style={tw`flex-row justify-between items-center my-2`}>
          <Text style={tw`text-xs text-gray-700`}>{item.author}</Text>
          <Text style={tw`text-xs text-gray-700`}>{publishedDate}</Text>
        </View>
        <TouchableOpacity 
          style={tw`bg-redprimary px-4 py-1.5 mt-2 w-32 justify-around items-center rounded-md flex-row`}
          onPress={() => navigation.navigate('NewsViewer', {url: item.url})}
        >
          <Text style={tw`mr-1 text-white text-xs font-Medium`}>Read More...</Text>
          <ArrowRightIcon style={tw`mr-1`} color="#fff" size={18} />
        </TouchableOpacity>
      </View>
      <View style={tw`absolute top-4 right-4 bg-redprimary px-4 rounded-md`}>
        <Text style={tw`text-xs text-white py-1`}>{item.source.name}</Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})