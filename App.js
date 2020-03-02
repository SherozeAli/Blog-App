import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import IndexScreen from './src/screens/indexScreen';
import ShowBlogScreen from './src/screens/ShowBlogScreen';
import CreateBlogScreen from './src/screens/CreateBlogScreen';
import EditBlogScreen from './src/screens/EditBlogScreen';

import { createAppContainer, createStackNavigator } from 'react-navigation';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    ShowBlog: ShowBlogScreen,
    CreateBlog: CreateBlogScreen,
    EditBlog: EditBlogScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      headerTitle: 'Blogs',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1
      }
    }
  }
);
const styles = StyleSheet.create({});

const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
