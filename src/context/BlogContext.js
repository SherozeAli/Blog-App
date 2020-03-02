import React from 'react';
import createDataContext from './createDataContext';
import jsonserver from '../api/jsonserver';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_BlogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'delete_BlogPost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_BlogPost':
      console.log('editing');
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'get_BlogPosts':
      return action.payload;
    default:
      return state;
  }
};
const getBlogPost = dispatch => {
  return async () => {
    const response = await jsonserver.get('/blogposts');
    dispatch({type: 'get_BlogPosts', payload: response.data});
  };
};
const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    const response = await jsonserver.post('/blogposts', {
      title: title,
      content: content,
    });
    //dispatch({type:'add_BlogPost',payload:{title: title, content: content}})
    // dispatch({
    //   type: 'add_BlogPost',
    //   payload: {title: title, content: content},
    // });
    callback();
  };
};
const deleteBlogPost = dispatch => {
  return async id => {
    await jsonserver.delete(`/blogposts/${id}`);
    dispatch({type: 'delete_BlogPost', payload: id});
  };
};
const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    await jsonserver.put(`/blogposts/${id}`, {
      title: title,
      content: content,
    });

    dispatch({
      type: 'edit_BlogPost',
      payload: {id: id, title: title, content: content},
    });
    callback();
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {getBlogPost, addBlogPost, deleteBlogPost, editBlogPost},
  [],
);
