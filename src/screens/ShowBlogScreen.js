import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { Context } from '../context/BlogContext';

const ShowBlogScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);

  const showBlogPost = state.find(blogPost => blogPost.id === id);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{showBlogPost.title}</Text>
    </View>
  );
};

ShowBlogScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('EditBlog', { id: navigation.getParam('id') })
        }
      >
        <Icon
          style={styles.iconHeader}
          name='pencil'
          size={30}
          color='#ED5527'
        />
      </TouchableOpacity>
    )
  };
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    backgroundColor: 'yellow',
    borderWidth: 1
  },
  icon: {},
  title: {
    fontSize: verticalScale(18)
    // fontWeight: 'bold',
  },
  iconHeader: {
    marginRight: moderateScale(10)
  }
});
export default ShowBlogScreen;
