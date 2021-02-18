import React, { Component } from 'react'
import { decryptData } from "../helpers/globalHelpers/EncryprDecrypt";
export class Sidebar extends Component {
    render() {
        var user=""
  let isLoggedIn = localStorage.getItem("auth");
  console.log(isLoggedIn,"isLoggedIn")
  // Decrypt.decryptData(isLoggedIn)
  if(isLoggedIn!==null || isLoggedIn!==undefined){
  var decryptedData=decryptData(isLoggedIn);
  user=decryptedData.username;
  }
        return (
            <div>
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

                  {user=="admin"?
                  <li>
                    <a href="/clubs" class=" waves-effect">
                      <i class="mdi mdi-calendar-text"></i>
                      {/* <Link to={URL.NAV_CLUBS}> */}
                      {/*  {" "} */}
                      <span>Clubs</span>
                      {/* </Link> */}
                    </a>
                  </li>
:
                  <span>
                    <li>
                    <a href="/clubPlayers" class=" waves-effect">
                      <i class="mdi mdi-calendar-text"></i>
                      {/* <Link to={URL.NAV_CLUBS}> */}
                      {/*  {" "} */}
                      <span>Club Players</span>
                      {/* </Link> */}
                    </a></li>
                    <li>
                    <a href="/tables" class=" waves-effect">
                      <i class="mdi mdi-calendar-text"></i>
                      {/* <Link to={URL.NAV_CLUBS}> */}
                      {/*  {" "} */}
                      <span>Tables</span>
                      {/* </Link> */}
                    </a>
                  </li>
                  </span>
                  }
                 
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
            </div>
        )
    }
}

export default Sidebar
