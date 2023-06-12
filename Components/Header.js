


import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import styles from "../styles/header.module.css";
import { signOut } from "next-auth/react";


const Header = () => {
  const router = useRouter();

  useEffect(() => {
    // Retrieve and parse the "user" item from sessionStorage
    const sessionUser = JSON.parse(window.sessionStorage.getItem('user'));

    // Use the sessionUser object as needed
    console.log(sessionUser);
  }, []);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTitle}>Dashboard</div>
      <div className={styles.headerInnerContainer}>
        <div className={styles.searchbar}>
          <input
            type="text"
            className={styles.searchbarInput}
            placeholder="Search..."
          />
          <img
            src="/assets/SearchIcon.svg"
            alt="notification"
            className={styles.searchIcon}
          />
        </div>
        <img
          src="/assets/Notification.svg"
          alt="notification"
          className={styles.notificationIcon}
        />
        <img
          src="/assets/Profile.svg"
          className={styles.profilePicture}
          onClick={() => {
           signOut({callbackUrl:"/login"})
          }}
        />
      </div>
    </div>
  );
};

export default Header;

