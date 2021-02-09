import ClubsActionTypes from "../actionCreators/ClubsActionTypes";
import { toast } from "react-toastify";
const INITIAL_STATE = {
  first_name: "",
  last_name: "",
  address: "",
  city: "",
  u_state: "",
  zipcode: "",
  email: "",
  mobile: "",
  image_url: "",
  error: "",
  popup_msg: "",
  loading: false,
  submit_success: false,
  nav_from: 1,
  is_create: false,
  item_deleted: false,
  validate_ph_no: "",
  validate_email_no: "",
  club_type: "",
  is_added: false,
  is_updated: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OffendersDetailsActionTypes.OFFENDERS_DETAILS_REQUEST_START:
      return { ...state, loading: true };

    case OffendersDetailsActionTypes.OFFENDERS_DETAILS_REQUEST_SUCCESS:
      var offender = action.payload.data;
      var offender_location = action.payload.location;
      let homezone = convertTolocationtoMap(offender.home_zone);
      let workzone = convertTolocationtoMap(offender.work_zone);
      let restrictzone = INITIAL_STATE.restrict_zone;
      let curfew_from = convertStToDateObj(offender.curfew_from);
      let curfew_to = convertStToDateObj(offender.curfew_to);
      let datevalidation = validateFromDateWithCurrentDate(curfew_to);
      let filter_times = filterTimes(curfew_from);
      //  window.$('#add_edit_offender').modal('show');
      return {
        ...state,
        loading: false,
        first_name: offender.fname,
        last_name: offender.lname,
        address: offender.address,
        city: offender.city,
        u_state: offender.state,
        zipcode: offender.zip,
        email: offender.email,
        mobile: filter_country_code(offender.mobile),

        is_create: false,

        validate_email_no: offender.email,
        validate_ph_no: offender.mobile,
      };
    case ClubsActionTypes.CLUB_DETAILS_PAGE_RESET:
      var club = action.payload;
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case ClubsActionTypes.CLUBS_DETAILS_REQUEST_FAIL:
      toast.error(action.payload, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      return { ...state, loading: false };

    case ClubsActionTypes.ADD_CLUBS_DETAILS_REQUEST_SUCCESS:
      // window.$('#add_edit_club').modal('hide');
      return {
        ...state,
        ...INITIAL_STATE,
        is_added: true,
        submit_success: true,
      };

    case ClubsActionTypes.DELETE_CLUBS_REQUEST_SUCCESS:
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
      };

    case ClubsActionTypes.UPDATE_CLUBS_DETAILS_REQUEST_SUCCESS:
      toast.success(action.payload.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });

      // window.$('#add_edit_offender').modal('hide');
      return {
        ...state,
        ...INITIAL_STATE,
        submit_success: true,
        is_updated: true,
      };

    case ClubsActionTypes.SET_CLUB_DETAILS:
      const val = action.payload.value;
      return {
        ...state,
        [action.payload.name]: val,
      };

    case ClubsActionTypes.CLUBS_POPUP_BOX_ERROR_MESSAGE:
      return {
        ...state,
        popup_msg: action.payload,
      };

    case OffendersDetailsActionTypes.UPDATE_PIC_INFO:
      return { ...state, image_url: action.payload.image_url, loading: false };

    default:
      return state;
  }
};
