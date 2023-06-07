// import React, { useEffect } from "react";
// import "../styles/header.module.css";
// // import { useNavigate } from "react-router-dom";
// import { useRouter } from 'next/router';

// const Header = (sessionUser) => {

//   const router = useRouter();

//   useEffect(() => {
//     // Retrieve and parse the "user" item from sessionStorage
//     const sessionUser = JSON.parse(window.sessionStorage.getItem('user'));

//     // Use the sessionUser object as needed
//     console.log(sessionUser);
//     Header(sessionUser)
//   }, []);
//   return (
//     <>
//       <div className="headerContainer">
//         <div className="headerTitle">Dashboard</div>
//         <div className="headerInnerContainer">
//           <div className="searchbar">
//             <input
//               type="text"
//               className="searchbarInput"
//               placeholder="Search..."
//             />
//             <img
//               src="/assets/SearchIcon.svg"
//               alt="notification"
//               className="searchIcon"
//             />
//           </div>
//           <img
//             src="assets/Notification.svg"
//             alt="notification"
//             className="notificationIcon"
//           />
//           <img
//             src={sessionUser?.picture || "assets/Profile.svg"}
//             className="profilePicture"
//             onClick={() => {
//               window.sessionStorage.removeItem("user");
//               router.push('/');
//             }}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;



import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import styles from "../styles/header.module.css";

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
            window.sessionStorage.removeItem("user");
            router.push('/');
          }}
        />
      </div>
    </div>
  );
};

export default Header;

