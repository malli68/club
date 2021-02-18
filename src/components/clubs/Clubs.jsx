<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../commons/Footer";
import Header from "../commons/Header";
import {
  setdata,
  adduser,
  getuser,
  deleteuser,getclubinfo,updateclub,
} from "../redux/actions/ClubsActions";
import {checkUserNameExist,resetvalidatedata} from "../redux/actions/ValidateActions"
import { validate_ClubsForm } from '../../utils/Validation'
import {validate_Form}  from '../../utils/Validation'
import Sidebar from "../commons/Sidebar";
export class Clubs extends Component {
  constructor(props) {
    super(props);
    this.props.resetvalidatedata();
    this.state = {
      club_list: [],
      getclubinfo:[]
      
      
    };
  }

  render() {
    console.log(this.props,"::::::")
   console.log(getclubinfo,"123") 
   var getclubinfo=this.props.getclubinfo()
    var {
      name,
      username,
      email,
      mobile,
      submit_success,
      is_create,
      club_type,
      club_list,
      clublocation,
      clubname,
      superAdminId,club_details,
      editname,
      editusername,
      editemail,
      editmobile,
      editclub_type,username_validate_msg,
    } = this.props;

    
    console.log("club_details",  this.props.club_details)
    return (
      <div>
        <div class="container-fluid">
          {/* <!-- Begin page --> */}
          <div id="layout-wrapper">
            <Header />
            <div class="vertical-menu">
              <div class="h-100">
                <div class="user-wid text-center py-4">
                  <div class="user-img">
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      alt=""
                      class="avatar-md mx-auto rounded-circle"
                    />
                  </div>

                  <div class="mt-3">
                    <a
                      href="#"
                      class="text-dark font-weight-medium font-size-16"
                    >
                      Patrick Becker
                    </a>
                    <p class="text-body mt-1 mb-0 font-size-13">
                      UI/UX Designer
                    </p>
                  </div>
                </div>

                {/* <!--- Sidemenu --> */}
                  <Sidebar/>
                {/* <!-- Sidebar --> */}
              </div>
            </div>
            {/* <!-- Left Sidebar End --> */}

            {/* <!-- ============================================================== --> */}
            {/* <!-- Start right Content here --> */}
            {/* <!-- ============================================================== --> */}
            <div class="main-content">
              <div class="page-content">
                {/* <!-- start page title --> */}
                <div class="row">
                  <div class="col-12">
                    <div class="page-title-box d-flex align-items-center justify-content-between">
                      <h4 class="page-title mb-0 font-size-18">Clubs</h4>

                      <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                          <li class="breadcrumb-item active">
                            Welcome to ClubRummy
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end page title --> */}

                <div class="row">
                  <div class="col-12">
                    <div class="card box-big-shadow">
                      <h4 class="card-header mt-0">Add New Club</h4>
                      <div class="card-body">
                        <form class="repeater" enctype="multipart/form-data">
                          <div data-repeater-list="group-a">
                            <div data-repeater-item class="row">
                              <div class="form-group col-lg-2">
                                <label for="name">Name</label>
                                <input
                                  type="text"
                                  value={name}
                                  ref="name"
                                  id="name"
                                  name="name"
                                  class="form-control"
                                  onChange={this.handleChange}
                                  
                                />
                              </div>

                              <div class="form-group col-lg-2">
                                <label for="email">Email</label>
                                <input
                                  type="email"
                                  value={email}
                                  id="email"
                                  ref="email"
                                  name="email"
                                  class="form-control"
                                  onChange={this.handleChange}
                                  
                                />
                              </div>

                              <div class="form-group col-lg-2">
                                <label for="subject">Mobile</label>
                                <input
                                  type="text"
                                  value={mobile}
                                  id="mobile"
                                  ref="mobile"
                                  name="mobile"
                                  class="form-control"
                                  onChange={this.handleChange}
                                  
                                />
                              </div>
                              <div class="form-group col-lg-2">
                                <label for="subject">Username</label>
                                <input
                                  type="text"
                                  value={username}
                                  id="username"
                                  ref="username"
                                  class="form-control"
                                  name="username"
                                  onChange={this.handleChange}
                                  
                                />
                         <p className="text-primary">{username_validate_msg}</p>

                              </div>
                              <div class="form-group col-lg-2">
                                <label for="subject">Club-Types</label>
                                <select
                                  className="form-control"
                                  name="club_type"
                                  ref="club_type"
                                   value={club_type}  onChange={
                                    this.handleChange
                                  }
                                  
                                >
                                  <option>Clubtypes</option>
                                  <option value="0">Bronze</option>
                                  <option value="1">Silver</option>
                                  <option value="2">Gold</option>
                                  <option value="3">Diamond</option>
                                  <option value="4">Platinum</option>
                                </select>
                              </div>
                              <div class="col-lg-2 align-self-center">
                                <input
                                  data-repeater-create
                                  type="button"
                                  class="btn btn-primary btn-block"
                                  value="Create"
                                  ref="Create"
                                  onClick={() => {
                                    this.createClub();
                                  }}
                                ></input>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end row --> */}

                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-title mb-4">Clubs List</h4>

                        <table
                          id="datatable"
                          class="table table-bordered dt-responsive nowrap"
                          style={{
                            borderCollapse: "collapse",
                            borderSpacing: "0",
                            width: "100%",
                          }}
                        >
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>Name</th>
                              <th>Date</th>
                              <th>Mobile</th>
                              <th>Email</th>
                              <th>Username</th>
                              <th>Play Chips</th>
                              <th>Real Chips</th>
                              <th>Actions</th>
                            </tr>
                          </thead>

                          <tbody>
                            {club_list.length > 0 ? (
                              club_list.map((club, index) => {
                                // console.log(club._id);
                                // console.log(club.mobileno)
                                return (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    {/* <td>{ club._id }</td> */}
                                    <td>{club.clubname}</td>
                                    <td>08/02/2020</td>
                                    <td>{club.mobileno}</td>
                                    <td>{club.email}</td>
                                    <td>{club.username}</td>
                                    <td>240</td>
                                    <td>200</td>
                                    <td>
                                     <i
                                        class="fa fa-edit" data-toggle="modal" data-target="#myModal"
                                        onClick={() => this.onEdit(club._id)}
                                      ></i>
                                      <i
                                        class="fa fa-trash"
                                        onClick={() => this.onDelete(club._id)}
                                      ></i>
                                    </td>
                                  </tr>
                                );
                              })
                            ) : (
                              <tr>
                                <td colSpan="5">Loading...</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}
              </div>
              <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog" id="updateModal">
    <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          {/* <h4 class="modal-title">Update Club</h4> */}
        </div>
        <div class="modal-body">


        <div>
                 
                 <div class="row">
                   <div class="col-12">
                     <div class="card box-big-shadow">
                       <h4 class="card-header mt-0">Update Player</h4>
                       <div class="card-body">
                         <form class="repeater" enctype="multipart/form-data">
                           <div data-repeater-list="group-a">
                             <div data-repeater-item class="row">
                               <div class="form-group col-lg-8">
                                 <label for="name">Name</label>
                                 <input
                                   type="text"
                                   value={editname}
                                   ref="name"
                                   id="name"
                                   name="editname"
                                   class="form-control"
                                   onChange={this.updatehandleChange}
                                   
                                 />
                               </div>
 
                               <div class="form-group col-lg-4">
                                 <label for="email">Email</label>
                                 <input
                                   type="email"
                                   value={editemail}
                                   id="email"
                                   ref="email"
                                   name="editemail"
                                   class="form-control"
                                   onChange={this.updatehandleChange}
                                   
                                 />
                               </div>
 
                               <div class="form-group col-lg-4">
                                 <label for="subject">Mobile</label>
                                 <input
                                   type="text"
                                   value={editmobile}
                                   id="mobile"
                                   ref="mobile"
                                   name="editmobile"
                                   class="form-control"
                                   onChange={this.updatehandleChange}
                                   
                                 />
                               </div>
                               <div class="form-group col-lg-4">
                                 <label for="subject">Username</label>
                                 <input
                                   type="text"
                                   value={editusername}
                                   id="username"
                                   ref="username"
                                   class="form-control"
                                   name="editusername"
                                   onChange={this.updatehandleChange}
                                   
                                 />
                               </div>
                               <div class="form-group col-lg-4">
                                 <label for="subject">Club-Types</label>
                                 <select
                                   className="form-control"
                                   name="editclub_type"
                                   ref="club_type"
                                   value={editclub_type}
                                   onChange={this.updatehandleChange}
                                   
                                 >
                                   <option>Clubtypes</option>
                                   <option value="0">Bronze</option>
                                   <option value="1">Silver</option>
                                   <option value="2">Gold</option>
                                   <option value="3">Diamond</option>
                                   <option value="4">Platinum</option>
                                 </select>
                               </div>
                               <div class="col-lg-3 align-self-center">
                                 <input
                                   data-repeater-create
                                   type="button"
                                   class="btn btn-primary btn-block"
                                   value="Update"
                                   ref="Create"
                                   onClick={() => {
                                    this.updateClub(this.props.club_details._id);
                                   }}
                                 ></input>
                               </div>
                             </div>
                           </div>
                         </form>
                       </div>
                     </div>
                   </div>
                 </div>
                 </div>

        </div>
        {/* <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" style={{backgroundColor:"Highlight"}} onClick={()=>this.updateClub(club_list._id)}>Submit</button>
        </div> */}
      </div>
      
    </div>
  </div>
              {/* <!-- End Page-content --> */}
              <Footer />
            </div>
            {/* <!-- end main content--> */}
          </div>
          {/* <!-- END layout-wrapper --> */}
        </div>
      </div>
    );
    // <div class="rightbar-overlay"></div>
  }
  updateClub=(club)=>{
    console.log(club,"lll")
    const {
      id,
      editname,
      username,
      editmobile,
      editemail,
      editclub_type,
      clublocation,
      password,
      superAdminId,
    } = this.props;
    console.log(data);
    var data = {
      _id:id,
      clubname: editname,
      clubtype: editclub_type,
      clublocation: "hyd",
      mobileno: editmobile,
      email: editemail,
      // username: username,
      // password: "123456",
      // superAdminId: "123",
    };
    this.props.updateclub(data);
    this.props.getuser(data)
  

  }
  handleChange = (e) => {
    console.log(e.target.value,"e.target.value")
    var data = { name: e.target.name, value: e.target.value };
    if (e.target.name == "name") {
      this.props.setdata(data);
    } else if (e.target.name == "email") {
      this.props.setdata(data);
    } else if (e.target.name == "mobile") {
      this.props.setdata(data);
    } else if (e.target.name == "club_type") {
      this.props.setdata(data);
    } else if (e.target.name == "username") {
      this.props.setdata(data);
      console.log('darta:477',data);
      this.props.checkUserNameExist(data.value);
    }
  };
  updatehandleChange = (e) => {
    console.log(e.target.value,"e.target.value")
    var data = { name: e.target.name, value: e.target.value };
    if (e.target.name == "editname") {
      this.props.setdata(data);
    } else if (e.target.name == "editemail") {
      this.props.setdata(data);
    } else if (e.target.name == "editmobile") {
      this.props.setdata(data);
    } else if (e.target.name == "editclub_type") {
      this.props.setdata(data);
    } else if (e.target.name == "editusername") {
      this.props.setdata(data);
    }
  };
  componentDidMount() {
    this.props.updateclub()
     this.props.getuser();
     

    
  }

// componentWillReceiveProps(nextProps){
//   console.log(nextProips)
// }

  componentDidUpdate(prevProps, prevState) {
    // check whether client has
    const { submit_success, is_create, club_list } = this.props;
  }
  onDelete(_id) {
    console.log(_id)
    this.props.deleteuser({id:_id});
    this.props.getuser(_id)
  }
  onEdit(_id) {
    console.log(_id)
    // this.props.deleteuser({id:_id});
    this.props.getclubinfo({id:_id})
  }
  createClub() {
    const {
      name,
      username,
      mobile,
      email,
      club_type,
      clublocation,
      password,
      superAdminId,
    } = this.props;
    console.log(data);
    /* var errormsg = validate_Form(this.props);
        if (errormsg) {
            this.props.validateform(errormsg);
            return false;
        } */
    var data = {
      clubname: name,
      clubtype: club_type,
      clublocation: "hyd",
      mobileno: mobile,
      email: email,
      username: username,
      password: "123456",
      // superAdminId: "123",
    };
    this.props.adduser(data);
    this.props.getuser(data);


  }
}
const mapStateToProps = (state) => {
  const {
    id,
    name,
    username,
    email,
    mobile,
    club_type,
    error,
    clublocation,
    clubname,
    superAdminId,
    popup_msg,
    loading,
    submit_success,
    is_create,
    item_deleted,
    club_list,club_details,
    editusername,editname,editmobile,editclub_type,editemail
  } = state.clubs;
  const {  username_validate_msg } = state.validate;
  console.log("club_details", loading)
  console.log(username_validate_msg)
  return {
    id,
    name,
    username,
    email,
    mobile,
    club_type,
    error,
    clublocation,
    clubname,
    superAdminId,
    popup_msg,
    loading,
    submit_success,
    is_create,
    item_deleted,
    editusername,editname,editmobile,editclub_type,editemail,
    club_list,club_details,username_validate_msg,checkUserNameExist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setdata: (input) => {
      dispatch(setdata(input));
    },
    adduser: (input) => {
      dispatch(adduser(input));
    },
    getuser: (input) => {
      dispatch(getuser(input));
    },
    deleteuser: (input) => {
      dispatch(deleteuser(input));
    },
     getclubinfo: (input) =>{
      dispatch(getclubinfo(input));
    } ,
    updateclub: (input) =>{
      dispatch(updateclub(input));
    } ,
    checkUserNameExist: (input) =>{
      dispatch(checkUserNameExist(input));
    },resetvalidatedata: () => {
      dispatch(resetvalidatedata());
  }, 
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Clubs);

/* 
                                            {this.props.club_list.map((club)=>{
                                                console.log(club_list);
                                                // console.log(club);
                                                console.log(club.mobileno);
                                                <tr key={club._id}>
                                                <td>{club.clubname}hii</td>
                                                <td>08/02/2020</td>
                                                <td>{club.email}</td>
                                                <td>{club.username}</td>
                                                <td>{club.mobileno}</td>
                                                <td>240</td>
                                                <td>200</td>
                                                <td>
                                                    <i class="fa fa-edit" onClick={()=>this.onEdit(club)}></i>
                                                    <i class="fa fa-trash" onClick={()=>this.onDelete(club.id)}></i>
                                                </td>
                                                </tr>
                                            })}
                                            
                                              $('document').ready(function() {
$('#updateModal').modal('hide');
    })
                                            
                                            */
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../commons/Footer";
import Header from "../commons/Header";
import {
  setdata,
  adduser,
  getuser,
  deleteuser,getclubinfo,updateclub,
} from "../redux/actions/ClubsActions";
import {checkUserNameExist,resetvalidatedata} from "../redux/actions/ValidateActions"
import {validate_Form}  from '../../utils/Validation'
export class Clubs extends Component {
  constructor(props) {
    super(props);
    this.props.resetvalidatedata();
    this.state = {
      club_list: [],
      getclubinfo:[]
      
      
    };
  }

  render() {
    console.log(this.props,"::::::")
   console.log(getclubinfo,"123") 
   var getclubinfo=this.props.getclubinfo()
    var {
      name,
      username,
      email,
      mobile,
      submit_success,
      is_create,
      club_type,
      club_list,
      clublocation,
      clubname,
      superAdminId,club_details,
      editname,
      editusername,
      editemail,
      editmobile,
      editclub_type,username_validate_msg,
    } = this.props;

    
    console.log("club_details",  this.props.club_details)
    return (
      <div>
        <div class="container-fluid">
          {/* <!-- Begin page --> */}
          <div id="layout-wrapper">
            <Header />
            <div class="vertical-menu">
              <div class="h-100">
                <div class="user-wid text-center py-4">
                  <div class="user-img">
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      alt=""
                      class="avatar-md mx-auto rounded-circle"
                    />
                  </div>

                  <div class="mt-3">
                    <a
                      href="#"
                      class="text-dark font-weight-medium font-size-16"
                    >
                      Patrick Becker
                    </a>
                    <p class="text-body mt-1 mb-0 font-size-13">
                      UI/UX Designer
                    </p>
                  </div>
                </div>

                {/* <!--- Sidemenu --> */}
                <div id="sidebar-menu">
                  {/* <!-- Left Menu Start --> */}
                  <ul class="metismenu list-unstyled" id="side-menu">
                    <li class="menu-title">Menu</li>

                    <li>
                      <a href="/dashboard" class=" waves-effect">
                        <i class="mdi mdi-calendar-text"></i>
                        <span>Dashboard</span>
                      </a>
                    </li>

                    <li>
                      <a href="/clubs" class=" waves-effect">
                        <i class="mdi mdi-calendar-text"></i>
                        <span>Clubs</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Sidebar --> */}
              </div>
            </div>
            {/* <!-- Left Sidebar End --> */}

            {/* <!-- ============================================================== --> */}
            {/* <!-- Start right Content here --> */}
            {/* <!-- ============================================================== --> */}
            <div class="main-content">
              <div class="page-content">
                {/* <!-- start page title --> */}
                <div class="row">
                  <div class="col-12">
                    <div class="page-title-box d-flex align-items-center justify-content-between">
                      <h4 class="page-title mb-0 font-size-18">Clubs</h4>

                      <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                          <li class="breadcrumb-item active">
                            Welcome to ClubRummy
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end page title --> */}

                <div class="row">
                  <div class="col-12">
                    <div class="card box-big-shadow">
                      <h4 class="card-header mt-0">Add New Player</h4>
                      <div class="card-body">
                        <form class="repeater" enctype="multipart/form-data">
                          <div data-repeater-list="group-a">
                            <div data-repeater-item class="row">
                              <div class="form-group col-lg-2">
                                <label for="name">Name</label>
                                <input
                                  type="text"
                                  value={name}
                                  ref="name"
                                  id="name"
                                  name="name"
                                  class="form-control"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>

                              <div class="form-group col-lg-2">
                                <label for="email">Email</label>
                                <input
                                  type="email"
                                  value={email}
                                  id="email"
                                  ref="email"
                                  name="email"
                                  class="form-control"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>

                              <div class="form-group col-lg-2">
                                <label for="subject">Mobile</label>
                                <input
                                  type="text"
                                  value={mobile}
                                  id="mobile"
                                  ref="mobile"
                                  name="mobile"
                                  class="form-control"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                              <div class="form-group col-lg-2">
                                <label for="subject">Username</label>
                                <input
                                  type="text"
                                  value={username}
                                  id="username"
                                  ref="username"
                                  class="form-control"
                                  name="username"
                                  onChange={this.handleChange}
                                  required
                                />
                         <p className="text-primary">{username_validate_msg}</p>

                              </div>
                              <div class="form-group col-lg-2">
                                <label for="subject">Club-Types</label>
                                <select
                                  className="form-control"
                                  name="club_type"
                                  ref="club_type"
                                   value={club_type}  onChange={
                                    this.handleChange
                                  }
                                  required
                                >
                                  <option>Clubtypes</option>
                                  <option value="0">Bronze</option>
                                  <option value="1">Silver</option>
                                  <option value="2">Gold</option>
                                  <option value="3">Diamond</option>
                                  <option value="4">Platinum</option>
                                </select>
                              </div>
                              <div class="col-lg-2 align-self-center">
                                <input
                                  data-repeater-create
                                  type="button"
                                  class="btn btn-primary btn-block"
                                  value="Create"
                                  ref="Create"
                                  onClick={() => {
                                    this.createClub();
                                  }}
                                ></input>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end row --> */}

                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-title mb-4">Club Players</h4>

                        <table
                          id="datatable"
                          class="table table-bordered dt-responsive nowrap"
                          style={{
                            borderCollapse: "collapse",
                            borderSpacing: "0",
                            width: "100%",
                          }}
                        >
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>Name</th>
                              <th>Date</th>
                              <th>Mobile</th>
                              <th>Email</th>
                              <th>Username</th>
                              <th>Play Chips</th>
                              <th>Real Chips</th>
                              <th>Actions</th>
                            </tr>
                          </thead>

                          <tbody>
                            {club_list.length > 0 ? (
                              club_list.map((club, index) => {
                                // console.log(club._id);
                                // console.log(club.mobileno)
                                return (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    {/* <td>{ club._id }</td> */}
                                    <td>{club.clubname}</td>
                                    <td>08/02/2020</td>
                                    <td>{club.mobileno}</td>
                                    <td>{club.email}</td>
                                    <td>{club.username}</td>
                                    <td>240</td>
                                    <td>200</td>
                                    <td>
                                     <i
                                        class="fa fa-edit" data-toggle="modal" data-target="#myModal"
                                        onClick={() => this.onEdit(club._id)}
                                      ></i>
                                      <i
                                        class="fa fa-trash"
                                        onClick={() => this.onDelete(club._id)}
                                      ></i>
                                    </td>
                                  </tr>
                                );
                              })
                            ) : (
                              <tr>
                                <td colSpan="5">Loading...</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}
              </div>
              <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog" id="updateModal">
    <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          {/* <h4 class="modal-title">Update Club</h4> */}
        </div>
        <div class="modal-body">


        <div>
                 
                 <div class="row">
                   <div class="col-12">
                     <div class="card box-big-shadow">
                       <h4 class="card-header mt-0">Update Player</h4>
                       <div class="card-body">
                         <form class="repeater" enctype="multipart/form-data">
                           <div data-repeater-list="group-a">
                             <div data-repeater-item class="row">
                               <div class="form-group col-lg-8">
                                 <label for="name">Name</label>
                                 <input
                                   type="text"
                                   value={editname}
                                   ref="name"
                                   id="name"
                                   name="editname"
                                   class="form-control"
                                   onChange={this.updatehandleChange}
                                   required
                                 />
                               </div>
 
                               <div class="form-group col-lg-4">
                                 <label for="email">Email</label>
                                 <input
                                   type="email"
                                   value={editemail}
                                   id="email"
                                   ref="email"
                                   name="editemail"
                                   class="form-control"
                                   onChange={this.updatehandleChange}
                                   required
                                 />
                               </div>
 
                               <div class="form-group col-lg-4">
                                 <label for="subject">Mobile</label>
                                 <input
                                   type="text"
                                   value={editmobile}
                                   id="mobile"
                                   ref="mobile"
                                   name="editmobile"
                                   class="form-control"
                                   onChange={this.updatehandleChange}
                                   required
                                 />
                               </div>
                               <div class="form-group col-lg-4">
                                 <label for="subject">Username</label>
                                 <input
                                   type="text"
                                   value={editusername}
                                   id="username"
                                   ref="username"
                                   class="form-control"
                                   name="editusername"
                                   onChange={this.updatehandleChange}
                                   required
                                 />
                               </div>
                               <div class="form-group col-lg-4">
                                 <label for="subject">Club-Types</label>
                                 <select
                                   className="form-control"
                                   name="editclub_type"
                                   ref="club_type"
                                   value={editclub_type}
                                   onChange={this.updatehandleChange}
                                   required
                                 >
                                   <option>Clubtypes</option>
                                   <option value="0">Bronze</option>
                                   <option value="1">Silver</option>
                                   <option value="2">Gold</option>
                                   <option value="3">Diamond</option>
                                   <option value="4">Platinum</option>
                                 </select>
                               </div>
                               <div class="col-lg-3 align-self-center">
                                 <input
                                   data-repeater-create
                                   type="button"
                                   class="btn btn-primary btn-block"
                                   value="Update"
                                   ref="Create"
                                   onClick={() => {
                                    this.updateClub(this.props.club_details._id);
                                   }}
                                 ></input>
                               </div>
                             </div>
                           </div>
                         </form>
                       </div>
                     </div>
                   </div>
                 </div>
                 </div>

        </div>
        {/* <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" style={{backgroundColor:"Highlight"}} onClick={()=>this.updateClub(club_list._id)}>Submit</button>
        </div> */}
      </div>
      
    </div>
  </div>
              {/* <!-- End Page-content --> */}
              <Footer />
            </div>
            {/* <!-- end main content--> */}
          </div>
          {/* <!-- END layout-wrapper --> */}
        </div>
      </div>
    );
    // <div class="rightbar-overlay"></div>
  }
  updateClub=(club)=>{
    console.log(club,"lll")
    const {
      id,
      editname,
      username,
      editmobile,
      editemail,
      editclub_type,
      clublocation,
      password,
      superAdminId,
    } = this.props;
    console.log(data);
    var data = {
      _id:id,
      clubname: editname,
      clubtype: editclub_type,
      clublocation: "hyd",
      mobileno: editmobile,
      email: editemail,
      // username: username,
      // password: "123456",
      // superAdminId: "123",
    };
    this.props.updateclub(data);
    this.props.getuser(data)
  

  }
  handleChange = (e) => {
    console.log(e.target.value,"e.target.value")
    var data = { name: e.target.name, value: e.target.value };
    if (e.target.name == "name") {
      this.props.setdata(data);
    } else if (e.target.name == "email") {
      this.props.setdata(data);
    } else if (e.target.name == "mobile") {
      this.props.setdata(data);
    } else if (e.target.name == "club_type") {
      this.props.setdata(data);
    } else if (e.target.name == "username") {
      this.props.setdata(data);
      console.log('darta:477',data);
      this.props.checkUserNameExist(data.value);
    }
  };
  updatehandleChange = (e) => {
    console.log(e.target.value,"e.target.value")
    var data = { name: e.target.name, value: e.target.value };
    if (e.target.name == "editname") {
      this.props.setdata(data);
    } else if (e.target.name == "editemail") {
      this.props.setdata(data);
    } else if (e.target.name == "editmobile") {
      this.props.setdata(data);
    } else if (e.target.name == "editclub_type") {
      this.props.setdata(data);
    } else if (e.target.name == "editusername") {
      this.props.setdata(data);
    }
  };
  componentDidMount() {
    this.props.updateclub()
     this.props.getuser();
     

    
  }

// componentWillReceiveProps(nextProps){
//   console.log(nextProips)
// }

  componentDidUpdate(prevProps, prevState) {
    // check whether client has
    const { submit_success, is_create, club_list } = this.props;
  }
  onDelete(_id) {
    console.log(_id)
    this.props.deleteuser({id:_id});
    this.props.getuser(_id)
  }
  onEdit(_id) {
    console.log(_id)
    // this.props.deleteuser({id:_id});
    this.props.getclubinfo({id:_id})
  }
  createClub() {
    const {
      name,
      username,
      mobile,
      email,
      club_type,
      clublocation,
      password,
      superAdminId,
    } = this.props;
    console.log(data);
    /* var errormsg = validate_Form(this.props);
        if (errormsg) {
            this.props.validateform(errormsg);
            return false;
        } */
    var data = {
      clubname: name,
      clubtype: club_type,
      clublocation: "hyd",
      mobileno: mobile,
      email: email,
      username: username,
      password: "123456",
      // superAdminId: "123",
    };
    this.props.adduser(data);
    this.props.getuser(data);
    console.log(this.props.getclubinfo(data),"getClubInfo");
    console.log(getclubinfo)


  }
}
const mapStateToProps = (state) => {
  const {
    id,
    name,
    username,
    email,
    mobile,
    club_type,
    error,
    clublocation,
    clubname,
    superAdminId,
    popup_msg,
    loading,
    submit_success,
    is_create,
    item_deleted,
    club_list,club_details,
    editusername,editname,editmobile,editclub_type,editemail
  } = state.clubs;
  const {  username_validate_msg } = state.validate;
  console.log("club_details", loading)
  console.log(username_validate_msg)
  return {
    id,
    name,
    username,
    email,
    mobile,
    club_type,
    error,
    clublocation,
    clubname,
    superAdminId,
    popup_msg,
    loading,
    submit_success,
    is_create,
    item_deleted,
    editusername,editname,editmobile,editclub_type,editemail,
    club_list,club_details,username_validate_msg,checkUserNameExist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setdata: (input) => {
      dispatch(setdata(input));
    },
    adduser: (input) => {
      dispatch(adduser(input));
    },
    getuser: (input) => {
      dispatch(getuser(input));
    },
    deleteuser: (input) => {
      dispatch(deleteuser(input));
    },
     getclubinfo: (input) =>{
      dispatch(getclubinfo(input));
    } ,
    updateclub: (input) =>{
      dispatch(updateclub(input));
    } ,
    checkUserNameExist: (input) =>{
      dispatch(checkUserNameExist(input));
    },resetvalidatedata: () => {
      dispatch(resetvalidatedata());
  }, 
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Clubs);

/* 
                                            {this.props.club_list.map((club)=>{
                                                console.log(club_list);
                                                // console.log(club);
                                                console.log(club.mobileno);
                                                <tr key={club._id}>
                                                <td>{club.clubname}hii</td>
                                                <td>08/02/2020</td>
                                                <td>{club.email}</td>
                                                <td>{club.username}</td>
                                                <td>{club.mobileno}</td>
                                                <td>240</td>
                                                <td>200</td>
                                                <td>
                                                    <i class="fa fa-edit" onClick={()=>this.onEdit(club)}></i>
                                                    <i class="fa fa-trash" onClick={()=>this.onDelete(club.id)}></i>
                                                </td>
                                                </tr>
                                            })}
                                            
                                              $('document').ready(function() {
$('#updateModal').modal('hide');
    })
                                            
                                            */
>>>>>>> 03ffa5a12daf10079fd3ff5076f21db4c34fe44e
