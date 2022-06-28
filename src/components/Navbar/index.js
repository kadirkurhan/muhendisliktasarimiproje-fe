import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">DEXP</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Hosts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link to="/register">
          <Button colorScheme="purple">Register</Button>
        </Link>
        <Link to="/login">
          <Button colorScheme="purple">Login</Button>
        </Link>
      </div>
    </nav>
  );
}
