import React from 'react';
import { decryptData, encryptData } from '../globalHelpers/EncryprDecrypt';
import config from "../../../config";
const SESSION_KEY_NAME = config.SESSION_KEY_NAME;

  export function checkSession() {
  let user = getCacheObject(SESSION_KEY_NAME);
  if (user) {
    return true;
  } else {
    return false;
  }
}

export function isSuperAdmin() {
  let user = getCacheObject(SESSION_KEY_NAME);
  var role_id = user.user.role_id;
  if (role_id == 1) {
    return true;
  } else {
    return false;
  }
}


export function isAdmin() {
  let user = getCacheObject(SESSION_KEY_NAME);
  var role_id = user.user.role_id;
  if (role_id == 2) {
    return true;
  } else {
    return false;
  }
}

/**
* @get cache object
*/
export function getCacheObject(key_name) {
  let data = localStorage.getItem(key_name);
  data = data ? decryptData(data) : null;
  //data = data ? JSON.parse(data) : null;
  return data;
}

/**
 * @set cache object
 */
export function setCacheObject(key_name, value) {

  localStorage.setItem(key_name, encryptData(value));
  //localStorage.setItem(key_name, JSON.stringify(value));
  return true;
}

/**
 * remove session
 */
export function removeSession() {
  // localStorage.clear();
  setCacheObject(SESSION_KEY_NAME, '');
}