import ValidationActionTypes from "../actionCreators/ValidationActionTypes";

const INITIAL_STATE = {
  
  username_validate_msg: "",

  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ValidationActionTypes.VALIDATION_REQUEST_START:
      return { ...state, loading: true, isUserLogIn: false };
    case ValidationActionTypes.VALIDATION_REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          username_validate_msg: action.payload,
        };
console.log(action.payload)
    case ValidationActionTypes.VALIDATION_REQUEST_FAIL:
      return { ...state, loading: false, valdate_err_msg: action.payload };

    default:
      return state;
  }
};
