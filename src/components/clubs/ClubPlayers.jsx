import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../commons/Footer";
import Header from "../commons/Header";
import {
  setdata,
  adduser,
  getuser,
  deleteuser,getuserinfo,updateuser,
} from "../redux/actions/ClubPlayersActions";
import {checkUserNameExist,resetvalidatedata} from "../redux/actions/ValidateActions"
import {validate_Form}  from '../../utils/Validation'
import Sidebar from "../commons/Sidebar";
export class ClubPlayers extends Component {
  constructor(props) {
    super(props);
    this.props.resetvalidatedata();
    this.state = {
      user_list: [],
      
      
    };
  }

  render() {

    var {
      id,
      firstname,
      lastname,
      username,
      email,
      mobileno,
  clubId, 
  error,
  user_list,editusername,editemail,editfirstname,editlastname,editmobileno,username_validate_msg
    } = this.props;

    
    // console.log("club_details",  this.props.club_details)
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
                      <h4 class="page-title mb-0 font-size-18">Club Players</h4>

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
                                <label for="firstname">First Name</label>
                                <input
                                  type="text"
                                  value={firstname}
                                  ref="firstname"
                                  id="firstname"
                                  name="firstname"
                                  class="form-control"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                              <div class="form-group col-lg-2">
                                <label for="lastname">Last Name</label>
                                <input
                                  type="text"
                                  value={lastname}
                                  ref="lastname"
                                  id="lastname"
                                  name="lastname"
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
                                <label for="subject">Mobile</label>
                                <input
                                  type="text"
                                  value={mobileno}
                                  id="mobileno"
                                  ref="mobileno"
                                  name="mobileno"
                                  class="form-control"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                              
                              <div class="col-lg-2 align-self-center">
                                <input
                                  data-repeater-create
                                  type="button"
                                  class="btn btn-primary btn-block"
                                  value="Create"
                                  ref="Create"
                                  onClick={() => {
                                    this.createUser();
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
                        <h4 class="card-title mb-4">Players List</h4>

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

                       {   <tbody>
                            {user_list.length > 0 ? (
                              user_list.map((user, index) => {
                                console.log(user._id);
                                // console.log(club.mobileno)
                                return (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    {/* <td>{ user._id }</td> */}
                                    <td>{user.firstname}{user.lastname}</td>
                                    <td>08/02/2020</td>
                                    <td>{user.mobileno}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>240</td>
                                    <td>200</td>
                                    <td>
                                     <i
                                        class="fa fa-edit" data-toggle="modal" data-target="#myModal"
                                        onClick={() => this.onEdit(user._id)}
                                      ></i>
                                      <i
                                        class="fa fa-trash"
                                        onClick={() => this.onDelete(user._id)}
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
                          </tbody>}
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
                               <div class="form-group col-lg-6">
                                 <label for="firstname">firstname</label>
                                 <input
                                   type="text"
                                   value={editfirstname}
                                   ref="editfirstname"
                                   id="editfirstname"
                                   name="editfirstname"
                                   class="form-control"
                                   onChange={this.updatehandleChange}
                                   required
                                 />
                               </div>
                               <div class="form-group col-lg-6">
                                 <label for="lastname">lastname</label>
                                 <input
                                   type="text"
                                   value={editlastname}
                                   ref="editlastname"
                                   id="editlastname"
                                   name="editlastname"
                                   class="form-control"
                                   onChange={this.updatehandleChange}
                                   required
                                 />
                               </div>
                               <div class="form-group col-lg-12">
                                 <label for="email">Email</label>
                                 <input
                                   type="email"
                                   value={editemail}
                                   id="editemail"
                                   ref="editemail"
                                   name="editemail"
                                   class="form-control"
                                   onChange={this.updatehandleChange}
                                   required
                                 />
                               </div>
 
                               <div class="form-group col-lg-6">
                                 <label for="subject">Mobile</label>
                                 <input
                                   type="text"
                                   value={editmobileno}
                                   id="mobile"
                                   ref="mobile"
                                   name="editmobileno"
                                   class="form-control"
                                   onChange={this.updatehandleChange}
                                   required
                                 />
                               </div>
                               <div class="form-group col-lg-6">
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
                               <div class="col-lg-3 align-self-center" >
                                 <input
                                   data-repeater-create
                                   type="button"
                                   class="btn btn-primary btn-block"
                                   value="Update"
                                   ref="Create"
                                   onClick={() => {
                                    this.updateUser(this.props.user_list._id);
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
////////////////////////

updateUser=(club)=>{
  console.log(club,"lll")
  const {
    id,
    editfirstname,
    editlastname,
    // editusername,
    editmobileno,
    editemail,
    editclub_type,
    clublocation,
    password,
    superAdminId,
  } = this.props;
  console.log(data);
  var data = {
    _id:id,
    firstname: editfirstname,
    lastname: editlastname,
    mobileno: editmobileno,
    email: editemail,
    //  username: editusername,
  
  };
  this.props.updateuser(data);
  this.props.getuser(data)


}

//////////////////////////
  handleChange = (e) => {
    console.log(e.target.value,"e.target.value")
    var data = { name: e.target.name, value: e.target.value };
    if (e.target.name == "firstname") {
      this.props.setdata(data);
    }
    else if (e.target.name == "lastname") {
      this.props.setdata(data);
    } else if (e.target.name == "email") {
      this.props.setdata(data);
    } else if (e.target.name == "mobileno") {
      this.props.setdata(data);
    } 
     else if (e.target.name == "username") {
      this.props.setdata(data);
      // console.log('darta:477',data);
     this.props.checkUserNameExist(data.value);
    
      // console.log("club_details", loading)
      // console.log(username_validate_msg)
    }
  };
  updatehandleChange = (e) => {
    console.log(e.target.value,"e.target.value")
    var data = { name: e.target.name, value: e.target.value };
    if (e.target.name == "editfirstname") {
      this.props.setdata(data);
    } 
    else if (e.target.name == "editlastname") {
      this.props.setdata(data);
    }else if (e.target.name == "editemail") {
      this.props.setdata(data);
    } else if (e.target.name == "editmobileno") {
      this.props.setdata(data);
    } else if (e.target.name == "editusername") {
      this.props.setdata(data);
    }
  };
  componentDidMount() {
     this.props.getuser() 
  }

// componentWillReceiveProps(nextProps){
//   console.log(nextProips)
// }

  componentDidUpdate(prevProps, prevState) {
    // check whether client has
    const { submit_success, is_create, user_list } = this.props;
  }
//////////////////////

onEdit(_id) {
  console.log(_id)
  // this.props.deleteuser({id:_id});
  this.props.getuserinfo({id:_id})
}

/////////////////////
  onDelete(_id) {
    console.log(_id)
    this.props.deleteuser({id:_id});
    this.props.getuser(_id)
  }
  createUser() {
    const {
      firstname,
      lastname,
      username,
      mobileno,
      email,
      password,
      clubId
    } = this.props;
    console.log(data);
    /* var errormsg = validate_Form(this.props);
        if (errormsg) {
            this.props.validateform(errormsg);
            return false;
        } */
    var data = {
      Id:clubId,
      firstname: firstname,
      lastname:lastname,
      mobileno: mobileno,
      email: email,
      username: username,
      password: "123456",
    };
     this.props.adduser(data);
     this.props.getuser(data)

 


  }
}
const mapStateToProps = (state) => {
  const {
    id,
    firstname,
    lastname,
    username,
    email,
    mobileno,
error,
user_list,editusername,editemail,editfirstname,editlastname,editmobileno,checkUserNameExist,
  } = state.users;
  const {  username_validate_msg } = state.validate;
 
  return {
     id,
    firstname,
    lastname,
    username,
    email,
    mobileno,
error,
user_list,editusername,editemail,editfirstname,editlastname,editmobileno,username_validate_msg
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
    updateuser: (input) => {
      dispatch(updateuser(input));
    },
    getuserinfo: (input) =>{
      dispatch(getuserinfo(input));
    } ,
    checkUserNameExist: (input) =>{
      dispatch(checkUserNameExist(input))
    },
    resetvalidatedata: (input)=>{
      dispatch(resetvalidatedata(input))
    }
  };
};
export default  connect(mapStateToProps, mapDispatchToProps)(ClubPlayers);

