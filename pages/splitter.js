import MainLayout from '../components/MainLayout';
import { useState } from 'react';
import SongProcessing from '../components/SongProcessing'; // Import the SongProcessing component
import styles from './index.module.css'; // Ensure you have a CSS module or replace with proper styles

const Splitter = () => {
  const [fileName, setFileName] = useState('Browse my file');

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name); // Update button text to the selected file name
    }
  };

  return (
    <MainLayout>
      <div className={styles.data}>
        <h4 className={styles.h3}>HOW IT WORKS</h4>
        <h1 className={styles.h1}>Splitter AI</h1>
        <h2 className={styles.h2}>
          Split music into separated parts with AI-Powered algorithms
        </h2>
        <img
          src="https://vocalremover.org/img/splitter/player_en.png"
          alt="Splitter AI"
          className={styles.img} // Added img class
        />

        {/* Custom button for file input */}
        <label htmlFor="file-upload" className={styles.customButton}>
          {fileName}
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className={styles.fileInput} // Hide the actual file input
          aria-label="Upload file" // Improved accessibility
        />
      </div>

   
      <SongProcessing 
        header="AI-Powered Music Separator" 
        text1="This app allows you to separate music into individual streams such as vocal, bass, and percussion, and lets you rebalance their individual volumes."
        text2="Once you choose a song, artificial intelligence will separate music into stems: vocals, bass, drums, and others. Processing usually takes about 1 minute."
      />
    </MainLayout>
  );
};

export default Splitter;
