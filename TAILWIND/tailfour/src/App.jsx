import { useState } from 'react'
import './App.css'
import Login from "./login";
import Signup from "./Signup";
import Grid from "./grid";


function App() {
  // simple view toggle so you can view Login or Signup from the root
  const [view, setView] = useState('grid');

  return (
    <div>


      <main>
        {view === 'grid' ? <Grid /> : <Signup />}
      </main>
    </div>
  );
}

export default App;
