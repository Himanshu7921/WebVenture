import { useState } from 'react'
import './App.css'
import Login from "./login";
import Signup from "./Signup";


function App() {
  // simple view toggle so you can view Login or Signup from the root
  const [view, setView] = useState('login');

  return (
    <div>


      <main>
        {view === 'login' ? <Login /> : <Signup />}
      </main>
    </div>
  );
}

export default App;
