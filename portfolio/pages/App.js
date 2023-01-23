import { useState, useContext } from 'react';
import { ThemeContext } from '../behaviour/context';

const Layout = (props) => {

    return (
        <div className="container">
        <header className="header">
          <h1 className="header-title">My Website</h1>
        </header>
        <main className="main-content">
          {props.children}
        </main>
        <footer className="footer">
          <p className="footer-text">Copyright © 2021 My Website</p>
        </footer>
      </div>
    )
}


function App() {
    const theme = useContext(ThemeContext);
    console.log(theme)
    return (
      <Layout>
        <p>Welcome to my website!</p>
        <div style={{background: theme.background, color: theme.text}}>This is a test div</div>
      </Layout>
    );
  }
  
  export default App;
    