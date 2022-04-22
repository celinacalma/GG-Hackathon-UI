import React from 'react';
import styles from './NotFoundPage.module.css';

/**
 * This component renders a styled 404 page.
 * @returns not found page.
 */
const NotFoundPage = () => (
  <div className={styles.backgroundimage} data-testid="not-found-page" />
);

export default NotFoundPage;
