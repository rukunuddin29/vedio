// pages/dashboard.js
import { useState } from 'react'; // Import useState
import SongProcessing from '@/components/SongProcessing';
import MainLayout from '../components/MainLayout';
import styles from './index.module.css';

const Pitcher = () => {
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
        </div>

        {/* Custom button for file input */}
        <label htmlFor="file-upload" className={styles.customButton}>
          {fileName}
        </label>
      

        {/* SongProcessing components */}
        <div className={styles.box1}>
        <SongProcessing 
          header="Free Online Pitch Shifter" 
          text1="This app changes the song pitch and/or playback speed using one of the best pitch shifting algorithms. The musical key, scale, and bpm will be automatically detected." 
          text2="You can easily transpose music to a different key and change the tempo by adjusting the pitch shifter key and bpm sliders."
        />
        
        <SongProcessing 
          header="Feature"
          text1="o Analyzes music and finds musical key, scale and bpm."
          text2="o Changes audio pitch."
          text3="o Speed up or slow down music playback speed."
        />

        <SongProcessing 
          header="Privacy and Security Guaranteed"
          text1="This is a serverless app. Your files do not leave your device."
        />
      </div>
     
    </MainLayout>
  );
};

export default Pitcher;
