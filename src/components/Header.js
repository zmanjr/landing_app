import React, { Component } from 'react'
import logo from '.././images/logo.svg';
import Content from './Content';

class Header extends Component {
  render() {
    return (
      
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid aft-nav">
                <div class="brand">
                    <img class="navbar-brand" src={logo} alt="logo_capsul" />
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <a class="nav-link active" href="#"><span class="link-text">VR/RA</span></a>
                  <a class="nav-link" href="#"><span class="link-text">Notre approche</span></a>
                  <a class="nav-link" href="#"><span class="link-text">Notre agence</span></a>
                  <a class="nav-link" href="#"><span class="link-text">Nos solutions</span></a>
                  <a class="nav-link" href="#"><span class="link-text">Contact</span></a>
                </div>
            </div>
        </nav>
        
        
    )
  }
}

export default Header