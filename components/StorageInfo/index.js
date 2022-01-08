import React from "react";
import styles from './style.module.scss';

const StorageInfo = () => {
    return (
        <div className={styles.storageInfo}>
            <p className={styles.description}>
                You’ve used <strong>815 GB</strong> of your storage
            </p>
            <Progress max={1000}
                      current={815}
                      unit={'GB'}
            />
            <div className={styles.storageLeftBox}>
                <strong>185</strong> <span>GB Left</span>
            </div>
        </div>
    );
};

const Progress = ({ current, min = 0, max, unit }) => {
    const percentage = (current / max) * 100;
    return (
        <div>
            <div className={styles.progress}>
                <div className={styles.progressBar}
                     style={{
                         '--width': `${percentage}%`,
                     }}
                >
                    {percentage >= 5 && (
                        <div className={styles.dot}></div>
                    )}
                </div>
            </div>
            <div className={styles.progressIndicator}>
                <span>
                    {min} {unit}
                </span>
                <span>
                    {max} {unit}
                </span>
            </div>
        </div>
    );
}

export default StorageInfo;
