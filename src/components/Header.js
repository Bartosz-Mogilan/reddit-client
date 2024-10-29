import React from "react";
import styles from "../css/header.module.css";


function Header({searchQuery, setSearchQuery}) {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>My Reddit App</h1>
            <input
                type ="text" 
                placeholder="Search" 
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
                />
        </header>
    );
}

export default Header;