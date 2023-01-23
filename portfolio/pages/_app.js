import { ThemeContext } from '../behaviour/context';
import { useState, useContext } from 'react';
import GlobalStyles from '../utils/GlobalStyles';
import NightModeButton from '../components/button/Button';

function App({ Component, pageProps }) {
  const theme = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(theme);


  function toggleTheme() {
    setCurrentTheme(currentTheme === theme.dark ? theme.light : theme.dark);
  }

  return (
    <ThemeContext.Provider value={currentTheme}>
    <GlobalStyles theme={currentTheme}/>
      <NightModeButton onClick={toggleTheme}></NightModeButton>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default App;