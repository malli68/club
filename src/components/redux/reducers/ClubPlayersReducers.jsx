import clubPlayersActionTypes from "../actionCreators/ClubPlayersActionTypes";
import {
  setCacheObject,
  getCacheObject,
} from "../../helpers/globalHelpers/GlobalHelperFunctions";
import { toast } from "react-toastify";

const INITIAL_STATE = {

  firstname: "",
  lastname:"",
  username: "",
  password: "",
  email: "",
  mobileno: "",
  clubId:"",
  error: "",
  loading: false,
  submit_success: false,
  is_create: false,
  item_deleted: false,
  user_list: [],
  editfirstname: "",
  editlastname: "",
  editemail: "",
  editmobile: "",
 editusername:"",
 user_details: { editfirstname: "",
 editemail: "",
 editmobileno: "",
 editlastname: "",
  editusername:"",
 //  password:"123456",
  _id:"",
 }
  
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case clubPlayersActionTypes.USER_DETAILS_REQUEST_START:

      return { ...state, loading: true };
    case clubPlayersActionTypes.USER_DETAILS_REQUEST_SUCCESS:
      console.log("hiiiiiiiiiii");
      var club = action.payload.data;
      return {
        ...state,
        loading: false,

        firstname: "",
        lastname: "",
        email: "",
        mobileno: "",
        username:"",
        is_create: false,
        submit_success: false,
    
      };
    case clubPlayersActionTypes.CLUB_DETAILS_PAGE_RESET:
      var club = action.payload;
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case clubPlayersActionTypes.CLUBS_DETAILS_REQUEST_FAIL:
      toast.error(action.payload, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      return { ...state, loading: false, historyLocationloading: false };
///////////////////////////////////////////////
    case clubPlayersActionTypes.GET_USERS_DETAILS_REQUEST_START:
      // window.$('#updateModal').modal('show');

      return { ...state, loading: true };
    case clubPlayersActionTypes.GET_USERS_DETAILS_REQUEST_SUCCESS:
      console.log("hiiiiiiiiiii", action.payload);
      

      var user = action.payload;
      console.log(user)
      window.$('#myModal').modal('hide');

      return {
        ...state,
        loading: false,
        submit_success: true,
        user_list: user.data,
      };
    case clubPlayersActionTypes.GET_USER_DETAILS_PAGE_RESET:
      var club = action.payload;
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case clubPlayersActionTypes.GET_USERS_DETAILS_REQUEST_FAIL:
      toast.error(action.payload, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      return { ...state, loading: false, historyLocationloading: false };

    case clubPlayersActionTypes.GET_USERS_DETAILS_REQUEST_SUCCESS:
      // window.$('#add_edit_club').modal('hide');
      return {
        ...state,
        ...INITIAL_STATE,
        is_added: true,
        submit_success: true,
      };
////////////////////////////////////////////////////////////////////////
    case clubPlayersActionTypes.GET_UPDATE_CLUBS_DETAILS_REQUEST_SUCCESS:
      toast.success(action.payload.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });

      // window.$('#add_edit_club').modal('hide');
      return {
        ...state,
        ...INITIAL_STATE,
        submit_success: true,
        is_updated: true,
      };

    case clubPlayersActionTypes.SET_USER_DETAILS:
      const val = action.payload.value;
      return {
        ...state,
        [action.payload.name]: val,
      };




      case clubPlayersActionTypes.GET_USERS_REQUEST_START:

        return { ...state, loading: true };
      case clubPlayersActionTypes.GET_USERS_DELTAILS:
        console.log("hiiiiiiiiiii", action.payload);
        
  
        var user = action.payload;
  console.log(user)
  window.$('#myModal').modal('show');

        return {
          ...state,
          editfirstname: user.firstname,
          editlastname: user.lastname,
          editemail: user.email,
          editmobileno: user.mobileno,
          editusername:user.username,
           id:user._id,          
        };



    //adding
    case clubPlayersActionTypes.DELETE_REQUEST_SUCCESS:
        // window.$("#delete_item").modal("hide");
        toast.success(action.payload.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
        return {
          ...state,
          item_deleted: true,
          loading: false,
         /*  club_list: [
            ...state.club_list.filter(
              (club) => club._id !== club._id
            ),
  console.log(action.payload.data.id)
  
          ], */
        };
        case clubPlayersActionTypes.GET_UPDATE_USERS_DETAILS_REQUEST_SUCCESS:
      toast.success(action.payload.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });

      // window.$('#add_edit_club').modal('hide');
      return {
        ...state,
        ...INITIAL_STATE,
        submit_success: true,
        is_updated: true,
      };

case clubPlayersActionTypes.GET_CLUBS_REQUEST_SUCCESS:
    ////

    case clubPlayersActionTypes.CLUBS_DETAILS_POPUP_BOX_ERROR_MESSAGE:
      return {
        ...state,
        popup_msg: action.payload,
      };

    case clubPlayersActionTypes.UPDATE_PIC_INFO:
      return { ...state, image_url: action.payload.image_url, loading: false };

    default:
      return state;
  }
};



