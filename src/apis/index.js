import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASEURL;

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  // baseURL: import.meta.env.DEV ? 'http://localhost:5173/' : import.meta.env.VITE_BASEURL,
  baseURL: baseUrl,
});

export const getUserDetail = async () => {
  const response = await api.get('/api/user/detail');
  console.log(response.data);
  return response.data;
};

export const postTodo = async (request) => {
  const response = await api.post('/api/todos', request);
  return response.data;
};

export const patchTodo = async (id, request) => {
  const response = await api.patch(`/api/todos/${id}/status`, request);
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await api.delete(`/api/todos/${id}`);
  return response.data;
};

export const getTodoslist = async () => {
  const response = await api.get('/api/todos/todos');
  return response.data;
};

export const getTodoProgress = async () => {
  const response = await api.get(`/api/todos/progress`);
  return response.data;
};

export const postRoom = async (roomId, request) => {
  const response = await api.post(`/api/room/${roomId}/enter`, request);
  return response.data;
};

export const getRoom = async (roomId) => {
  const response = await api.get(`/api/room/${roomId}/detail`);
  return response.data;
};

export const getRoomList = async () => {
  const response = await api.get(`/api/room/list`);
  return response.data;
};

export const leaveRoom = async (roomId) => {
  const response = await api.delete(`/api/room/${roomId}/leave`);
  return response.data;
};
