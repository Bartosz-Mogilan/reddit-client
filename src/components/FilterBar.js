import React from "react";
import styles from "../css/filterBar.module.css";

function FilterBar({ selectedFilter, setSelectedFilter }) {
    const filters = ["hot", "new", "top"];
    return (
        <div className={styles.filterBar}>
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={`${styles.filterButton} ${selectedFilter === filter ? styles.active : ""}`}
                    onClick={() => setSelectedFilter(filter)}
                    >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
            ))}
        </div>
    );
}

export default FilterBar;