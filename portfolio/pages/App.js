import { useState, useContext } from 'react';
import { ThemeContext } from '../behaviour/context';

const Layout = (props) => {

    return (
      <></>
    )
}


function App() {
    const theme = useContext(ThemeContext);
    console.log(theme)
    return (
      <Layout>
        <div style={{background: theme.background, color: theme.text}}>This is a test div</div>
      </Layout>
    );
  }
  
  export default App;
    