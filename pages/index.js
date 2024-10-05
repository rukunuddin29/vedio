// pages/index.js
import MainLayout from '../components/MainLayout';
import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
    const [fileName, setFileName] = useState('Browse my file');

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFileName(event.target.files[0].name); // Update button text to the selected file name
        } else {
            setFileName('Choose a file'); // Reset if no file is chosen
        }
    };

    return (
        <MainLayout>
            <div className={styles.data}>
                <h2 className={styles.h2}>HOW IT WORKS</h2>
                <h1 className={styles.h1}>Vocal Remover and Isolation</h1>
                <h2 className={styles.h2}>
                    Separate voice from music out of a song free with powerful AI algorithms
                </h2>
                <img src="https://vocalremover.org/img/remover/player_en.png" alt="" />

            {/* Custom button for file input */}
          
    </div>  <label htmlFor="file-upload" className={styles.customButton}>
                {fileName}
            </label>

        </MainLayout>
    );
};

export default Home;
