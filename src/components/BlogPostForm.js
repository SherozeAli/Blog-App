import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const BlogPostForm = ({
  initialValues,
  onSubmit,
  titleText,
  contentText,
  buttonText
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titleText} </Text>
      <TextInput
        style={styles.inputTitle}
        autoCapitalize='none'
        value={title}
        onChangeText={newTitle => setTitle(newTitle)}
        placeholder='Title here'
      />
      <Text style={styles.title}>{contentText}</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.inputContent}
        autoCapitalize='none'
        value={content}
        onChangeText={newContent => setContent(newContent)}
        placeholder='Content here ...'
      />
      <TouchableOpacity
        onPress={() => onSubmit(title, content)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

//koi component agr koi props agr nhi bhej lkn bqi bhej rhy rha to us k liay ye
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(10)
    //marginVertical: moderateScale(10)
  },
  icon: {},
  title: {
    fontSize: verticalScale(20),
    marginTop: moderateScale(20),
    color: '#ED5527'
  },
  inputTitle: {
    fontSize: verticalScale(18),
    borderWidth: 1,
    borderColor: 'black',
    marginTop: moderateScale(5)
  },
  inputContent: {
    fontSize: verticalScale(18),
    borderWidth: 1,
    borderColor: 'black',
    height: verticalScale(150),
    textAlignVertical: 'top',
    padding: moderateScale(5),
    marginTop: moderateScale(5)
  },
  button: {
    marginTop: moderateScale(5),
    padding: 10,
    backgroundColor: '#202646',
    borderRadius: 5
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: verticalScale(16)
  }
});
export default BlogPostForm;
