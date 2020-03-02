import React, {Component, useContext, version, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const IndexScreen = ({navigation}) => {
  const {state, deleteBlogPost, getBlogPost} = useContext(Context);
  useEffect(() => {
    getBlogPost();

    //jb screen dubara reload ho ye hook run krna ho again
    const listener = navigation.addListener('didFocus', () => {
      getBlogPost();
    });

    //memory leak k liay ye lgaya qk pchy index chl ri hti
    return () => {
      listener.remove();
    };
  }, []);
  return (
    <View>
      <Text>ajska sjka</Text>
      <FlatList
        data={state}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ShowBlog', {id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Icon
                    style={styles.icon}
                    name="trash"
                    size={30}
                    color="#ED5527"
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.title}
      />
    </View>
  );
};
IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('CreateBlog')}>
        <Icon style={styles.iconHeader} name="plus" size={30} color="#ED5527" />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  row: {
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(5),
    // backgroundColor: 'grey',
    borderBottomWidth: 1,
  },
  iconHeader: {
    marginRight: moderateScale(10),
  },
  title: {
    fontSize: verticalScale(18),
    // fontWeight: 'bold',
  },
});
export default IndexScreen;
