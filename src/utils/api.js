import axios from 'axios';
import { API_BASE_URL } from './constants';

export const fetchPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts`);
  return response.data;
};

export const fetchPostById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
  return response.data;
};

export const createPost = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/posts`, data);
  return response.data;
};

export const updatePost = async (id, data) => {
  const response = await axios.put(`${API_BASE_URL}/posts/${id}`, data);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/posts/${id}`);
  return response.data;
};
