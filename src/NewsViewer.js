import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { BackHandler } from 'react-native';

const NewsViewer = ({ navigation, route }) => {
  const { url } = route.params;

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Home');
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [navigation]);

  return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
};

export default NewsViewer;
