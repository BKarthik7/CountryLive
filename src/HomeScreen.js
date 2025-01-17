import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from '../lib/tailwind';
import Header from './components/Header';
import Card from './components/Card';

const HomeScreen = ({navigation}) => {
  const [Data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=668f84ca250b40da8a68ad5ba00e3a9b`);
    const data = await response.json();
    setData(data.articles)
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={tw`flex-1`}>
      <Header navigation={navigation}/>

      <View >
        <FlatList data={Data} renderItem={({item, index}) => {
          return (
            <Card item={item}/>
          )
        }}/>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})