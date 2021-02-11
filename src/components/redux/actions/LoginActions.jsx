import LoginActionTypes from "../actionCreators/LoginActoinTypes";
import axios from "axios";
import ServiceUrls from "../../helpers/ServiceUrls";

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch(loginrequeststarted());
    axios
      .post(ServiceUrls.USER_LOGIN, user)
      .then((res) => {
        let resCode = res.data.code;

        if (resCode === 200) {
          dispatch(loginrequestSuccess(res.data));
        } else {
          dispatch(loginrequestFailure(res.data.message));
        }
      })
      .catch((err) => {
        dispatch(loginrequestFailure(err.message));
      });
  };
};

export const login = (user) => {
  return (dispatch) => {
    console.log(">>", ServiceUrls.LOGIN, user);

    dispatch(loginrequeststarted());
    axios
      .post(ServiceUrls.LOGIN, user)
      .then((res) => {
        //changes
        console.log(">>", res.data.data);
        let resCode = res.data.code;
        console.log(res);
        if (resCode === 200) {
          dispatch(loginrequestSuccess(res.data.data));
        } else {
          dispatch(loginrequestFailure(res.data.response.message));
        }
      })
      .catch((err) => {
        dispatch(loginrequestFailure(err.message));
      });
  };
};

export const setdata = (i) => {
  return (dispatch) => {
    dispatch(setdataToredux(i));
  };
};

export const errorlogin = (msg) => {
  return (dispatch) => {
    dispatch(loginrequestFailure(msg));
  };
};
export const resetlogin = () => {
  return (dispatch) => {
    dispatch(setresetlogininfo());
  };
};

const setdataToredux = (data) => ({
  type: LoginActionTypes.SET_LOGIN_DETAILS,
  payload: data,
});
console.log(setdataToredux.data);
const loginrequeststarted = () => ({
  type: LoginActionTypes.ON_LOGIN_REQUEST_START,
});
const loginrequestSuccess = (data) => ({
  type: LoginActionTypes.ON_LOGIN_REQUEST_SUCCESS,
  payload: data,
});
const loginrequestFailure = (data) => ({
  type: LoginActionTypes.ON_LOGIN_REQUEST_FAIL,
  payload: data,
});
const setresetlogininfo = () => ({
  type: LoginActionTypes.RESET_PASSWORD_FAIL,
});
