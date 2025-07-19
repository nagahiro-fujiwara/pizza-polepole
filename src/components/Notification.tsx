import React from 'react';
import styles from './Notification.module.css';
import Link from 'next/link';

type NotificationProps = {
  message: string;
  link?: string;
  linkText?: string;
};

const Notification: React.FC<NotificationProps> = ({ message, link, linkText }) => {
  return (
    <div className={styles.notification}>
      <span>{message}</span>
      {link && linkText && (
        <Link href={link} className={styles.link}>
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default Notification;
