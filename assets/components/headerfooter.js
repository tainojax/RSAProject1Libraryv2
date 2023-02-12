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
      @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Ew-.ttf)
          format("truetype");
      }

      @font-face {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf)
          format("truetype");
      }

      @font-face {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf)
          format("truetype");
      }
      html,
      body {
        margin: 0;
        height: 100%;
        min-width: 100px;
      }

      * {
        box-sizing: border-box;
      }

      .container {
        margin: 0 auto;
      }

      .shortMenuBar {
        display: none;
      }

      .navbar_menu {
        display: none;
      }

      .navbar_secondary {
        display: none;
      }

      .svg-down-arrow {
        position: relative;
        top: 4px;
        left: -10px;
        width: 20px;
        height: 20px;
        fill: black;
        z-index: 1000;
      }

      .navbar {
        padding: 0px;
        background: #457b9d;
        height: auto !important;
      }

      .navbar_logo img {
        position: relative;
        width: 128px;
        height: 58px;
        left: 35px;
        top: 1px;
      }

      .navbar_menu a:hover {
        text-decoration: none;
        color: blue;
      }
      .navbar_menu a {
        margin-top: 3px;
        padding: 5;
        text-decoration: none;
        font-family: "Inter";
        font-style: normal;
      }

      #menu-toggle {
        display: none;
      }

      .search-container {
        position: relative;
        margin-right: 25px;
        /* margin-left: auto; */
      }

      .svg-search {
        width: 20px;
        height: 20px;
        fill: grey;
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
        max-width: 152px;
        height: 28px;
        padding: 2px;
        padding-left: 30px;
        font-weight: 300;
        font-size: 20px;
        color: gray;
        background: #ffffff;
        border-style: none;
      }

      .nav_footer {
        /* width: 1440px; */
        position: relative;
        margin-top: auto;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 50px;
        display: flex;
        justify-content: center; /* center the items horizontally */
        align-items: center; /* center the items vertically */
        background: #457b9d;
        font-family: "Montserrat";
        color: #ffffff;
      }

      @media screen and (max-width: 699px) {
        #navbar_logo_full {
          display: none !important;
        }

        .shortMenuBar {
          display: flex;
          position: relative;
          margin-top: auto;
          flex-direction: row;
          column-gap: 0px;
          row-gap: 0px;
          flex-wrap: wrap;
          align-items: center;

          width: 100%;
        }

        .shortMenuBarMenu {
          display: flex;
          align-items: center;
          vertical-align: center;
          justify-content: right;
          margin-left: auto;
        }

        .search-container {
          position: relative;
          margin: 0;
          margin-right: 25px;
          top: -5px;
          width: 152px;
        }

        .search-container input {
          position: relative;
          top: -10px;
          width: 100%;
          height: 28px;
          padding: 2px;
          padding-left: 30px;
          font-weight: 300;
          font-size: 20px;
          color: gray;
          background: #ffffff;
          border-style: none;
        }

        .svg-icons {
          width: 30px;
          height: 30px;
          fill: white;
          padding: 5px;
          margin: 0;
        }

        .navbar_menu {
          display: none !important;
        }

        .navbar_logo img {
          position: relative;
          width: 128px;
          height: 58px;
          left: 5px;
          top: 1px;
        }

        .svg-search {
          width: 20px;
          height: 20px;
          fill: grey;
        }

        .svg-search-container {
          position: relative;
          left: 6px;
          top: 20px;
          width: 20px;
          z-index: 1000;
        }

        .short_navbar_secondary {
          display: flex;
          position: relative;
          margin-top: auto;
          flex-direction: row;
          column-gap: 0px;
          row-gap: 3px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .short_navbar_secondary a {
          padding-left: 10px;
          padding-bottom: 10px;
          text-decoration: none;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          color: white;
        }

        .nav_footer {
          height: 50px;
          width: 100%;
          font-style: normal;
          font-weight: 200;
          font-size: 12px;
          line-height: 20px;
        }
      }

      @media screen and (min-width: 700px) {
        .shortMenuBar {
          display: none !important;
        }

        .short_navbar_secondary {
          display: none !important;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0px;
          background: #457b9d;
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

        .red_button {
          box-shadow: 2px 2px 5px #333;
          border-radius: 25px;
          align-items: center;
          text-align: center;
          border: 0px;
          background-color: #e63946;
          text-transform: uppercase;
          color: #faf9f9;
          font-family: "Inter";
          font-style: normal;
          margin-right: 20px;
          width: 175px;
          height: 35px;
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
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
        .nav_footer {
          height: 116px;
          font-style: normal;
          font-weight: 300;
          font-size: 24px;
          line-height: 29px;
        }
      }

      @media screen and (min-width: 1440px) {
        .container {
          width: 1440px;
        }

        .nav_footer {
          width: 1440px;
        }
      }
      /*
      @media screen and (max-height: 100vh) {
        .container {
          height: 80vh;
        }
      }
      */
    </style>

    <!---
  </head>
  <body>
  --->
    <!--- <div class="container">-->
      <!-- main header and menu -->

      <div class="navbar">
        <div class="shortMenuBar">
          <div class="navbar_logo">
            <img
              src="./assets/img/CTL_LOGO_UPDATED.png"
              alt="Crazy Town Library Logo"
            />
          </div>
          <nav class="shortMenuBarMenu">
            <a href="./index.html" id="home" alt="Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="svg-icons"
              >
                <path
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
            </a>

            <a href="./account.html" id="account" alt="Account">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-icons"
              >
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                />
              </svg>
            </a>

            <div class="search-container">
              <div class="svg-search-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-search"
                >
                  <path
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
                  />
                </svg>
              </div>
              <input class="input-field" type="text" placeholder="Search" />
            </div>
          </nav>
          <nav class="short_navbar_secondary">
            <a href="./about.html">ABOUT</a>
            <a href="./account.html">ACCOUNT</a>
            <a href="#">LOCATION</a>
            <a href="#">EVENTS</a>
          </nav>
        </div>

        <div class="navbar_logo" id="navbar_logo_full">
          <img
            src="./assets/img/CTL_LOGO_UPDATED.png"
            alt="Crazy Town Library Logo"
          />
        </div>
        <nav class="navbar_menu">
          <a href="./index.html">HOME</a>
          <a href="#">SIGN IN</a>
          <button class="red_button">
            <a href="./registration.html"> REGISTER</a>
          </button>

          <div class="search-container">
            <div class="svg-search-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-search"
              >
                <path
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
                />
              </svg>
            </div>
            <input class="input-field" type="text" placeholder="Search" />
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
            <svg
              class="svg-down-arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
              />
            </svg>
          </a>

          <a href="#">EVENTS</a>
          <a href="#">
            <svg
              class="svg-down-arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
              />
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

  <!-- footer section-->
  <footer class="nav_footer">
    COPYRIGHT © 2023 CRAZY TOWN LIBRARY. ALL RIGHTS RESERVED
  </footer>

  <!-- END OF CONTAINER -->
  `
}
}
customElements.define('footer-component', footer);