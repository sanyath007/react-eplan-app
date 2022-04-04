import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import user from '../assets/img/user1-128x128.jpg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-profile">
        <div className="user-img">
          <img src={user} alt="" />
        </div>
        <span>Query</span>
      </div>

      <hr />

      <ul>
        <li>
          <Link to="/">
            <i className="uil uil-home"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/strategics">
            <i className="uil uil-puzzle-piece"></i>
            <span>ยุทธศาสตร์</span>
          </Link>
        </li>
        <li>
          <Link to="/goals">
            <i className="uil uil-bookmark"></i>
            <span>เป้าประสงค์</span>
          </Link>
        </li>
        <li>
          <Link to="/strategies">
            <i className="uil uil-rocket"></i>
            <span>กลยุทธ์</span>            
          </Link>
        </li>
        <li>
          <Link to="/kpis">
            <i className="uil uil-tachometer-fast"></i>
            <span>ตัวชี้วัด</span>            
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <i className="uil uil-apps"></i>
            <span>โครงการ</span>            
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar