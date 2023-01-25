import {
  getDataFromJson,
  postDataToJson,
  editDataInJson,
  deleteDataFromJson,
} from '../service';
import CryptoJS from 'crypto-js';

//action to post data to json
export const postDataAction = (url, data) => async (dispatch) => {
  const query = await postDataToJson(url, data);
  dispatch(getData('posts'));
};

//action to get data from json
export const getData = (url) => async (dispatch) => {
  const { data } = await getDataFromJson(url);
  dispatch({
    type: 'GET_POST',
    payload: data,
  });
};

//action to delete data from json
export const deleteData = (url) => async (dispatch) => {
  const query = await deleteDataFromJson(url);
  dispatch(getData('posts'));
};

//action to post edited data in json
export const editDataAction = (url, data) => async (dispatch) => {
  const query = await editDataInJson(url, data);
  dispatch(getData('posts'));
};

//action to get data needed to edit
export const getEditDataById = (url) => async (dispatch) => {
  const { data } = await getDataFromJson(url);
  dispatch({
    type: 'GET_EDIT_DATA_BY_ID',
    payload: data,
  });
};

//action to get data to view
export const getDataToView = (url) => async (dispatch) => {
  const { data } = await getDataFromJson(url);
  dispatch({
    type: 'GET_DATA_TO_VIEW',
    payload: data,
  });
};

//action to get data to view
export const getBlogView = (url) => async (dispatch) => {
  const { data } = await getDataFromJson(url);
  dispatch({
    type: 'GET_BLOG_TO_VIEW',
    payload: data,
  });
};

//action for login
export const loginAction = (url, obj, navigate) => async (dispatch) => {
  const { data } = await getDataFromJson(url);
  // console.log(data);
  // var CryptoJS = require('crypto-js');
  if (
    data?.find(
      (d) =>
        d.email === obj.email &&
        JSON.parse(
          CryptoJS.AES.decrypt(d?.password, 'my-secret-key@123').toString(
            CryptoJS.enc.Utf8
          )
        ) === obj.password
    )
  ) {
    let auth = true;
    sessionStorage.setItem('auth', auth);
    alert('login Success ✔️');
    navigate('/blog-management');
  } else {
    alert('Invalid UserName or Password ❌');
  }
};
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
></link>;
