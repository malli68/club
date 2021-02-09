import ClubsActionTypes from "../actionCreators/ClubsActionTypes";
import axios from "axios";
import ServiceUrls from "../../helpers/ServiceUrls";
import config from "../../../config";
//import { getCacheObject } from "../../helpers/globalHelpers/GlobalHelperFunctions";
const SESSION_KEY_NAME = config.SESSION_KEY_NAME;
//const GOOGLE_MAP_API_KEY = config.GOOGLE_MAP_API_KEY;

export const addclub = (i) => {
  return (dispatch) => {
    const player = /* getCacheObject */ SESSION_KEY_NAME;
    dispatch(request_start());
    axios
      .post(ServiceUrls.ADD_CLUB_BY_ID, i, {
        headers: { "access-token": player["access-token"] },
      })
      .then((res) => {
        console.log("get>>", res.data);
        let resCode = res.data.status;
        if (resCode === 200) {
          dispatch(request_add_clubs_success(res.data.response));
        } else {
          dispatch(request_fail(res.data.response.message));
        }
      })
      .catch((err) => {
        dispatch(request_fail(err.message));
      });
  };
};

export const getclub = (i) => {
  return (dispatch) => {
    const user = /* getCacheObject */ SESSION_KEY_NAME;
    dispatch(request_start());
    axios
      .post(ServiceUrls.GET_CLUB_BY_ID, i, {
        headers: { "access-token": user["access-token"] },
      })
      .then((res) => {
        console.log("get>>", res.data, user["access-token"]);
        let resCode = res.data.status;
        console.log("error msg", res);
        if (resCode === 200) {
          dispatch(request_success(res.data.response, i));
        } else {
          dispatch(request_fail(res.data.response.message));
        }
      })
      .catch((err) => {
        dispatch(request_fail(err.message));
      });
  };
};

export const editclub = (i) => {
  return (dispatch) => {
    const user = /* getCacheObject */ SESSION_KEY_NAME;
    dispatch(request_start());
    console.log("get>>", i, ServiceUrls.EDIT_CLUB_BY_ID);
    axios
      .post(ServiceUrls.EDIT_CLUB_BY_ID, i, {
        headers: { "access-token": user["access-token"] },
      })
      .then((res) => {
        console.log("update>>", res.data, i);
        let resCode = res.data.status;
        if (resCode === 200) {
          dispatch(updateClubDetails(res.data.response));
        } else {
          dispatch(request_fail(res.data.response.message));
        }
      })
      .catch((err) => {
        dispatch(request_fail(err.message));
      });
  };
};

export const uploadpic = (i) => {
  return (dispatch) => {
    const user = /* getCacheObject */ SESSION_KEY_NAME;
    dispatch(request_start());
    axios
      .post(ServiceUrls.UPLOAD_PIC, i, {
        headers: { "access-token": user["access-token"] },
      })
      .then((res) => {
        let resCode = res.data.status;
        if (resCode === 200) {
          dispatch(updateuserpicdetails(res.data.response));
        } else {
          dispatch(request_fail(res.data.response.message));
        }
      })
      .catch((err) => {
        dispatch(request_fail(err.message));
      });
  };
};

export const uploadpicfetch = (i) => {
  return (dispatch) => {
    const user = /* getCacheObject */ SESSION_KEY_NAME;
    dispatch(request_start());
    fetch(ServiceUrls.UPLOAD_PIC, {
      method: "post",
      headers: new Headers({
        "access-token": user["access-token"],
      }),
      body: i,
    })
      .then((res) => {
        console.log("pic info", res);
        let resCode = res.data.status;
        if (resCode === 200) {
          dispatch(updateuserpicdetails(res.data.response));
        } else {
          dispatch(request_fail(res.data.response.message));
        }
      })
      .catch((err) => {
        dispatch(request_fail(err.message));
      });
  };
};

export const deleteclub = (i) => {
  return (dispatch) => {
    const user = /* getCacheObject */ SESSION_KEY_NAME;
    dispatch(request_start());
    axios
      .post(ServiceUrls.DELETE_CLUB_BY_ID, i, {
        headers: { "access-token": user["access-token"] },
      })
      .then((res) => {
        let resCode = res.data.status;
        if (resCode === 200) {
          dispatch(request_delete_club_success(res.data.response));
        } else {
          dispatch(request_fail(res.data.response.message));
        }
      })
      .catch((err) => {
        dispatch(request_fail(err.message));
      });
  };
};

export const page_refresh = () => {
  return (dispatch) => {
    dispatch(pagerefresh());
  };
};

export const club_page_refresh = () => {
  return (dispatch) => {
    dispatch(pagerefresh());
  };
};

export const setdata = (i) => {
  return (dispatch) => {
    dispatch(setdataToredux(i));
  };
};

export const errormsg = (msg) => {
  return (dispatch) => {
    dispatch(request_fail(msg));
  };
};

export const setpopupmsg = (msg) => {
  return (dispatch) => {
    dispatch(setpopuperror_msg(msg));
  };
};

const request_start = () => ({
  type: ClubsActionTypes.CLUBS_DETAILS_REQUEST_START,
});
const request_success = (data, search_data) => ({
  type: ClubsActionTypes.CLUBS_DETAILS_REQUEST_SUCCESS,
  payload: data,
  searchInfo: search_data,
});

const request_delete_club_success = (data) => ({
  type: ClubsActionTypes.DELETE_CLUBS_REQUEST_SUCCESS,
  payload: data,
});

const request_add_clubs_success = (data) => ({
  type: ClubsActionTypes.ADD_CLUBS_DETAILS_REQUEST_SUCCESS,
  payload: data,
});

const request_fail = (data) => ({
  type: ClubsActionTypes.CLUBS_DETAILS_REQUEST_FAIL,
  payload: data,
});

const setdataToredux = (data) => ({
  type: ClubsActionTypes.SET_CLUB_DETAILS,
  payload: data,
});

const pagerefresh = () => ({
  type: ClubsActionTypes.CLUBS_DETAILS_PAGE_RESET,
});

const setpopuperror_msg = (data) => ({
  type: ClubsActionTypes.CLUBS_DETAILS_POPUP_BOX_ERROR_MESSAGE,
  payload: data,
});

const updateClubDetails = (data) => ({
  type: ClubsActionTypes.UPDATE_CLUBS_DETAILS_REQUEST_SUCCESS,
  payload: data,
});

const updateuserpicdetails = (data) => ({
  type: ClubsActionTypes.UPDATE_PIC_INFO,
  payload: data,
});
