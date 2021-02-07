import React, { Component } from "react";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



class NavBar extends Component {
  render() {
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-dark bg-primary mb-4'>
                <div className='container'>
                    <h1>BLOG K</h1>
                    <button className='navbar-toggler' type='button' dara-toggle='collapse' data-target='#navbarMain'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarmain'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item'>
                                <Link to='/login' className='nav-link'>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
}
export default NavBar;