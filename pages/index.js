import MainLayout from '../components/MainLayout';
import { useState } from 'react';
import SongProcessing from '../components/SongProcessing'; // Import the SongProcessing component
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

  const triggerFileUpload = () => {
    document.getElementById('file-upload').click(); // Programmatically trigger file input click
  };


    return (
        <MainLayout>
            <div className={styles.data}>
                <h2 className={styles.h2}>HOW IT WORKS</h2>
                <h1 className={styles.h1}>Vocal Remover and Isolation</h1>
                <h2 className={styles.h2}>
                    Separate voice from music out of a song free with powerful AI algorithms
                </h2>
                <img 
                    src="https://vocalremover.org/img/remover/player_en.png" 
                    alt="Vocal Remover" 
                />

              
            
            </div>  {/* Custom button for file input */}
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


            {/* Add the SongProcessing component here */}
            <div className={styles.box1}>
            <SongProcessing 
                header="Remove vocals from a song" 
                text1="This free online application will help remove vocals from a song by creating karaoke. " 
                text2="Once you choose a song, artificial intelligence will separate the vocals from the instrumental ones. You will get two tracks - a karaoke version of your song (no vocals) and acapella version (isolated vocals).

Despite the complexity and high cost of service, you can use it absolutely free. Processing usually takes about 10 seconds."
            />
            </div>
        </MainLayout>
    );
};

export default Home;
