import React from 'react';
import user from '../assets/img/user1-128x128.jpg'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <h3>E-Plan</h3>
      </div>
      <div className="nav-user">
        <div class="user-img">
          <img src={user} alt="" />
        </div>
        <span>Query</span>
      </div>
    </nav>
  )
}

export default Navbar