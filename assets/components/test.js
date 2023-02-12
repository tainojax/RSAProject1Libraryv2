class books extends HTMLElement {

    constructor() {

        super();

        const shadow = this.attachShadow({ mode: 'open' });        
        const div = document.createElement('div');
        div.innerHTML = `

        <style>
        .booklisting_information_container {
          position: relative;
          display: grid;
          grid-template-columns: 100px 300px 250px 160px 150px 200px;
          grid-auto-flow: column;
          /*
          display: flex;
          justify-content: space-evenly;
          */
          box-sizing: border-box;
          width: 90%; /*1340px; */
          height: 7rem;
          padding: 5px;
          padding-left: 80px;
          margin-left: 50px;
          margin-bottom: 36px;
          background: #ffffff;
          border: 1px solid #457b9d;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 15px;
        }
  
        .booklisting_information_detail {
          margin-top: 15px;
          padding-left: 1px;
        }
  
        .booklisting_information_detail img {
          width: 60px;
          width: 60px;
        }
        .booklisting_information_container h1 {
          font-family: "Montserrat";
          font-style: normal;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 20px;
          line-height: 10px;
          color: #1a1a1a;
          padding-top: 10px;
        }
  
        .booklisting_information_container h2 {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 300;
          font-size: 18px;
          line-height: 22px;
          line-height: 6px;
          color: #1a1a1a;
        }
  
        .booklisting_information_container i {
          font-size: 14px;
          color: #ffac33;
        }
  
        .button_basics {
          box-shadow: 2px 2px 5px #333; /* horizontal offset, vertical offset, blur radius, color */
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
        .register_button {
          margin-right: 20px;
          width: 175px;
          height: 35px;
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
        }
  
        .booklisting_button {
          margin-top: 35px;
        }

        .rating {
          width: 20px;
          height: 20px;
          fill: #ffac33;
          z-index: 1000;
        }
        
  
      </style>

        
        <div class="booklisting_information_container">

        <div class="booklisting_information_detail">
        
        <img src="./assets/img/BookListing-dontMakeMeTthink.png" alt="Cover of book" />
        <!--- 
        <slot name="imageFileName"
                  ><img
            src="./assets/img/BookListing-dontMakeMeTthink.png"
            alt="Cover of book"
        /></slot> 
        --->
      </div>
        
        <div class="booklisting_information_detail">
          <h1>Title:</h1>
          <h2><slot name="title">Lorem ipsum</slot></h2>
          <!--- <h2>Lorem ipsum dolor sit amet consectetur.</h2> --->
        </div>
        <div class="booklisting_information_detail">
          <h1>authors:</h1>
          <h2><slot name="authors">Lorem ipsum</slot></h2>
          <!--- <h2>Lorem ipsum</h2> --->
        </div>
        <div class="booklisting_information_detail">
          <h1>available:</h1>
          <h2 class="align-right">QTY: <slot name="quantity">0</slot></h2>
          <!--- <h2 class="align-right">QTY: 7</h2> --->
        </div>
        <div class="booklisting_information_detail">
          <h1>ratings:</h1>
          <h2 class="align-right"><slot name="rating">0</slot>
          
          <svg class="rating" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
          </svg>
          </h2> 
          <!--- <h2 class="align-right">4.8 <i class="fa-solid fa-star"></i></h2> --->
        </div>
        <div class="account_book_information_detail">
          <button
            class="button_basics red_button register_button booklisting_button"
          >
            checkout
          </button>
        </div>
      </div>
        `    
       ;
        shadow.appendChild(div);
    }

}

customElements.define('book-one', books);