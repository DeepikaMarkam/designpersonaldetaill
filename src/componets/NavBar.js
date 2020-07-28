import React, { Component } from 'react'

    class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand text-white text-uppercase" href="#">Search Us</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
     </button>
  <div className="collapse navbar-collapse" id="navbarNav" >
       <ul className="navbar-nav ">
             <li className="nav-item active">
              <a className="nav-link text-white text-uppercase ml-10" href="#">ABOUT US <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
             <a className="nav-link text-white text-uppercase ml-10" href="#">CONTACT US</a>
            </li>

         </ul>
         </div>

         <ul class="nav navbar-nav navbar-right">
      <li className="nav-item navbar-right ">
            <button type="button" class="btn btn-light btn-lg btn-right"  >Logout</button>
            </li>
            </ul>

    
  
</nav>
        )
    }
}
export default NavBar;
