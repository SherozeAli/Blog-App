import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React, { Component, useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateBlogScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      titleText='New Title'
      contentText='Edit your content'
      buttonText='Save Changes'
      onSubmit={(title, content) => {
        console.log(id, title, content);
        editBlogPost(id, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default CreateBlogScreen;
