// import logo from './logo.svg';
/* import './assets/css/App.css'; */
import './assets/scss/App.scss';

import NewsItemFunc from './componets/NewsItemFunc.js';
import NewsItemClass from './componets/NewsItemClass';

/* let stylingObject = {
  header: {
    color: "red",
    backgroundColor: "white"
  },
  p: {
    color: "red"
  }
} */

function App() {
  return (
    <div>
      <NewsItemFunc title="SEE THE UNMATCHED BEAUTY OF THE GREAT" text="Free directories: directories are perfect for customers that are searching for..."/>
      <NewsItemFunc title="EFFECTIVE ADVERTISING POINTERS." text="Having a home based business is a wonderful asset to your life..."/>
      <NewsItemFunc title="HYPNOTIZE YOURSELF INTO THE GHOST." text="There are many things that are important to catalog design..."/>
      {/* <NewsItemClass/>
      <NewsItemClass/>
      <NewsItemClass/> */}
    </div>
  );
}

export default App;


// <div className="App">
    //  {/*  <header className="App-header" style={{'backgroundColor': 'white', 'volor': 'red'}}> */}
    //  {/*  <header className="App-header" style={stylingObject.header}> */}
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     {/* < style={stylingObject.p}> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>