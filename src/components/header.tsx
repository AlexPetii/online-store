import React from "react";

function Header() {
  return (
    <nav>
      <header>
        <a className="mainLink" href="/">
           {/* <svg
          //   xmlns="http://www.w3.org/2000/svg"
          //   aria-label="Acme Store logo"
          //   viewBox="0 0 32 28"
          //   className="logoImg"
          // >
          //   <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
          //   <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
          // </svg> */}
          <div className="logoTxt">ACME STORE</div>
        </a>
        <ul className="categories">
          <a className="all" href="#">
            All
          </a>
          <a href="#" className="shirt">
            Shitr
          </a>
          <a href="#" className="other">
            Other
          </a>
        </ul>
        <div className="space">
          <button className="openCart">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="cart"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                ></path>
              </svg> */}
          </button>
        </div>
      </header>
    </nav>
  );
}

export default Header;
