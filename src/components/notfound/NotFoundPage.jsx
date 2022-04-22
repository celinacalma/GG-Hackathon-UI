import React from 'react';
import styles from './NotFoundPage.module.css';
import MagnifyingDino from '../../util/logos/magnifyingDino.png';

/**
 * This component renders a styled 404 page.
 * @returns not found page.
 */
function NotFoundPage() {
  return (
    <div className={styles.background}>
      <img src={MagnifyingDino} alt="magnifyingdino" />
    </div>
  );
}

export default NotFoundPage;
