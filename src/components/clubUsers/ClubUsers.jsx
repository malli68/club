import React, { Component } from "react";
import Footer from "../commons/Footer";
import { Link } from "react-router-dom";
import { URL } from "../../components/helpers/Constants";
import Header from "../commons/Header";
export class ClubUsers extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          {/*     <!-- Begin page --> */}
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
                  {/*  <!-- Left Menu Start --> */}
                  <ul class="metismenu list-unstyled" id="side-menu">
                    <li class="menu-title">Menu</li>

                    <li>
                      <a /* href="index.html"  */ class=" waves-effect">
                        <i class="mdi mdi-calendar-text"></i>
                        <Link to={URL.NAV_HOME}>
                          <span>Dashboard</span>
                        </Link>
                      </a>
                    </li>

                    <li>
                      <a /* href="inde.html"  */ class=" waves-effect">
                        <i class="mdi mdi-calendar-text"></i>
                        <Link to={URL.NAV_CLUBS}>
                          {" "}
                          <span>Clubs</span>
                        </Link>
                      </a>
                    </li>

                    <li>
                      <a /* href="inde.html" */ class=" waves-effect">
                        <i class="mdi mdi-calendar-text"></i>
                        <Link to={URL.NAV_USERS}>
                          {" "}
                          <span>Club Users</span>
                        </Link>
                      </a>
                    </li>

                    <li>
                      <a
                        href="javascript: void(0);"
                        class="has-arrow waves-effect"
                      >
                        <i class="mdi mdi-file-tree"></i>
                        <span>Cash Games</span>
                      </a>
                      <ul class="sub-menu" aria-expanded="true">
                        <li>
                          <a href="javascript: void(0);">Point Rummy</a>
                        </li>
                        <li>
                          <a href="javascript: void(0);">Pool Rummy</a>
                        </li>
                        <li>
                          <a href="javascript: void(0);">Deal Rummy</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="inde.html" class=" waves-effect">
                        <i class="mdi mdi-calendar-text"></i>
                        <span>Table Rummy</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Sidebar --> */}
              </div>
            </div>
            {/* <!-- Left Sidebar End -->

            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== --> */}
            <div class="main-content">
              <div class="page-content">
                {/* <!-- start page title --> */}
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

                {/*  <!-- end col --> */}
              </div>
              {/*  <!-- end row --> */}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClubUsers;
