import React, { Component } from "react";
import Header from "../commons/Header";
import Sidebar from "../commons/Sidebar";
import Footer from "../commons/Footer";
import { connect } from "react-redux";
export class Table extends Component {
  constructor(props){
    super(props)
    this.state={
      user_list:[]
    }
  }
  render() {
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
                <Sidebar />
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
                      <h4 class="page-title mb-0 font-size-18">
                        Table Players
                      </h4>

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
                      <h4 class="card-header mt-0">Create Game </h4>
                      <div class="card-body">
                        <form class="repeater" enctype="multipart/form-data">
                          <div data-repeater-list="group-a">
                            <div data-repeater-item class="row">
                            <div class="form-group col-sm-1">
                                <label for="subject">Table No</label>
                                <input
                                  type="text"
                                  //   value={tableno}
                                  id="tableno"
                                  ref="tableno"
                                  name="tableno"
                                  class="form-control"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                              <div class="form-group col-lg-2">
                                <label for="tablename">Table Name</label>
                                <input
                                  type="text"
                                  //   value={tablename}
                                  ref="tablename"
                                  id="tablename"
                                  name="tablename"
                                  class="form-control"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                              <div class="form-group col-lg-2">
                                <label for="email">Pools</label>

                                <select
                                  className="form-control"
                                  name="pools"
                                  ref="pools"
                                  /*  value={pools}  */ onChange={this.handleChange}>
                                  <option>Pool type</option>
                                  <option value="0">201</option>
                                  <option value="1">301</option>
                                </select>
                              </div>
                              <div class="form-group col-lg-2">
                                <label for="subject">Bet</label>
                                <input
                                  type="text"
                                  //   value={bet}
                                  id="bet"
                                  ref="bet"
                                  class="form-control"
                                  name="bet"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                            
                              <div class="form-group col-lg-2">
                                <label for="subject">Capacity</label>
                                <select
                                  className="form-control"
                                  name="capacity"
                                  ref="capacity"
                                  /*  value={capacity}  */ onChange={this.handleChange}>
                                  <option>Capacity</option>
                                  <option value="0">2</option>
                                  <option value="1">6</option>
                                </select>
                              </div>
                              <div class="form-group col-lg-2">
                                <label for="subject">Game-Types</label>
                                <select
                                  className="form-control"
                                  name="game_type"
                                  ref="game_type"
                                  /*  value={club_type}  */ onChange={
                                    this.handleChange
                                  }
                                >
                                  <option>Game type</option>
                                  <option value="0">Point Rummy</option>
                                  <option value="1">Pool Rummy</option>
                                  <option value="2">Deal Rummy</option>
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
                                    this.createTable();
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
                        <h4 class="card-title mb-4">Tables List</h4>

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
                                    <td>{ user._id }</td>
                                    <td>{user.firstname}{user.lastname}</td>
                                    <td>08/02/2020</td>
                                    <td>{user.mobileno}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>240</td>
                                    <td>200</td>
                                    <td>
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
              {/* <!-- End Page-content --> */}
              <Footer />
            </div>
            {/* <!-- end main content--> */}
          </div>
          {/* <!-- END layout-wrapper --> */}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Table);
