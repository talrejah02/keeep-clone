import React from "react";
import "./Nav.css";

function Header() {
  return (
    <section className="Navbar">
      <section className="nav-left">
        <span className="menu-icon">
          <svg width="20px" height="20px" viewBox="0 0 24 24">
            <path
              d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"
              fill="#5F6368"
            ></path>
          </svg>
        </span>
        <span className="logo-svg" >
          <svg width="30px" height="30px" viewBox="0 0 256 352">
            <path
              d="M232 352H24c-13.28 0-24-10.72-24-24V24C0 10.72 10.72 0 24 0h144l88 88v240c0 13.28-10.72 24-24 24z"
              fill="#FFBA00"
            ></path>
            <path fill="#FF9500" d="M168 0l88 88h-88z"></path>
            <path
              d="M156 236v20h-56v-20h56zm-28.08-115.999l.78.006c28.323.46 51.14 23.56 51.14 51.993c0 18.56-9.72 34.8-24.32 44h-55.2C85.68 206.8 76 190.56 76 172c0-28.72 23.28-52 52-52l-.08.001z"
              fill="#FFF"
            ></path>
          </svg>
        </span>
        <span className="nav-text">Keep</span>
        
      </section>

      <section className="nav-right">

        <section className="search-div">
          <span className="right-svg"><svg width="auto" height="auto" viewBox="0 0 512 512"><path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z" fill="#5F6368"></path></svg></span>
          <section className="search">
            <span  className="back-svg" ><svg width="20px" height="20px" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z" fill="currentColor"></path></svg></span>
             <input  type="text" placeholder="search" />
           </section>
        </section>

        <section className="tool-div">

          <span className="right-svg"><svg width="20px" height="20px" viewBox="0 0 24 24"><path fill="#5F6368" d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19A7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7a7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83a1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06a.33.33 0 0 0 .1-.06a.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3A9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"></path></svg></span>
          <span className="right-svg"><svg width="20px" height="20px" viewBox="0 0 24 24"><path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326a3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674a9.99 9.99 0 0 1 5.007.002a3 3 0 0 0 4.632 2.672A9.99 9.99 0 0 1 20.66 7c.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347a9.99 9.99 0 0 1-2.501 4.337a3 3 0 0 0-4.631 2.674a9.99 9.99 0 0 1-5.007-.002a3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565a7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12a4.99 4.99 0 0 1-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="#5F6368"></path></svg></span>
          <span className="right-svg"><svg width="20px" height="20px" viewBox="0 0 28 28"><g fill="none"><path d="M14 20a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm8.5 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm-17 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm8.5-8.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm8.5 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm-17 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zM14 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm8.5 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm-17 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5z" fill="#5F6368"></path></g></svg></span>
          <section className="right-svg">
            <img className="profile-image" src="https://lh3.googleusercontent.com/ogw/ADea4I5HsBGV8v13e5yRTenRABrJUvH9T9qWYSiz2NBw=s32-c-mo" alt="" width="25px" height="25px"/>
          </section>
        </section>
  </section>
    </section>
  );
}

export default Header;
