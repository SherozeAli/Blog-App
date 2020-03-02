import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React, { Component, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateBlogScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      titleText='Enter Title'
      contentText='What is on your mind !'
      buttonText='Add Blog'
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate('Index');
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default CreateBlogScreen;
