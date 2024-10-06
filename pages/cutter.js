// pages/dashboard.js
import { useState } from 'react'; // Import useState
import SongProcessing from '@/components/SongProcessing';
import MainLayout from '../components/MainLayout';
import styles from './index.module.css';

const Cutter = () => {
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
          <h2 className={styles.h2}>How it works Joiner</h2>
          <h1 className={styles.h1}>Audio Cutter</h1>
          <h2 className={styles.h2}>
            Free editor to trim and cut any audio file online
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

        {/* SongProcessing components */}
        <div className={styles.box3}>
          <SongProcessing
            header="How to cut audio"
            text1="This app can be used to trim and/or cut audio tracks, remove an audio fragment. Fade in and fade out your music easily to make the audio harmoniously.

            It is fast and easy to use. You can save the audio file in any format (codec parameters are configured)

            It works directly in the browser, no need to install any software, and is available for mobile devices."
            text2=" "
          />

          <SongProcessing
            header="🔒 Privacy and Security Guaranteed"
            text1="This is a serverless app. Your files do not leave your device."
          />
        </div>
      </MainLayout>
    );
};

export default Cutter;
