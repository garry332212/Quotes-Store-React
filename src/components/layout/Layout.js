import React, { Fragment } from "react";
import styles from "./Layout.module.css";
import MainNav from "./MainNav";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNav />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
