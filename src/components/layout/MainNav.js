import React from "react";
import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Greatest Quotes</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="quotes" activeClassName={styles.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="addnew" activeClassName={styles.active}>
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
