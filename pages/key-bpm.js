// pages/dashboard.js
import { useState } from 'react'; // Import useState
import SongProcessing from '@/components/SongProcessing';
import MainLayout from '../components/MainLayout';
import styles from './index.module.css';

const KeyBPM = () => {
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
        <h2 className={styles.h2}>How it works
        Tap tempo</h2>
        <h1 className={styles.h1}>How it works
Tap tempo
Song Key and BPM Finder</h1>
        <h2 className={styles.h2}>
        Analyzes music and finds Key, Scale and BPM for any song
        </h2>
        </div>

        {/* Custom button for file input */}
        <label htmlFor="file-upload" className={styles.cb}>
          {fileName}
        </label>
      

        {/* SongProcessing components */}
        <div className={styles.box1}>
        <SongProcessing 
          header="How to find Key & BPM" 
          text1="This app analyzes music and estimates pitch and tempo [e.g. A♭ major, 120 bpm]. You can upload multiple files at once. Processing time takes a few seconds." 
          text2=" "
        />
        
        <SongProcessing 
          header="Change Key & BPM"
          text1="Using Pitch Shifter tool you can transpose song to a different key and tempo."
        
        />

        <SongProcessing 
          header="Tap tempo"
          text1="Tap tempo tool allows you to calculate tempo beats per minute by tapping space key to the rhythm or beat."
        />
        <SongProcessing 
          header="🔒 Privacy and Security Guaranteed"
          text1="This is serverless app. Your files does not leave your device"
        />

      </div>
     
    </MainLayout>
  );
};

export default KeyBPM;
