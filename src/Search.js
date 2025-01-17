import { StyleSheet, View, TextInput, FlatList, TouchableOpacity} from 'react-native'
import React, {useState} from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import Card from './components/Card';
import tw from '../lib/tailwind';

const Search = ({navigation}) => {
  const [SearchText, setSearchText] = useState('');
  const [Data, setData] = useState([]);
  const searchNews = async text => {
    setSearchText(text);
    if (text.length > 2) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=668f84ca250b40da8a68ad5ba00e3a9b&q=${text}`,
      );

      const data = await response.json();
      setData(data.articles);
    }
  };
  return (
    <View style={tw`flex-1`}>
      <View style={tw`bg-redprimary flex-row items-center px-4`}>
        <TouchableOpacity style={tw`mr-2`} onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color={'white'} size={18} />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter your query.."
          value={SearchText}
          placeholderTextColor={'white'}
          onChangeText={text => {
            searchNews(text);
          }}
          style={tw`text-sm text-white mr-2 w-full`}
        />
      </View>

      <View style={tw`mb-16`}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={({item, index}) => {
            return <Card item={item} navigation={navigation} index={index} />;
          }}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});