import axios from 'axios';
import React, {Component} from 'react';

export default axios.create({
  baseURL: 'http://4f0fda21.ngrok.io',
  // headers:{
  //     Authentication:'Bearer '
  // }
});
