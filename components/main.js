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
      width: 1440px;
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

    .search-container i {
      position: relative;
      left: 30px;
      top: 2px;
      font-size: 20px;
      color: gray;
    }
    .search-container input {
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
    }

    .navbar_secondary_menu a {
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
      color: black;
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
          <!--   https://www.geeksforgeeks.org/how-to-place-font-awesome-icon-to-input-field/?ref=lbp         -->
          <i class="fa fa-search icon"></i>
          <input class="input-field" type="text" />
        </div>
      </nav>
    </div>

    <!-- secondary menu -->
    <div class="navbar_secondary">
      <nav class="navbar_secondary_menu">
        <a href="./about.html">ABOUT</a>
        <a href="./account.html">ACCOUNT</a>
        <!-- https://fontawesome.com/icons/caret-down?s=solid&f=classic -->
        <a href="./location.html">
          LOCATION
          <i class="fa-solid fa-caret-down"></i>
        </a>

        <a href="./events.html"
          >EVENTS
          <i class="fa-solid fa-caret-down"></i>
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
    width: 1440px;
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