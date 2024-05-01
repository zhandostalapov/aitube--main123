import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HomeBanner = () => {
  return (
    <header className="page-header home-header">
      <div className="container">
        <div className="banner-content">
          <h2 className="title">Unlimited {<span>Movie</span>} , TVs Shows, & More.</h2>
          <a href="https://youtu.be/yqjPI_m1ulA">
          <Link className="btn" to='/#Movies'>
            <i className="ri-arrow-right-line"></i>
            Watch a thriller
          </Link>
          </a>
        </div>
      </div>
    </header>
  )
}

export default HomeBanner;