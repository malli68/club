<<<<<<< HEAD
import clubsActionTypes from "../actionCreators/ClubsActionTypes";
import {
  setCacheObject,
  getCacheObject,
} from "../../helpers/globalHelpers/GlobalHelperFunctions";
import { toast } from "react-toastify";

const INITIAL_STATE = {

  name: "",
  username: "",
  // password: "",
  email: "",
  mobile: "",
  error: "",
  clublocation: "",
  club_type: "",
  popup_msg: "",
  superAdminId: "",
  loading: false,
  submit_success: false,
  is_create: false,
  item_deleted: false,
  club_list: [],
  editname: "",
  editemail: "",
  editmobile: "",
  editclub_type: "",
  club_details: { editname: "",
  editemail: "",
  editmobile: "",
  editclub_type: "",
   username:"",
  //  password:"123456",
   _id:"",
  clublocation:""}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case clubsActionTypes.CLUBS_DETAILS_REQUEST_START:

      return { ...state, loading: true };
    case clubsActionTypes.CLUBS_DETAILS_REQUEST_SUCCESS:
      console.log("hiiiiiiiiiii");
      var club = action.payload.data;
      return {
        ...state,
        loading: false,

        name: "",
        email: "",
        mobile: "",
        clubtype: "",
        username:"",
        club_type:"",
        is_create: false,
        submit_success: false,
    
      };
    case clubsActionTypes.CLUB_DETAILS_PAGE_RESET:
      var club = action.payload;
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case clubsActionTypes.CLUBS_DETAILS_REQUEST_FAIL:
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

    case clubsActionTypes.ADD_CLUBS_DETAILS_REQUEST_SUCCESS:
      // window.$('#add_edit_club').modal('hide');
      return {
        ...state,
        ...INITIAL_STATE,
        is_added: true,
        submit_success: true,
          club_details: ''
      };

    case clubsActionTypes.DELETE_REQUEST_SUCCESS:
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
      case clubsActionTypes.UPDATE_REQUEST_START:
        window.$('#updateModal').modal('hide');

        return { ...state, loading: true };
    case clubsActionTypes.UPDATE_REQUEST_SUCCESS:
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
         ...INITIAL_STATE,
        submit_success: true,
        is_updated: true,
      };

        case clubsActionTypes.GET_CLUBS_REQUEST_START:

        return { ...state, loading: true };
      case clubsActionTypes.GET_CLUBS_DELTAILS:
        console.log("hiiiiiiiiiii", action.payload);
        
  
        var club = action.payload;
  console.log(club)
  window.$('#updateModal').modal('show');

        return {
          ...state,
         // club_details: club,
          editname: club.clubname,
          editemail: club.email,
          editmobile: club.mobileno,
          editclub_type: club.clubtype,
          editusername:club.username,
           id:club._id,
          clublocation:"hyd"
          
          
        };

    case clubsActionTypes.GET_CLUBS_DETAILS_REQUEST_START:
      // window.$('#updateModal').modal('show');

      return { ...state, loading: true };
    case clubsActionTypes.GET_CLUBS_DETAILS_REQUEST_SUCCESS:
      console.log("hiiiiiiiiiii", action.payload);
      

      var club = action.payload;
      window.$('#updateModal').modal('hide');//

      return {
        ...state,
        loading: false,
        submit_success: true,
        club_list: club,
      };
    case clubsActionTypes.GET_CLUB_DETAILS_PAGE_RESET:
      var club = action.payload;
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case clubsActionTypes.GET_CLUBS_DETAILS_REQUEST_FAIL:
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

    case clubsActionTypes.GET_CLUBS_DETAILS_REQUEST_SUCCESS:
      // window.$('#add_edit_club').modal('hide');
      return {
        ...state,
        ...INITIAL_STATE,
        is_added: true,
        submit_success: true,
      };

    case clubsActionTypes.GET_UPDATE_CLUBS_DETAILS_REQUEST_SUCCESS:
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

    case clubsActionTypes.SET_CLUB_DETAILS:
      const val = action.payload.value;
      return {
        ...state,
        [action.payload.name]: val,
      };

    //adding
case clubsActionTypes.GET_CLUBS_REQUEST_SUCCESS:
    ////

    case clubsActionTypes.CLUBS_DETAILS_POPUP_BOX_ERROR_MESSAGE:
      return {
        ...state,
        popup_msg: action.payload,
      };

    case clubsActionTypes.UPDATE_PIC_INFO:
      return { ...state, image_url: action.payload.image_url, loading: false };

    default:
      return state;
  }
};



=======
import clubsActionTypes from "../actionCreators/ClubsActionTypes";
import {
  setCacheObject,
  getCacheObject,
} from "../../helpers/globalHelpers/GlobalHelperFunctions";
import { toast } from "react-toastify";

const INITIAL_STATE = {

  clubname: "",
  username: "",
  password: "",
  email: "",
  mobile: "",
  error: "",
  clublocation: "",
  club_type: "",
  popup_msg: "",
  superAdminId: "",
  loading: false,
  submit_success: false,
  is_create: false,
  item_deleted: false,
  club_list: [],
  club_details: { clubname: "",
  email: "",
  mobile: "",
  club_type: "",
  username:"",
  _id:"",
  clublocation:""}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case clubsActionTypes.CLUBS_DETAILS_REQUEST_START:
      return { ...state, loading: true };
    case clubsActionTypes.CLUBS_DETAILS_REQUEST_SUCCESS:
      console.log("hiiiiiiiiiii");
      var club = action.payload.data;
      return {
        ...state,
        loading: false,

        name: "",
        email: "",
        mobile: "",
        clubtype: "",
        username:"",
        club_type:"",
        is_create: false,
        submit_success: false,
    
      };
    case clubsActionTypes.CLUB_DETAILS_PAGE_RESET:
      var club = action.payload;
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case clubsActionTypes.CLUBS_DETAILS_REQUEST_FAIL:
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

    case clubsActionTypes.ADD_CLUBS_DETAILS_REQUEST_SUCCESS:
      // window.$('#add_edit_club').modal('hide');
      return {
        ...state,
        ...INITIAL_STATE,
        is_added: true,
        submit_success: true,
          club_details: ''
      };

    case clubsActionTypes.DELETE_REQUEST_SUCCESS:
      window.$("#delete_item").modal("hide");
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
      case clubsActionTypes.UPDATE_REQUEST_START:
        return { ...state, loading: true };
    case clubsActionTypes.UPDATE_REQUEST_SUCCESS:
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

      case clubsActionTypes.GET_CLUBS_REQUEST_START:
        return { ...state, loading: true };
      case clubsActionTypes.GET_CLUBS_DELTAILS:
        console.log("hiiiiiiiiiii", action.payload);
        
  
        var club = action.payload;
  
        return {
          ...state,
           club_details: club,
          // clubname: club.clubname,
          // email: club.email,
          // mobile: club.mobile,
          // clubtype: club.club_type,
          // username:club.username,
          // _id:"",
          // clublocation:"hyd"
          
          
        };

    case clubsActionTypes.GET_CLUBS_DETAILS_REQUEST_START:
      return { ...state, loading: true };
    case clubsActionTypes.GET_CLUBS_DETAILS_REQUEST_SUCCESS:
      console.log("hiiiiiiiiiii", action.payload);
      

      var club = action.payload;

      return {
        ...state,
        loading: false,
        submit_success: true,
        club_list: club,
      };
    case clubsActionTypes.GET_CLUB_DETAILS_PAGE_RESET:
      var club = action.payload;
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case clubsActionTypes.GET_CLUBS_DETAILS_REQUEST_FAIL:
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

    case clubsActionTypes.GET_CLUBS_DETAILS_REQUEST_SUCCESS:
      // window.$('#add_edit_club').modal('hide');
      return {
        ...state,
        ...INITIAL_STATE,
        is_added: true,
        submit_success: true,
      };

    case clubsActionTypes.GET_UPDATE_CLUBS_DETAILS_REQUEST_SUCCESS:
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

    case clubsActionTypes.SET_CLUB_DETAILS:
      const val = action.payload.value;
      return {
        ...state,
        [action.payload.name]: val,
      };

    //adding
case clubsActionTypes.GET_CLUBS_REQUEST_SUCCESS:
    ////

    case clubsActionTypes.CLUBS_DETAILS_POPUP_BOX_ERROR_MESSAGE:
      return {
        ...state,
        popup_msg: action.payload,
      };

    case clubsActionTypes.UPDATE_PIC_INFO:
      return { ...state, image_url: action.payload.image_url, loading: false };

    default:
      return state;
  }
};



>>>>>>> 03ffa5a12daf10079fd3ff5076f21db4c34fe44e
