// components/SongProcessing.js
import React from 'react';
import styles from './SongProcessing.module.css'; // Ensure the path and name are correct

const SongProcessing = ({ header, text1, text2 }) => { // Accept header, text1, and text2 as props
  return (
    <>
      <h1 className={styles.header}>{header}</h1> {/* Dynamic Header */}
      <p className={styles.textB}>{text1}<br/>{text2}</p> {/* First paragraph */}
      {/* Second paragraph */}
    </>
  );
};

export default SongProcessing;
