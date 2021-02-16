import ValidationActionTypes from "../actionCreators/ValidationActionTypes";
import axios from "axios";
import ServiceUrls from "../../helpers/ServiceUrls";
import config from "../../../config";
import { getCacheObject } from "../../helpers/globalHelpers/GlobalHelperFunctions";
const SESSION_KEY_NAME = config.SESSION_KEY_NAME;

export const checkUserNameExist = (i) => {
  return (dispatch) => {
    const userinfo= getCacheObject(SESSION_KEY_NAME);
    console.log("hiiiii");
    console.log(i);
    let data = { username: i };
    console.log(data);
    console.log(userinfo);
    
    
    axios.post(ServiceUrls.CHECK_USERNAME, data,{ headers: { "Authorization": "Bearer "+userinfo['token'] }})
      .then((res) => {
        console.log("get>>", res.data);
        let resCode = res.data.code;
        if (resCode === 200) {
          dispatch(checkuserExist(i, res.data.message, resCode, 1)); //1==> username
        } else if (resCode === 400) {
          dispatch(checkuserExist(i, res.data.message, resCode, 1));
        } else {
          dispatch(request_fail(res.data.data.message));
        }
      })
      .catch((err) => {
        dispatch(request_fail(err.message));
      });
  };
};




export const resetvalidatedata = () => {
  return (dispatch) => {
    dispatch(reset_data());
  };
};

const checkuserExist = (i, data, code, errtype) => ({
  type: ValidationActionTypes.VALIDATION_REQUEST_SUCCESS,
  payload: data,
});



const request_fail = (data) => ({
  type: ValidationActionTypes.VALIDATION_REQUEST_FAIL,
  payload: data,
});






const reset_data = () => ({
  type: ValidationActionTypes.RESET_VALIDATION_DATA,
});
