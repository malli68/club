import clubPlayersActionTypes from '../actionCreators/ClubPlayersActionTypes'
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

     console.log(">>",ServiceUrls.CLUB_USER_REGISTRATION, userinfo);
        dispatch(requeststarted());

         user.clubId=userinfo.data._id
    
        console.log(user)
     
    axios.post(ServiceUrls.CLUB_USER_REGISTRATION, user,{ headers: { "Authorization": "Bearer "+userinfo.data['token'] }})
    .then(res=>{
console.log(res)
// console.log(res.data.data)

                let resCode = res.data.code;
                console.log(resCode)
                 console.log("sucess 200", resCode)
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getuser =()=>{
  return dispatch =>{
    const userinfo=getCacheObject(SESSION_KEY_NAME)
    console.log(userinfo)     

    dispatch(getrequeststarted());
    var user = {}
    user.clubId=userinfo.data._id
    console.log(">>",ServiceUrls.GET_USER_LIST, user);

    axios.post(ServiceUrls.GET_USER_LIST, user,{ headers: { "Authorization": "Bearer "+userinfo.data['token'] }})
    .then(res=>{
        console.log(res)

        console.log(res)
      let resCode = res.data.code;
      console.log(resCode);
      console.log(res.data.data)
      if(resCode == 200){
        console.log("sucess 2000", resCode)
      
      dispatch(getrequestSuccess(res.data.data));
       } else {
        dispatch(getrequestFailure(res.data.response.message));
    }
    })
    .catch(err => {
      dispatch(getrequestFailure(err.message))
    }) 
  };
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getuserinfo = (i) => {
    return dispatch => {
        const userinfo=getCacheObject (SESSION_KEY_NAME)

        dispatch(getuserinforequest_start());
        axios.post(ServiceUrls.GET_USER, i,{ headers: { "Authorization": "Bearer "+userinfo.data['token'] }})
            .then(res => {
                console.log("get>>", res.data.data);
            //  this.userinfo.name = res.data.data.clubname;
                let resCode = res.data.code;
                if (resCode === 200) {
                    dispatch(getuserinforequest_success(res.data.data));
                } else {
                    dispatch(getuserinforequest_fail(res.data.message));
                }

            })
            .catch(err => {
                dispatch(getuserinforequest_fail(err.message));
            });
    };
    

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateuser = (i) => {
    console.log(i)
    return dispatch => {
        const userinfo=getCacheObject (SESSION_KEY_NAME)

        dispatch(updaterequest_start());
        // {
        //     "_id": "5f34d42d2ee6da29f002629a",
        //     "email": "abc12@yopmail.com",
        //     "mobileno": 9573426859,
        //     "clubname": "abc",
        //     "clubtype": 1,
        //     "clublocation": "Hyderabad"
        // }

        axios.post(ServiceUrls.UPDATE_USER_BY_ID, i,{ headers: { "Authorization": "Bearer "+userinfo.data['token'] }})
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
////////////////////////////////////////////////////////////////delete///////////////////////////////////////////////////////////////////
export const deleteuser =(user)=>{
    return dispatch =>{
    const userinfo=getCacheObject (SESSION_KEY_NAME)

        dispatch(deleterequeststarted())
        console.log(user)
        axios.post(ServiceUrls.DELETE_USER_BY_ID,user,{ headers: { "Authorization": "Bearer "+userinfo.data['token'] }})
        .then (res=>{
            console.log(res)
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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

// export const validateform = (i) => {
//     return dispatch => {
//         dispatch(validate(i));
//     };
//   }
  ///////////////////////////////////////
const requeststarted = () => ({
    type: clubPlayersActionTypes.USER_DETAILS_REQUEST_START
});
const requestSuccess = (data) => ({
    type: clubPlayersActionTypes.USER_DETAILS_REQUEST_SUCCESS,
    payload: data
});
const requestFailure =(data)=>({
    type: clubPlayersActionTypes.USER_DETAILS_REQUEST_FAIL,
    payload: data
})

/////////////////////////////////////////
const getrequeststarted = () => ({
    type: clubPlayersActionTypes.GET_USERS_DETAILS_REQUEST_START
});
const getrequestSuccess = (data) => ({
    type: clubPlayersActionTypes.GET_USERS_DETAILS_REQUEST_SUCCESS,
    payload: data
});
const getrequestFailure =(data)=>({
    type: clubPlayersActionTypes.GET_USERS_DETAILS_REQUEST_FAIL,
    payload: data
})
//////////////////////////////////////////////////////////
const deleterequeststarted =(data)=>({
    type: clubPlayersActionTypes.DELETE_REQUEST_START,
    payload: data
})
const deleterequestsuccess =(data)=>({
    type: clubPlayersActionTypes.DELETE_REQUEST_SUCCESS,
    payload: data
})
const deleterequestfailure =(data)=>({
    type: clubPlayersActionTypes.DELETE_REQUEST_FAILURE,
    payload: data
})
const updaterequeststarted =(data)=>({
    type: clubPlayersActionTypes.UPDATE_REQUEST_START,
    payload: data
})
const updaterequestsuccess =(data)=>({
    type: clubPlayersActionTypes.UPDATE_REQUEST_SUCCESS,
    payload: data
})
const updaterequestfailure =(data)=>({
    type: clubPlayersActionTypes.UPDATE_REQUEST_FAILURE,
    payload: data
})
const setdataToredux = (data) => ({
    type: clubPlayersActionTypes.SET_USER_DETAILS,
    payload: data
})

//////////////////////GETCLUB//////////////////////////////////////////////////
const getuserinforequest_start = () => ({
    type: clubPlayersActionTypes.GET_USERS_REQUEST_START
});
const getuserinforequest_success = (data) => ({
    type: clubPlayersActionTypes.GET_USERS_DELTAILS,
    payload: data
});
const getuserinforequest_fail =(data)=>({
    type: clubPlayersActionTypes.GET_USERS_REQUEST_FAILURE,
    payload: data
})
////////////////////////////////UPDATE////////////////////

const updaterequest_start=()=>({
    type:clubPlayersActionTypes.UPDATE_CLUBS_REQUEST_START,
});
const updaterequest_success=(data)=>({
    type:clubPlayersActionTypes.UPDATE_CLUBS_REQUEST_SUCCESS,
    payload: data

});
const updaterequest_fail=(data)=>({
    type:clubPlayersActionTypes.UPDATE_CLUBS_REQUEST_FAILURE,
    payload: data

});
//////////////////////////////////////////////////////////////////
const validate = (data) => ({
    type: clubPlayersActionTypes.VALIDATE_DETAILS,
    payload: data
  });