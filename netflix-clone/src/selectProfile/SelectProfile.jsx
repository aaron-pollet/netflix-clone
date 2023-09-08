import React from 'react';
import styles from '../selectProfile/selectProfile.module.css';

const SelectProfile = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Who's watching?</h1>
      <div className={styles.profiles}>
        <div className={styles.profile}>
          <div className={styles.profileImage}></div>
          <div className={styles.profileName}>Mario</div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileImage}></div>
          <div className={styles.profileName}>Gregory</div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileImage}></div>
          <div className={styles.profileName}>Milton</div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileImage}></div>
          <div className={styles.profileName}>Kids</div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileImage}></div>
          <div className={styles.profileName}>Watch Together</div>
        </div>
      </div>
      <button className={styles.button}>Manage Profiles</button>
    </div>
  );
};

export default SelectProfile;
