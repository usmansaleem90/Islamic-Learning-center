import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import Header from '../../Web/Home/Header';
import Footer from '../../Web/Home/Footer';
const ReadQuran = () => {
  const [surahs, setSurahs] = useState([]);
  const [currentSurah, setCurrentSurah] = useState(null);
  const [ayahs, setAyahs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchSurahs();
  }, []);

  useEffect(() => {
    const handleBackButton = (event) => {
      if (currentSurah) {
        event.preventDefault();
        setCurrentSurah(null);
        setSearchResults([]);
        window.history.pushState(null, null, '/read-quran'); // Reset URL to the main page
      }
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [currentSurah]);

  const fetchSurahs = async () => {
    try {
      const response = await axios.get('https://api.alquran.cloud/v1/surah');
      setSurahs(response.data.data);
    } catch (error) {
      console.error('Error fetching surahs', error);
    }
  };

  const fetchAyahs = async (surahNumber) => {
    try {
      const response = await axios.get(`https://api.alquran.cloud/v1/surah/${surahNumber}/en.ahmedali`);
      setAyahs(response.data.data.ayahs);
      setCurrentSurah(response.data.data);
      window.history.pushState(null, null, `#surah-${surahNumber}`);
    } catch (error) {
      console.error('Error fetching ayahs', error);
    }
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setSearchResults([]);
    } else {
      handleSearch(term);
    }
  };

  const handleSearch = async (term) => {
    try {
      const response = await axios.get(`https://api.alquran.cloud/v1/search/${term}/all/en.ahmedali`);
      setSearchResults(response.data.data.matches || []);
    } catch (error) {
      console.error('Error searching ayahs', error);
      setSearchResults([]);
    }
  };

  const handleBackToSurahs = () => {
    setCurrentSurah(null);
    setSearchResults([]);
    window.history.pushState(null, null, '/read-quran'); // Reset URL to the main page
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '1rem',
      paddingTop: '4rem',
      backgroundColor: '#fff',
      width: '70%',
      maxWidth: '900px',
      height: 'auto',
      margin: '100px auto',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    surahContainer: {
      width: '100%',
      margin: '1rem 0',
    },
    surahTitle: {
      textAlign: 'center',
      marginBottom: '1rem',
      fontSize: '1.5rem',
      color: '#007BFF',
    },
    ayahText: {
      margin: '0.5rem 0',
      fontSize: '1.2rem',
    },
    translationText: {
      fontSize: '1rem',
      margin: '1rem 0',
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      width: '100%',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    },
    buttonContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: '1rem',
      width: '100%',
      justifyContent: 'center',
      marginTop: '2rem',
    },
    surahButton: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      border: 'none',
      backgroundColor: '#1d3557',
      color: 'white',
      fontSize: '1.2rem',
      fontWeight: '600',
      borderRadius: '10px',
      cursor: 'pointer',
      textAlign: 'center',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    actionButton: {
      backgroundColor: '#1d3557',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      marginTop: '1rem',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
  };

  return (
    <>
     <Header />
   
    <div style={styles.container}>
      <h1>Read the Quran in English</h1>
      <Search onSearchChange={handleSearchChange} />
      {searchResults.length > 0 ? (
        <div className="search-results">
          <h2>Search Results ({searchResults.length} found)</h2>
          {searchResults.map((result) => (
            <div key={result.number} style={styles.translationText}>
              <p style={styles.ayahText}>
                <strong>{result.surah.number}:{result.numberInSurah}.</strong> {highlightText(result.text, searchTerm)}
              </p>
            </div>
          ))}
          <button style={styles.actionButton} onClick={handleBackToSurahs}>Back to Surahs</button>
        </div>
      ) : currentSurah ? (
        <div style={styles.surahContainer}>
          <h2 style={styles.surahTitle}>Surah {currentSurah.englishName} ({currentSurah.name})</h2>
          {ayahs.map((ayah) => (
            <div style={styles.translationText} key={ayah.number}>
              <p style={styles.ayahText}>
                <strong>{ayah.numberInSurah}.</strong> {ayah.text}
              </p>
            </div>
          ))}
          <button style={styles.actionButton} onClick={handleBackToSurahs}>Back to Surahs</button>
        </div>
      ) : (
        <div style={styles.buttonContainer}>
          {surahs.map((surah) => (
            <button
              style={styles.surahButton}
              key={surah.number}
              onClick={() => fetchAyahs(surah.number)}
            >
              <span className="surah-number">{surah.number}</span> {surah.englishName}
            </button>
          ))}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

const highlightText = (text, term) => {
  const parts = text.split(new RegExp(`(${term})`, 'gi'));
  return (
 <>

 <span>
      {parts.map((part, index) =>
        part.toLowerCase() === term.toLowerCase() ? <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> : part
      )}
    </span>
   
 </>
  );
};

export default ReadQuran;
