import {  SET_MAIN_TABLE_DATA, SET_MODAL, SET_ROW_ID, SET_LOADING, SET_VALUES } from "./MerosTypes";
import { message } from "antd";
import FetchApi from "../api/FetchApi";

export const setRowId = (data) => (dispatch) => {
  dispatch({
    type: SET_ROW_ID,
    payload: data,
  });
};

export const setMainTableData = (data) => (dispatch) => {
  dispatch({
    type: SET_MAIN_TABLE_DATA,
    payload: data,
  });
};

export const setModal = (data) => (dispatch) => {
  dispatch({
    type: SET_MODAL,
    payload: data,
  });
};

export const setValues = (data) => (dispatch) => {
  dispatch({
    type: SET_VALUES,
    payload: data,
  });
};


export const getLogin = (data) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  });
  const response = await FetchApi("/login", "POST", data);
  if (response && response.data.length > 0) {
    window.localStorage.setItem("user", JSON.stringify(response.data[0]));

    window.location.href = "/";
  } else {
    message.error("Login yoki parol xato!");
  }

  dispatch({
    type: SET_LOADING,
    payload: false,
  });
};