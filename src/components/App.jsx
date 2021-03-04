import './App.scss';
import Navbar from "./Navbar"
import Showcase from "./Showcase"
import { useEffect, useState } from 'react'
import fetchPhotos from '../data/fetchPhotos';

function App() {
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    fetchPhotos()
    return (res) => {
      setPhoto(res)
    }
  }, [])
  console.log("photos:", photo)

  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section>
        <Showcase 
          // photos = {photo}
        />
      </section>
    </main>
  );
}

export default App;