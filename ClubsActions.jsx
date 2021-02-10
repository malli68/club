import clubsActionTypes from '../actionCreators/ClubsActionTypes'
import axios from 'axios'
import ServiceUrls from '../../helpers/ServiceUrls'
import {getCacheObject} from "../../helpers/globalHelpers/GlobalHelperFunctions";
import config from "../../../config";
const SESSION_KEY_NAME = config.SESSION_KEY_NAME;

export const adduser = (user) => {
    return dispatch => {
        
     const userinfo = getCacheObject(SESSION_KEY_NAME )
console.log(">>>",SESSION_KEY_NAME);
console.log(">>>",userinfo);
console.log(">>>",userinfo['token']);
console.log(">>>",user);

     console.log(">>",ServiceUrls.ADD_CLUB_BY_ID, user);
        dispatch(requeststarted());
        console.log("user>>>>>>>>>>>>>>>>>>",user)
        //to fetch data from userinfo
        user.superAdminId=userinfo._id
        user.username=userinfo.username
        user.password="123456"
        user.clublocation="hyderabad"
        console.log(user)
        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + userinfo.token,
        }
        axios.post(ServiceUrls.ADD_CLUB_BY_ID, user,{
            headers: headers
        }).then(res=>{

                let resCode = res.data;
                console.log(resCode)
                console.log("sucess 200", resCode)
                if (resCode == 200) {
                    console.log("sucess 2000", resCode)
                    dispatch(requestSuccess(res.data.data));
                } else {
                    dispatch(requestFailure(res.data.response.message));
                }

            })
            .catch(err => {
                console.log("err>>>>", err)
                dispatch(requestFailure(err.message));
            });
    };
}

export const getuser =(user)=>{
  return dispatch =>{
    const userinfo=getCacheObject (SESSION_KEY_NAME)
    console.log(userinfo)
     console.log(">>",ServiceUrls.GET_CLUB_BY_ID, user);

    dispatch(getrequeststarted());
    axios.post(ServiceUrls.GET_CLUB_BY_ID, user,{ headers: { "Authorization": "Bearer "+userinfo['token'] }})
    .then(res=>{
      let resCode = res.data;
      console.log(resCode);
      console.log(res)
      if(resCode == 200){
        console.log("sucess 2000", resCode)
      dispatch(getrequestSuccess(res.data.response));
       } else {
        dispatch(getrequestFailure(res.data.response.message));
    }
    })
    .catch(err => {
      dispatch(getrequestFailure(err.message))
    }) 
  };
}
export const setdata = (i) => {
    return dispatch => {
        dispatch(setdataToredux(i));
    };
}

export const error = (msg) => {
    return dispatch => {
        dispatch(requestFailure(msg));
    };
}

const requeststarted = () => ({
    type: clubsActionTypes.CLUBS_DETAILS_REQUEST_START
});
const requestSuccess = (data) => ({
    type: clubsActionTypes.CLUBS_DETAILS_REQUEST_SUCCESS,
    payload: data
});
const requestFailure =(data)=>({
    type: clubsActionTypes.CLUBS_DETAILS_REQUEST_FAIL,
    payload: data
})
const getrequeststarted = () => ({
    type: clubsActionTypes.GET_CLUBS_DETAILS_REQUEST_START
});
const getrequestSuccess = (data) => ({
    type: clubsActionTypes.GET_CLUBS_DETAILS_REQUEST_SUCCESS,
    payload: data
});
const getrequestFailure =(data)=>({
    type: clubsActionTypes.GET_CLUBS_DETAILS_REQUEST_FAIL,
    payload: data
})
const setdataToredux = (data) => ({
    type: clubsActionTypes.SET_CLUB_DETAILS,
    payload: data
})



