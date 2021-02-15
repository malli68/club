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

console.log(">>>",user);

     console.log(">>",ServiceUrls.ADD_CLUB_BY_ID, userinfo);
        dispatch(requeststarted());

         user.superAdminId=userinfo._id
    
        console.log(user)
     
    axios.post(ServiceUrls.ADD_CLUB_BY_ID, user,{ headers: { "Authorization": "Bearer "+userinfo['token'] }})
    .then(res=>{
// console.log(res.data.code)
// console.log(res.data.data)

                let resCode = res.data.code;
                // console.log(resCode)
                // console.log("sucess 200", resCode)
                if (resCode == 200) {
                    console.log("sucess 2000", resCode)
                    dispatch(requestSuccess(res.data.data));
                    // this.props.getuser();
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
      let resCode = res.status;
      console.log(resCode);
      console.log(res)
      if(resCode == 200){
        console.log("sucess 2000", resCode)
      
      dispatch(getrequestSuccess(res.data.data.data));
       } else {
        dispatch(getrequestFailure(res.data.response.message));
    }
    })
    .catch(err => {
      dispatch(getrequestFailure(err.message))
    }) 
  };
}

export const deleteuser =(user)=>{
    return dispatch =>{
    const userinfo=getCacheObject (SESSION_KEY_NAME)

        dispatch(deleterequeststarted())
        axios.post(ServiceUrls.DELETE_CLUB_BY_ID,user,{ headers: { "Authorization": "Bearer "+userinfo['token'] }})
        .then (res=>{
            console.log(res.status)
            console.log(res.data.code)

            let resCode=res.data.code;
            if(resCode === 200){
                dispatch(deleterequestsuccess(res.data.data));
            }else{
                dispatch(deleterequestfailure(res.data.response.message))
            }
        }).catch(err => {
            dispatch(deleterequestfailure(err.message))
          }) 
    }
}




export const getclubinfo = (i) => {
    return dispatch => {
        const userinfo=getCacheObject (SESSION_KEY_NAME)

        dispatch(getclubinforequest_start());
        axios.post(ServiceUrls.GET_CLUB, i,{ headers: { "Authorization": "Bearer "+userinfo['token'] }})
            .then(res => {
                console.log("get>>", res.data.data);
            //  this.userinfo.name = res.data.data.clubname;
                let resCode = res.data.code;
                if (resCode === 200) {
                    dispatch(getclubinforequest_success(res.data.data));
                } else {
                    dispatch(getclubinforequest_fail(res.data.message));
                }

            })
            .catch(err => {
                dispatch(getclubinforequest_fail(err.message));
            });
    };
    

}

export const updateclub = (i) => {
    console.log(i)
    return dispatch => {
        const userinfo=getCacheObject (SESSION_KEY_NAME)

        dispatch(updaterequest_start());
        // var send = {
        //     "_id": i._id,
        //     "email": i.email,
        //     "mobileno": i.mobileno,
        //     "clubname": i.clubname,
        //     "clubtype": i.clubtype,
        //     "clublocation": "Hyderabad"
        // }

        axios.post(ServiceUrls.UPDATE_CLUB_BY_ID, i,{ headers: { "Authorization": "Bearer "+userinfo['token'] }})
            .then(res => {
                console.log("get>>", res);
            //  this.userinfo.name = res.data.data.clubname;
                let resCode = res.data.code;
                if (resCode === 200) {
                    dispatch(updaterequest_success(res.data.data.data));
                } else {
                    dispatch(updaterequest_fail(res.data.message));
                }

            })
            .catch(err => {
                dispatch(updaterequest_fail(err.message));
            });
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
const deleterequeststarted =(data)=>({
    type: clubsActionTypes.DELETE_REQUEST_START,
    payload: data
})
const deleterequestsuccess =(data)=>({
    type: clubsActionTypes.DELETE_REQUEST_SUCCESS,
    payload: data
})
const deleterequestfailure =(data)=>({
    type: clubsActionTypes.DELETE_REQUEST_FAILURE,
    payload: data
})
const updaterequeststarted =(data)=>({
    type: clubsActionTypes.UPDATE_REQUEST_START,
    payload: data
})
const updaterequestsuccess =(data)=>({
    type: clubsActionTypes.UPDATE_REQUEST_SUCCESS,
    payload: data
})
const updaterequestfailure =(data)=>({
    type: clubsActionTypes.UPDATE_REQUEST_FAILURE,
    payload: data
})
const setdataToredux = (data) => ({
    type: clubsActionTypes.SET_CLUB_DETAILS,
    payload: data
})


const getclubinforequest_start = () => ({
    type: clubsActionTypes.GET_CLUBS_REQUEST_START
});
const getclubinforequest_success = (data) => ({
    type: clubsActionTypes.GET_CLUBS_DELTAILS,
    payload: data
});
const getclubinforequest_fail =(data)=>({
    type: clubsActionTypes.GET_CLUBS_REQUEST_FAILURE,
    payload: data
})


const updaterequest_start=()=>({
    type:clubsActionTypes.UPDATE_CLUBS_REQUEST_START,
});
const updaterequest_success=(data)=>({
    type:clubsActionTypes.UPDATE_CLUBS_REQUEST_SUCCESS,
    payload: data

});
const updaterequest_fail=(data)=>({
    type:clubsActionTypes.UPDATE_CLUBS_REQUEST_FAILURE,
    payload: data

});
