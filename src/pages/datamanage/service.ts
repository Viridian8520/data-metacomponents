import axios from 'axios'
import { GetDeviceParams } from './type';

export const getDevice = (params: GetDeviceParams) => new Promise((resolve, reject) => {
  return axios({
    method: 'get',
    url: 'http://localhost:8080/rest/data/access/device/query',
    params: params,
  }).then(res => {
    if (res && res.status === 200) {
      resolve(res);
    } else {
      reject(res);
    }
  }).catch(err => {
    console.log(err)
  });
});

export const addDevice = (data: any) => new Promise((resolve, reject) => {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/rest/data/access/device/action/add',
    data: data,
  }).then(res => {
    if (res && res.status === 200) {
      resolve(res);
    } else {
      reject(res);
    }
  }).catch(err => {
    console.log(err)
  });
});

export const deleteDevice = (data: any) => new Promise((resolve, reject) => {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/rest/data/access/device/action/delete',
    data: data,
  }).then(res => {
    if (res && res.status === 200) {
      resolve(res);
    } else {
      reject(res);
    }
  }).catch(err => {
    console.log(err)
  });
});

export const uploadFile = (data: any) => new Promise((resolve, reject) => {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/rest/data/access/file/upload',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => {
    if (res && res.status === 200) {
      resolve(res);
    } else {
      reject(res);
    }
  }).catch(err => {
    console.log(err)
  });
});