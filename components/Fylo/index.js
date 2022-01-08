import React from "react";
import styles from './style.module.scss';
import Link from 'next/link';
import DocumentIcon from '/public/icons/icon-document.svg';
import FolderIcon from '/public/icons/icon-folder.svg';
import UploadIcon from '/public/icons/icon-upload.svg';

const Fylo = () => {
    return (
        <div className={styles.fylo}>
            <h1>
                <Link href={'/'}>
                    <a aria-label={'fylo'}>
                        <img className={styles.logo}
                             src={'/logo.svg'}
                             alt={'fylo'}
                        />
                    </a>
                </Link>
            </h1>
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
