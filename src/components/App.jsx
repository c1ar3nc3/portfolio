import './App.scss';
import Navbar from "./Navbar"
import Showcase from "./Showcase"

function App() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section>
        <Showcase />
      </section>
    </main>
  );
}

export default App;