import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../commons/Footer";
import Header from "../commons/Header";
import { setdata, adduser, getuser,deleteuser } from "../redux/actions/ClubsActions";
export class Clubs extends Component {
  constructor(props) {
    super(props);
    this.state={
    club_list:[]
}
  
  }

  render() {
    var {
      name,
      username,
      email,
      mobile,
      submit_success,
      is_create,
      club_type,
      club_list,
    } = this.props;

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

                    {/*   <li>
                    <a href="/clubusers" class=" waves-effect">
                        <i class="mdi mdi-calendar-text"></i>
                        <span>Club Users</span>
                    </a>
                </li> */}
                    {/* 
                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="mdi mdi-file-tree"></i>
                        <span>Cash Games</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                        <li><a href="javascript: void(0);">Point Rummy</a></li>
                        <li><a href="javascript: void(0);">Pool Rummy</a></li>
                        <li><a href="javascript: void(0);">Deal Rummy</a></li>
                    </ul>
                </li> */}
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
                                  id="subject"
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
                                  id="subject"
                                  class="form-control"
                                  name="username"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                              <div class="form-group col-lg-2">
                                <label for="subject">Club-Types</label>
                                <select
                                  className="form-control"
                                  name="club_type"
                                  /* value={club_type} */ onChange={
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
                            {/*      <tr>
                                                <td>1</td>
                                                <td>{name}</td>
                                                <td>08/02/2020</td>
                                                <td>{mobile}</td>
                                                <td>{email}</td>
                                                <td>{username}</td>
                                                <td>240</td>
                                                <td>200</td>
                                                <td>
                                                    <i class="fa fa-edit"></i>
                                                    <i class="fa fa-trash"></i>
                                                </td>
                                            </tr> */}
                                          
                            {club_list.length > 0 ? (
                             club_list.map((club, index) => {
                                console.log(club._id)
                                return (
                                  <tr key={index}>
                                    <td>{index +1}</td>
                                    {/* <td>{ club._id }</td> */}
                                    <td>{club.clubname}</td>
                                    <td>08/02/2020</td>
                                    <td>{club.mobileno}</td>
                                    <td>{club.email}</td>
                                    <td>{club.username}</td>
                                    <td>240</td>
                                    <td>200</td>
                                    <td>
                                    <i class="fa fa-edit" onClick={()=>this.onEdit(club)}></i>
                                    <i class="fa fa-trash" onClick={()=>this.onDelete(club._id)}></i>
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
  handleChange = (e) => {
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
    }
  };
  componentDidMount() {
     this.props.getuser();
  
  }

  componentDidUpdate(prevProps, prevState) {
    // check whether client has
    this.props.deleteuser();
    const { submit_success, is_create, club_list } = this.props;
  }
  onDelete(_id){
this.props.deleteuser()
  }
  createClub() {
    const { name, username, mobile, email, club_type } = this.props;
    // const {username,password}=state.auth
    console.log(data);
    var data = {
      clubname: name,
      clubtype: club_type,
      clublocation: "",
      mobileno: mobile,
      email: email,
      username: /* this.state.auth("username") */ "",
      password: /* this.state.auth("password") */ "",
      superAdminId: "",
    };
    this.props.adduser(data);
   // this.props.getuser(data);
  }
}
const mapStateToProps = (state) => {
  const {
    name,
    username,
    email,
    mobile,
    club_type,
    error,
    popup_msg,
    loading,
    submit_success,
    is_create,
    item_deleted,
    club_list,
  } = state.clubs;

  return {
    name,
    username,
    email,
    mobile,
    club_type,
    error,
    popup_msg,
    loading,
    submit_success,
    is_create,
    item_deleted,
    club_list,
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
    deleteuser:(input) =>{
        dispatch(deleteuser(input));
    }
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
                                            })} */
