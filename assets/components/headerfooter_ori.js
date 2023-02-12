/*
https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

const template = document.createElement('headerTemplate');
headerTemplate.innerHTML = `
  <!--- html code here -->
`;

document.body.appendChild(headerTemplate.content);

https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

*/

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
  
    this.innerHTML = ` 
    
    <style type="text/css">


    body {
      margin: 0px 0px 0px 0px;
    }

    .container {
      /* width: 1440px; */
      overflow: hidden;
      margin: 0 auto;
    }

    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px;
      background-color: #457b9d;
      height: 68px;
      align-items: center;
    }

    .navbar_logo img {
      position: relative;
      width: 128px;
      height: 58px;
      left: 35px;
      top: 1px;
    }

    .navbar_menu {
      display: flex;
      align-items: center;
      vertical-align: center;
    }

    .navbar_menu a {
      margin-top: 3px;
      top: 24px;
      height: 24px;
      margin-right: 15px;
      padding: 0;
      text-decoration: none;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #faf9f9;
    }

    .button_basics {
      box-shadow: 2px 2px 5px #333; 
      border-radius: 25px;
      align-items: center;
      text-align: center;
      border: 0px;
    }

    .red_button {
      background-color: #e63946;
      text-transform: uppercase;
      color: #faf9f9;
      font-family: "Inter";
      font-style: normal;
    }


    .search-container {
      position: relative;
      margin-right: 25px;
    }

    .svg-search {
       width:20px;
       height:20px;
       fill:grey;
      }

    .svg-search-container {
      position: relative;
      left: 6px;
      top: 20px;
      width: 20px;
      z-index: 1000;
    }



    .search-container input {
      position: relative;
      top: -10px;
      width: 152px;
      height: 28px;
      padding: 2px;
      padding-left: 30px;
      font-weight: 300;
      font-size: 20px;
      color: gray;
      background: #ffffff;
      border-style: none;
    }

    .navbar_secondary {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
      background-color: white;
      height: 68px;
      align-items: center;
    }

    .navbar_secondary_menu {
      display: flex;
      align-items: center;
      vertical-align: center;
      margin-top: 3px;
      height: 24px;
      margin-right: 15px;
      padding: 0;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: black;
    }

    .navbar_secondary_menu a {
      text-decoration: none;
    }

    .svg-down-arrow {  
      position: relative;
      top:4px;
      left: -10px;
      width:20px;
      height:20px;
      fill:black;
      z-index: 1000;
    }
    </style>
    
    
    
    <div class="container">
    <!-- main header and menu -->

    <div class="navbar">
      <div class="navbar_logo">
        <img
          src="./assets/img/CTL_LOGO_UPDATED.png"
          alt="Crazy Town Library Logo"
        />
      </div>
      <nav class="navbar_menu">
        <a href="./index.html">HOME</a>
        <a href="#">SIGN IN</a>
        <button class="button_basics register_button red_button">
          <a href="./registration.html"> REGISTER</a>
        </button>
        <div class="search-container">
          <div class="svg-search-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-search"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
          </div>
          <input class="input-field" type="text" />
        </div>
      </nav>
    </div>

    <!-- secondary menu -->
    <div class="navbar_secondary">
      <nav class="navbar_secondary_menu">
        <a href="./about.html">ABOUT</a>
        <a href="./account.html">ACCOUNT</a>
        <a href="#">LOCATION</a>
        <a href="#">
          <svg class="svg-down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
          </svg>
        </a>

        <a href="#">EVENTS</a>
          <a href="#">
            <svg class="svg-down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
            </svg>
          </a>

      </nav>
    </div>
    `
  }
}
customElements.define('header-component', Header);




class footer extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback() {
  this.innerHTML = `
  <style type="text/css">

  .nav_footer {
    /* width: 1440px; */
    overflow: hidden;
    margin: 0 auto;
    margin-top: 50px;
    height: 116px;
    display: flex;
    justify-content: center; /* center the items horizontally */
    align-items: center; /* center the items vertically */
    background-color: #457b9d;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
  }
  </style>
  <!-- footer section-->
  <footer class="nav_footer">
    COPYRIGHT © 2023 CRAZY TOWN LIBRARY. ALL RIGHTS RESERVED
  </footer>

  <!-- END OF CONTAINER -->
  `
}
}
customElements.define('footer-component', footer);