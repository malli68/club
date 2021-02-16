var BASE_URL = "http://15.207.181.158:8091";

const ServiceUrls = {
  LOGIN: BASE_URL + "/admin/superAdminLogin",
  ADD_CLUB_BY_ID: BASE_URL + "/admin/clubRegistration",
  GET_CLUB_BY_ID: BASE_URL + "/admin/getClubList",
  EDIT_CLUB_BY_ID: BASE_URL + "/admin/updateClub",
  GET_CLUB: BASE_URL + "/admin/getClubById",
  UPDATE_CLUB_BY_ID : BASE_URL + "/admin/updateClub",
  DELETE_CLUB_BY_ID: BASE_URL + "/admin/deleteClub",
  CHECK_USERNAME:BASE_URL + "/admin/checkClubUsername"
};
export default ServiceUrls;
