import React from "react";
import { Link } from "react-router-dom";
import Footer from "../commons/Footer";
import { URL } from "../../components/helpers/Constants";
import Header from "../commons/Header";
function Dashboard() {
  return (
    <div>
      <div class="container-fluid">
        {/*       <!-- Begin page --> */}
        <div id="layout-wrapper">
          <Header /> {/* <!-- ========== Left Sidebar Start ========== --> */}
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
                  <a href="#" class="text-dark font-weight-medium font-size-16">
                    Patrick Becker
                  </a>
                  <p class="text-body mt-1 mb-0 font-size-13">UI/UX Designer</p>
                </div>
              </div>

              {/*  <!--- Sidemenu --> */}
              <div id="sidebar-menu">
                {/*     <!-- Left Menu Start --> */}
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
                      {/* <Link to={URL.NAV_CLUBS}> */}
                      {/*  {" "} */}
                      <span>Clubs</span>
                      {/* </Link> */}
                    </a>
                  </li>

                  {/*  <li>
                    <a href="/clubmembers" class=" waves-effect">
                      <i class="mdi mdi-calendar-text"></i>
                      <Link to={URL.NAV_USERS}>
                      <span>Club Members</span>
                      </Link>
                    </a>
                  </li> */}

                  {/*  <li>
                    <a
                      href="javascript: void(0);"
                      class="has-arrow waves-effect"
                    >
                      <i class="mdi mdi-file-tree"></i>
                      <span>Multi Level</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                      <li>
                        <a href="javascript: void(0);">Level 1.1</a>
                      </li>
                      <li>
                        <a href="javascript: void(0);" class="has-arrow">
                          Level 1.2
                        </a>
                        <ul class="sub-menu" aria-expanded="true">
                          <li>
                            <a href="javascript: void(0);">Level 2.1</a>
                          </li>
                          <li>
                            <a href="javascript: void(0);">Level 2.2</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
              {/*    <!-- Sidebar --> */}
            </div>
          </div>
          {/* <!-- Left Sidebar End -->

            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== --> */}
          <div class="main-content">
            <div class="page-content">
              {/*   <!-- start page title --> */}
              <div class="row">
                <div class="col-12">
                  <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="page-title mb-0 font-size-18">Dashboard</h4>

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
              {/*  <!-- end page title --> */}

              <div class="row">
                <div class="col-xl-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <div class="avatar-sm font-size-20 mr-3">
                          <span class="avatar-title bg-soft-primary text-primary rounded">
                            <i class="mdi mdi-account-multiple-outline"></i>
                          </span>
                        </div>
                        <div class="media-body">
                          <div class="font-size-16 mt-2">Total Users</div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-7">
                          <h4 class="mt-4">2,456</h4>
                        </div>
                        <div class="col-5">
                          <p class="mb-0 pt-3">
                            <span class="text-success mr-2">
                              {" "}
                              0.16% <i class="mdi mdi-arrow-up"></i>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <div class="avatar-sm font-size-20 mr-3">
                          <span class="avatar-title bg-soft-primary text-primary rounded">
                            <i class="mdi mdi-account-multiple-outline"></i>
                          </span>
                        </div>
                        <div class="media-body">
                          <div class="font-size-16 mt-2">Games Played</div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-7">
                          <h4 class="mt-4">2,456</h4>
                        </div>
                        <div class="col-5">
                          <p class="mb-0 pt-3">
                            <span class="text-success mr-2">
                              {" "}
                              0.16% <i class="mdi mdi-arrow-up"></i>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <div class="avatar-sm font-size-20 mr-3">
                          <span class="avatar-title bg-soft-primary text-primary rounded">
                            <i class="mdi mdi-account-multiple-outline"></i>
                          </span>
                        </div>
                        <div class="media-body">
                          <div class="font-size-16 mt-2">Today Games</div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-7">
                          <h4 class="mt-4">2,456</h4>
                        </div>
                        <div class="col-5">
                          <p class="mb-0 pt-3">
                            <span class="text-success mr-2">
                              {" "}
                              0.16% <i class="mdi mdi-arrow-up"></i>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <div class="avatar-sm font-size-20 mr-3">
                          <span class="avatar-title bg-soft-primary text-primary rounded">
                            <i class="mdi mdi-account-multiple-outline"></i>
                          </span>
                        </div>
                        <div class="media-body">
                          <div class="font-size-16 mt-2">Chips Purchaced</div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-7">
                          <h4 class="mt-4">2,456</h4>
                        </div>
                        <div class="col-5">
                          <p class="mb-0 pt-3">
                            <span class="text-success mr-2">
                              {" "}
                              0.16% <i class="mdi mdi-arrow-up"></i>{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-6">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title mb-4">Users Report</h4>

                      <div id="line-chart" class="apex-charts"></div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3">
                  <div class="card bg-primary">
                    <div class="card-body">
                      <div class="text-white-50">
                        <h5 class="text-white">2400 + New Clubs</h5>
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus
                        </p>
                        <div>
                          <a href="#" class="btn btn-outline-light btn-sm">
                            View more
                          </a>
                        </div>
                      </div>
                      <div class="row justify-content-end">
                        <div class="col-8">
                          <div class="mt-4">
                            <img
                              src="assets/images/widget-img.png"
                              alt=""
                              class="img-fluid mx-auto d-block"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="card bg-secondary">
                    <div class="card-body">
                      <div class="text-white-50">
                        <h5 class="text-white">2400 + New Users</h5>
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus
                        </p>
                        <div>
                          <a href="#" class="btn btn-outline-light btn-sm">
                            View more
                          </a>
                        </div>
                      </div>
                      <div class="row justify-content-end">
                        <div class="col-8">
                          <div class="mt-4">
                            <img
                              src="assets/images/widget-img.png"
                              alt=""
                              class="img-fluid mx-auto d-block"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*    <!-- end row --> */}

              <div class="row">
                <div class="col-lg-12">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title mb-4">Recent Games</h4>

                      <div class="table-responsive">
                        <table class="table table-centered">
                          <thead>
                            <tr>
                              <th scope="col">Date</th>
                              <th scope="col">Id no.</th>
                              <th scope="col">Billing Name</th>
                              <th scope="col">Amount</th>
                              <th scope="col" colspan="2">
                                Payment Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>15/01/2020</td>
                              <td>
                                <a
                                  href="#"
                                  class="text-body font-weight-medium"
                                >
                                  #SK1235
                                </a>
                              </td>
                              <td>Werner Berlin</td>
                              <td>$ 125</td>
                              <td>
                                <span class="badge badge-soft-success font-size-12">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <a href="#" class="btn btn-primary btn-sm">
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>16/01/2020</td>
                              <td>
                                <a
                                  href="#"
                                  class="text-body font-weight-medium"
                                >
                                  #SK1236
                                </a>
                              </td>
                              <td>Robert Jordan</td>
                              <td>$ 118</td>
                              <td>
                                <span class="badge badge-soft-danger font-size-12">
                                  Chargeback
                                </span>
                              </td>
                              <td>
                                <a href="#" class="btn btn-primary btn-sm">
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>17/01/2020</td>
                              <td>
                                <a
                                  href="#"
                                  class="text-body font-weight-medium"
                                >
                                  #SK1237
                                </a>
                              </td>
                              <td>Daniel Finch</td>
                              <td>$ 115</td>
                              <td>
                                <span class="badge badge-soft-success font-size-12">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <a href="#" class="btn btn-primary btn-sm">
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>18/01/2020</td>
                              <td>
                                <a
                                  href="#"
                                  class="text-body font-weight-medium"
                                >
                                  #SK1238
                                </a>
                              </td>
                              <td>James Hawkins</td>
                              <td>$ 121</td>
                              <td>
                                <span class="badge badge-soft-warning font-size-12">
                                  Refund
                                </span>
                              </td>
                              <td>
                                <a href="#" class="btn btn-primary btn-sm">
                                  View
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div class="mt-3">
                        <ul class="pagination pagination-rounded justify-content-center mb-0">
                          <li class="page-item">
                            <a class="page-link" href="#">
                              Previous
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li class="page-item active">
                            <a class="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  <!-- end row --> */}
            </div>
            {/* <!-- End Page-content --> */}

            <Footer />
          </div>
          {/* <!-- end main content--> */}
        </div>
        {/*  <!-- END layout-wrapper --> */}
      </div>
      {/*   <!-- end container-fluid -->

    <!-- Right Sidebar -->
    
    <!-- /Right-bar -->

    <!-- Right bar overlay--> */}
      <div class="rightbar-overlay"></div>
    </div>
  );
}
// console.log()
export default Dashboard;
