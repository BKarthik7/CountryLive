import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind';

const Card = ({item}) => {
  const publishedDate = item.publishedAt ? new Date(item.publishedAt).toLocaleString('en-GB', { timeZone: 'UTC' }) : '';
  return (
    <View style={tw`px-4 py-4 my-4`}>
      <Image 
        source={{uri: item.urlToImage || "https://imgs.search.brave.com/2YVY-2tHcQDlTOL6w5jw7GAyCjlip3Hu4hzpXutwfhM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzU0LzA0LzM3/LzM2MF9GXzI1NDA0/MzczNl9uQ0FNTFNY/Y3Iya2VYc2JiclQ2/NHoxVndlcUV2YWZC/RC5qcGc"}} 
        style={tw`h-52 w-full rounded-md`} 
        resizeMethod='resize'
      />
      <View style={tw`px-2 my-2`}>
        <Text style={tw`text-sm text-gray-700`}>{item.title}</Text>
        <Text style={tw`text-xs my-2`}>{item.description}</Text>
        <Text style={tw`text-xs my-1`}>{item.author}</Text>
        <Text style={tw`text-xs`}>{publishedDate}</Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})