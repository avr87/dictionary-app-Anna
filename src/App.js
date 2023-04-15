import "./App.css";
import Search from "./Search";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">English Dictionary</header>
        <main><Search  defaultKeyword="safari" /></main>
        <footer>
          Coded by Anna van Ruiten and hosted on <a href="https://earnest-dusk-24b82f.netlify.app">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
