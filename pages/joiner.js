// pages/dashboard.js
import { useState } from 'react'; // Import useState
import SongProcessing from '@/components/SongProcessing';
import MainLayout from '../components/MainLayout';
import styles from './index.module.css';

const Joiner = () => {
    const [fileName, setFileName] = useState('Browse my file');

    const handleFileChange = (event) => {
      if (event.target.files.length > 0) {
        setFileName(event.target.files[0].name); // Update button text to the selected file name
      } else {
        setFileName('Choose a file'); // Reset if no file is chosen
      }
    };

    const triggerFileUpload = () => {
      document.getElementById('file-upload').click(); // Programmatically trigger file input click
    };

    return (
      <MainLayout>
        <div className={styles.data}>
        
          <h1 className={styles.h1}>Audio Joiner</h1>
          <h2 className={styles.h2}>
          Join multiple audio tracks into one. Choose audio files you want to merge
          </h2>
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          id="file-upload"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        {/* Custom button to trigger file input */}
        <button className={styles.cb} onClick={triggerFileUpload}>
          {fileName}
        </button>

        
      </MainLayout>
    );
};

export default Joiner;
