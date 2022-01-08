import React from "react";
import styles from './style.module.scss';
import Link from 'next/link';
import Logo from '/public/logo.svg';
import DocumentIcon from '/public/icons/icon-document.svg';
import FolderIcon from '/public/icons/icon-folder.svg';
import UploadIcon from '/public/icons/icon-upload.svg';

const Fylo = () => {
    return (
        <div className={styles.fylo}>
            <Link href={'/'}>
                <a aria-label={'fylo'}>
                    <Logo className={styles.logo} />
                </a>
            </Link>
            <ul className={styles.iconContainer}>
                <li className={styles.iconItem}>
                    <DocumentIcon />
                </li>
                <li className={styles.iconItem}>
                    <FolderIcon />
                </li>
                <li className={styles.iconItem}>
                    <UploadIcon />
                </li>
            </ul>
        </div>
    );
};

export default Fylo;
